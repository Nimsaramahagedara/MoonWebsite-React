import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
const TopNav = () => {
    const [menuShow ,  setMenuShow] = useState(false)
    const handleMenuShow = () => {
        setMenuShow((prev)=>!prev)
    }
    return (
        <nav className='text-gray-500 uppercase w-full py-5 z-30 relative'>
            <span className='text-2xl md:hidden text-white block  ml-auto w-fit mr-5 group cursor-pointer' onClick={handleMenuShow}><FaBars /></span>
            <ul className={` bg-black md:bg-transparent md:flex md:flex-row flex-col items-center justify-center gap-2 md:gap-5 absolute md:top-5 top-16 w-full ${menuShow ? 'flex' : 'hidden'}`}>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>dextool</li>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>etherscan</li>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>X</li>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>telegram</li>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>contact</li>
                <li className='px-5 py-2 rounded-full hover:border-white border-transparent border cursor-pointer hover:text-white transition-all'>buy</li>
            </ul>
        </nav>
    )
}

export default TopNav