import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonTwo from './ButtonTwo';

const ResultsBox = () => {
  const router = useRouter();
  const returnHome = () => {
    router.push('/');
}

  return (
    <div >
         <div className="relative left-[100px] top-[90px] w-[650px] h-[600px] bg-opacity-25 bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
          <div className="absolute w-[275px] left-[350px] top-[50px] font-sans text-[30px] text-white leading-[normal] text-left">
            Camel Fren
            <div className = "pt-10">
              <div className="text-[20px] overflow-auto max-h-[350px]"> {/* Adjust width and max height as needed */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </div>
            </div>
            <div className = "flex flex-row pt-3">
              <div>
                 <ButtonTwo function={null} text={"Book Flight Now"} />
              </div>
              <div className="pl-3">
                  <ButtonTwo function={null} text={"Book Flight and Hotel"} />
              </div>
            </div>
          </div>

          <div className="absolute top-[305px] left-[25px] w-[300px] h-[250px] bg-gray-500 rounded-[40px]">
            {/* Content */}
          </div>

        </div>
        <div className="absolute top-[700px] left-[20px] pt-8 flex flex-row cursor-default text-white">
                <div>
                    <Image
                        src="/back.png"
                        alt="back"
                        width={25}
                        height={25} onClick ={returnHome} className = "hover:cursor-pointer"/>
                </div>
                <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
                    Take me back to Home Page
                </div>
                <button className = "relative px-2 left-6 font-inter cursor-default hover:cursor-pointer border border-white rounded" onClick = {null}>
                    Show me more places
                </button>
            </div>
    </div>
  )
}

export default ResultsBox