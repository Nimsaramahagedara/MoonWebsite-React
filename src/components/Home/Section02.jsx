import React from 'react'
import stone from '../../assets/Home/stone.png';
import astroGroup from '../../assets/Home/astro-group.png'
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'
import { FaChevronDown } from "react-icons/fa";
import { scrollInto } from '../../utils/functions';
const Section02 = () => {

  useGSAP(() => {
    gsap.from('.launch-app', {
      x: '-30vw', duration: 1.5, ease: 'power2.out', opacity: 0,
      scrollTrigger: {
        trigger: '.launch-app', // Element to observe
        start: 'top 80%',
        markers: false
      }
    })
    gsap.from('.how-to-use', {
      x: '30vw', duration: 1.5, ease: 'power2.out', opacity: 0,
      scrollTrigger: {
        trigger: '.launch-app', // Element to observe
        start: 'top 80%',
        markers: false
      }
    })
    gsap.to('.astro-group', {
      scale: 1.1,
      duration: 2.5,
      yoyo: true,
      repeat: -1
    })
    gsap.to('.side-stone', {
      y: -50,
      duration: 3,
      yoyo: true,
      repeat: -1
    })
  })

  return (
    <section className='min-h-screen flex items-center flex-col justify-center bg-black text-white relative pt-10 xl:pt-44 section-2 overflow-hidden panel' id='section-02'>
      <div className='bg-gradient-to-b from-black via-black/50 to-transparent absolute w-full h-44 top-0 left-0 z-10'></div>
      <div className='uppercase text-center relative z-10'>
        <h2 className='text-2xl md:text-4xl font-bold tracking-[10px] mb-4'>JOIN WITH US</h2>
        <p className='text-xs md:text-sm'>we aim to bring a new wave of investors into the crypto space</p>
        <div className='flex items-baseline justify-center gap-1 md:gap-5'>
          <button className='bg-transparent backdrop-blur-sm md:px-5 px-2 py-2 mt-5 xl:mt-10 rounded-full text-white text-xs xl:text-xl font-bold border border-white hover:bg-white transition-all hover:text-black launch-app'>LAUNCH APP</button>
          <button className='bg-transparent backdrop-blur-sm px-8 md:px-10 py-1 md:py-3 mt-5 xl:mt-10 rounded-full text-white text-lg xl:text-2xl font-bold border border-white hover:bg-white transition-all hover:text-black'>SWAP</button>
          <button className='bg-transparent backdrop-blur-sm md:px-5 px-2 py-2 mt-5 xl:mt-10 rounded-full text-white text-xs xl:text-xl font-bold border border-white hover:bg-white transition-all hover:text-black how-to-use'>HOW TO USE</button>
        </div>
      </div>
      <div className='md:w-1/3 mt-5 absolute top-0 left-0 side-stone'>
        <img src={stone} className='h-full w-full object-cover ' />
      </div>
      <div className='flex xl:flex-row flex-col items-stretch justify-between px-10 text-white relative z-10 md:mt-32 xl:mt-44 mt-10'>
        <div className='bg-blue-300/10 relative xl:pb-36 md:pb-10 pb-2 pl-2 md:px-10 pt-2 md:pt-5 xl:w-1/2 w-full rounded-2xl border border-white backdrop-blur-sm font-bold capitalize xl:text-5xl text-lg mb-10 md:mb-0'>
          ABOUT<br />
          MISCRET
          <div className='absolute right-0 bottom-0 xl:translate-x-1/2 astro-group w-1/3 md:pb-2 xl:-1/2'>
            <img src={astroGroup} className='w-full h-full object-contain' />
          </div>
        </div>
        <div className='xl:w-1/3 w-full text-center xl:text-right md:text-xl xl:text-2xl md:mt-5'>
          <p className='leading-9 md:leading-[50px]'>
            At MISCRET, we believe in harnessing the celestial energies of Astrology and Astronomy to create a token that transcends traditional boundaries.
            Our vision is to blend the timeless wisdom of the cosmos with cutting-edge blockchain technology, paving the way for a revolutionary investment experience.
          </p>
        </div>
      </div>
      <div className=' xl:absolute relative mt-auto mb-5 bottom-0 left-0 w-full z-10 flex flex-col items-center'>
        {/* <div> */}
          <button onClick={() => scrollInto('#section-01')} className='text-white text-2xl xl:text-4xl mt-4 border-white border rounded-full p-2 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all backdrop-blur-sm rotate-180 mb-4'><FaChevronDown /></button>
          <div className='w-1 h-10 md:h-32 bg-white rounded-full ' />
          <button onClick={() => scrollInto('#section-03')} className='text-white text-2xl xl:text-4xl  mt-4 border-white border rounded-full p-2 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all backdrop-blur-sm'><FaChevronDown /></button>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Section02