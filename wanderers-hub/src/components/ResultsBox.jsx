import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonTwo from './ButtonTwo';
import Imagewheel from './Imagewheel';
import Light from './Light';
import GoogleMapsComponent from './map';
import ResultsAnimals from './ResultsAnimals';
const ResultsBox = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [body, setBody] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const res = sessionStorage.getItem('photo')
    setPhotos(res);
    console.log("good")
    if (body.length > 0) {
      const words = body[0].trim().split(/[\n\s\\]+/);
      const restOf = words.slice(1);
      const resultBody = restOf.join("");
    }
  }, [loading])
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'photo') {
        setPhotos(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  {/*camel:0 pb:1 monkey:2 raccoon:3*/ }
  const changeLoading = (val) => {

  }
  const setSelectedFunc = (val) => {
    setSelected(val);
  }

  const setBodyFunc = (val) => {
    setBody(val);
  }

  const setPhotosFunc = (val) => {
    setPhotos(val);
  }
  const returnHome = () => {
    router.push('/');
  }
  return (<div>
    <div className="relative">
      <div className="absolute">
        <ResultsAnimals />
      </div>
      <div className="absolute left-[800px] top-[80px]">
        <Light state={selected} setState={setSelectedFunc} />
      </div>
    </div>
    {selected == -1 ? (
      <div>
        <div className="relative left-[100px] top-[90px] w-[650px] h-[600px] bg-opacity-25 bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
          <div className="absolute w-screen left-[50px] top-[200px] font-sans text-[40px] text-white leading-[normal]">
            Your Suggestions Are Ready!
            <div className="mt-2 absolute left-[120px] text-[20px] ">
              Click on an Animal to Proceed
            </div>
          </div>

        </div>

        <div className="absolute top-[700px] left-[20px] pt-8 flex flex-row cursor-default text-white">
          <div>
            <Image
              src="/back.png"
              alt="back"
              width={25}
              height={25} onClick={returnHome} className="hover:cursor-pointer" />
          </div>
          <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
            Take me back to Home Page
          </div>
          <button className="relative px-2 left-6 font-inter cursor-default hover:cursor-pointer border border-white rounded" onClick={null}>
            Show me more places
          </button>
        </div>
      </div>
    )

      : (
        <div>
          <div className="relative left-[100px] top-[90px] w-[650px] h-[600px] bg-opacity-25 bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
            <div className="absolute w-[275px] left-[350px] top-[50px] font-sans text-[30px] text-white leading-[normal] text-left">
              {body.length > 0 && (
                <>{body[0].trim().split(/[\n\s\\]+/)[0]}</>)}
              <div className="pt-10">
                <div className="text-[20px] overflow-auto max-h-[350px]"> {/* Adjust width and max height as needed */}
                  {body.length > 0 && (
                    <>{body[0].replace(/^\S+\s*/, '')}</>)}
                </div>
              </div>
              <div className="flex flex-row pt-3">
                <div>
                  <ButtonTwo function={null} text={"Book Flight Now"} />
                </div>
                <div className="pl-3">
                  <ButtonTwo function={null} text={"Book Flight and Hotel"} />
                </div>
              </div>
            </div>
            {loading === false && (
              <Imagewheel photos={photos} />)}
            <div className="absolute top-[305px] left-[25px] w-[300px] h-[250px] bg-gray-500 rounded-[40px]">
              <GoogleMapsComponent selected={selected} setPhotoArray={setPhotosFunc} setBodyArray={setBodyFunc} setLoading={changeLoading} />
            </div>

          </div>
          <div className="absolute top-[700px] left-[20px] pt-8 flex flex-row cursor-default text-white">
            <div>
              <Image
                src="/back.png"
                alt="back"
                width={25}
                height={25} onClick={returnHome} className="hover:cursor-pointer" />
            </div>
            <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
              Take me back to Home Page
            </div>
            <button className="relative px-2 left-6 font-inter cursor-default hover:cursor-pointer border border-white rounded" onClick={null}>
              Show me more places
            </button>
          </div>
        </div>
      )
    }
  </div>
  )
}

export default ResultsBox