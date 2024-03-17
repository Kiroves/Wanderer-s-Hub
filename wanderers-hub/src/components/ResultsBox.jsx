import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ResultsBox = () => {
  const router = useRouter();
  const returnHome = () => {
    router.push('/');
}

  return (
    <div >
         <div className="relative left-[100px] top-[90px] w-[650px] h-[600px] bg-opacity-25 bg-gradient-to-b from-white/20 via-blue-300/20 to-yellow-200/20 rounded-2xl border border-white border-opacity-20">
          <div className="absolute w-[250px] left-[350px] top-[50px] font-sans text-[30px] text-white leading-[normal] text-left">
            Camel Fren
            <div className = "pt-10">
              <div className="text-[20px] overflow-auto max-h-[425px]"> {/* Adjust width and max height as needed */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[700px] left-[20px] pt-8 flex flex-row cursor-default hover:cursor-pointer" onClick={returnHome}>
                <div>
                    <Image
                        src="/back.png"
                        alt="back"
                        width={25}
                        height={25} />
                </div>
                <div className="pl-3 font-inter cursor-default hover:cursor-pointer" onClick={returnHome}>
                    Take me back to Home Page
                </div>
            </div>
    </div>
  )
}

export default ResultsBox