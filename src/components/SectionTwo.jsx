import React, { useRef, useState } from 'react'


const SectionTwo = () => {
    const [playing, setPlaying] = useState(false)
    const ref = useRef(null)

    const play = () => {
        if (playing) {
            ref?.current?.pause();
            setPlaying(false);
        } else {
            ref?.current?.play();
            setPlaying(true);
        }
    }


    return (
        <div className='h-screen bg-pink-200 px-2 flex flex-col items-center justify-center'>
            <div className='sm:w-3/5 mb-10 mx-auto'>
                <h1 className='font-bold text-5xl sm:text-6xl text-pink-600 text-center mb-4'>Heighten Your Senses</h1>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem blanditiis, debitis veniam dicta similique sapiente vel esse accusantium! Voluptatum!</p>
            </div>
            <div className="rounded-xl relative overflow-hidden w-4/5 mx-auto sm:h-[400px]">
                <button className='absolute top-2/4 z-10 leading-none left-2/4 transform' onClick={play}>
                    {
                        playing ? <img src="/images/pause.png" className='w-9 h-9 pointer-events-none invert' alt="" />

                            : <img src="/images/play.png" className='w-9 h-9 pointer-events-none invert' alt="" />

                    }
                </button>
                <video ref={ref} src="/images/video.mp4"></video>
            </div>
        </div>
    )
}

export default SectionTwo