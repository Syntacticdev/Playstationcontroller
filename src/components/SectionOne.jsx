import React, { useState, useEffect } from 'react'

const SectionOne = () => {
    const [open, setOpen] = useState(false)

    useEffect(
        () => {
            window.addEventListener("resize", () => {
                setOpen(false)
            })
        },
        [],
    )

    const navigations = ["Games", "Hardware", "Service", "News", "Shop", "Support"]
    return (
        <div className='h-screen from-black to-[#e994e7] '>
            <header className='px-5 sm:px-10 py-4 flex items-center justify-between'>
                <img src="/images/logo.png" className=' w-24 h-24 sm:w-14 sm:h-14 invert' alt="" />


                <nav className={`${open ? "absolute bg-[rgba(0,0,0,.7)] w-4/5 z-10 h-2/4 top-[50%] left-[50%] transition-all transform -translate-y-2/4 -translate-x-2/4 flex flex-col items-center justify-around text-xl rounded-md" : "hidden sm:flex ml-2 "}`}>
                    {navigations.map((link, i) => (
                        <li className='list-none mx-2 sm:text-lg text-md font-semibold sm:mx-6' key={i}><a className='hover:text-white text-slate-100' href={`${link.toLowerCase()}`}>{link}</a></li>
                    ))}
                </nav>
                <button onClick={() => setOpen((prev) => !prev)} className='sm:hidden'><img className='w-12 h-12' src="/images/menu.png" alt="" /></button>
            </header>

            <div className='grid justify-center items-center h-[80vh] sm:w-4/5 mx-auto sm:grid-cols-2 relative text-white'>
                <div className='flex flex-col px-3  justify-center '>
                    <div className="flex">
                        <h1 className='text-5xl sm:text-8xl text-white font-bold'>DualSense </h1>
                        <sup className='text-2xl sm:text-5xl mt-6 font-semibold'>TM</sup>
                    </div>
                    <p className='my-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur, asperiores dicta reiciendis numquam eligendi dignissimos odio facere nihil. Suscipit aliquam alias blanditiis ea nihil velit veniam nisi fugit hic?</p>
                    <div className='mt-3'>
                        <button className='outline-none shadow-md shadow-pink-700 cursor-pointer px-6 py-2 rounded-full bg-pink-600 text-white'>Buy Now</button>
                        <button className='outline-none shadow-md shadow-pink-700 cursor-pointer px-6 py-2 rounded-full bg-pink-300 text-red-600 ml-3'>More Products</button>
                    </div>
                </div>

                <img src="/images/image-1.png" alt="" />

            </div>
        </div>
    )
}

export default SectionOne