import React from 'react'
import { quantum } from 'ldrs'

quantum.register()

// Default values shown
const Loading = () => {

    quantum.register()
    return (
        <div className='bg-violet-900 h-screen overflow-hidden w-screen flex flex-row justify-center items-center'>
            <l-quantum
                size="200"
                speed="1.75"
                color="#ac76c2"
            ></l-quantum >
        </div >
    )
}

export default Loading
