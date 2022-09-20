import React from 'react'

const SectionThree = () => {
    return (
        <div className='h-screen flex-col sm:flex-row flex items-center justify-center bg-white'>
            <img src="/images/image-2.png" alt="" />
            <div className='flex items-center text-center sm:text-start sm:items-start px-2 flex-col'>
                <h3 className='text-2xl sm:text-7xl font-semibold text-pink-600'>DualSense wireless controller - Cosmic Pink</h3>
                <p className='text-xl mt-2'>Explore new gaming frontiers with a valid pink design, complete with matching button details</p>
                <button className='bg-pink-600 shadow-md shadow-pink-700 px-5 w-[150px] py-2 mt-7 sm:mt-2 text-white rounded-full'>BUY NOW</button>
            </div>
        </div>
    )
}

export default SectionThree