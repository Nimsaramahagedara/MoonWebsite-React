import React from 'react'
import astro2 from '../../assets/Home/astro-2.png'
import stone2 from '../../assets/Home/stone-2.png'
import money from '../../assets/Home/money.png'
import chart from '../../assets/Home/pie-chart.png'
import tax from '../../assets/Home/tax.png'
import { FaChevronDown } from "react-icons/fa";
import { scrollInto } from '../../utils/functions'
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Section03 = () => {

  useGSAP(() => {
    // const animation = gsap.from('.astro-2',{y:200,x:-200, duration:2, opacity:0,delay:1})
    // const animation2 = gsap.from('.stone-2',{y:200,x:200, duration:2, opacity:0,delay:1})

    // ScrollTrigger.create({
    //   trigger: '.section-03', 
    //   start: 'top 80%',
    //   onEnter: () => {
    //     animation.play(); 
    //     animation2.play()
    //   },
    //   onLeaveBack: () => {
    //     animation.reverse();
    //     animation2.reverse();
    //   },
    // });
    const animation = gsap.from('.astro-2', {
      y: 200,
      x: -200,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-03',
        start: 'top 80%',
        onEnter: () => {
          animation.play();
        },
        onLeaveBack: () => {
          animation.reverse();
        },
      },
    });

    const animation2 = gsap.from('.stone-2', {
      y: 200,
      x: 200,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-03',
        start: 'top 80%',
        onEnter: () => {
          animation2.play();
        },
        onLeaveBack: () => {
          animation2.reverse();
        },
      },
    });

    gsap.to('.stone-2', {
      scale: 1.05,
      repeat: -1,
      duration: 3,
      yoyo: true
    })
    gsap.to('.astro-2', {
      scale: 1.1,
      rotate: 3,
      repeat: -1,
      duration: 3,
      yoyo: true
    })


  })
  return (
    <section className='bg-black xl:pt-20 pt-10 px-5 xl:px-10 relative section-03 overflow-hidden panel' id='section-03'>
      <div className='flex xl:flex-row items-stretch flex-col justify-center gap-5 z-10 relative'>
        <div className='text-white text-xl xl:text-4xl border text-center border-white rounded-xl p-4 xl:p-8 bg-white/5 backdrop-blur-sm w-full'>
          MISCRET invites you to<br />be a part of a cosmic<br /> revolution
        </div>
        <div className='text-green-500 font-bold text-3xl  md:text-5xl xl:text-6xl border min-h-20 border-white rounded-xl flex items-center justify-center px-8 bg-white/5 backdrop-blur-sm w-full'>
          Discrenomics
        </div>
      </div>
      <div className='grid xl:grid-cols-3 grid-cols-2 gap-5 mt-5 uppercase z-10 relative'>
        <div className='text-white text-2xl xl:text-4xl border border-white rounded-xl p-1 xl:p-8 flex flex-col items-center justify-center text-center min-h-20 backdrop-blur-sm'>
          <img src={tax} className='w-12' />
          <span className='text-lg xl:text-2xl font-bold'>0 %</span>
          <p className='text-green-500 text-sm xl:text-lg'>TAX<br /> BUY/SELL</p>
        </div>
        <div className='text-white text-2xl xl:text-4xl border border-white rounded-xl p-1 xl:p-8 flex flex-col items-center justify-center text-center min-h-20 backdrop-blur-sm'>
          <img src={chart} className='w-12' />
          <span className='text-lg xl:text-2xl font-bold'>10 BILLION</span>
          <p className='text-green-500 text-sm xl:text-lg'>SUPPLY</p>
        </div>
        <div className='text-white text-2xl xl:text-4xl border border-white rounded-xl p-1 xl:p-8 flex flex-col items-center justify-center text-center w-full col-span-2 xl:col-span-1 min-h-32 backdrop-blur-sm'>
          <img src={money} className='w-12' />
          <span className='text-lg xl:text-2xl font-bold'>PRICE</span>
          <p className='text-green-500 text-sm xl:text-lg'>Our prices are fixed for<br />some standard services</p>
        </div>
      </div>
      <div className='flex items-end justify-between text-white uppercase gap-5 xl:-mt-40 -mt-10 z-10 relative'>
        <img src={astro2} className=' h-full object-cover xl:w-1/4 md:w-1/2 w-2/3 -translate-x-1/3 xl:-translate-x-1/4 astro-2' />
        <div className='w-max text-nowrap py-10 xl:relative absolute bottom-0 left-0'>
          <p>© 2024 miscret LLC.</p>
        </div>
        <div className='flex xl:flex-row flex-col items-center justify-between py-10 xl:px-20 xl:w-1/2 w-1/4'>
          <p className='text-white hover:text-gray-300 cursor-pointer'>DeXTOOL</p>
          <p className='text-white hover:text-gray-300 cursor-pointer'>eTHERSCAN</p>
          <p className='text-white hover:text-gray-300 cursor-pointer'>X</p>
          <p className='text-white hover:text-gray-300 cursor-pointer'>Telegram</p>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center flex-col'>
        <button onClick={() => scrollInto('#section-01')} className='text-white text-2xl xl:text-4xl mt-4 border-white border rounded-full p-2 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all backdrop-blur-sm rotate-180 mb-4'><FaChevronDown /></button>
        <div className='w-1 h-32 bg-white rounded-full' />
      </div>
      <img src={stone2} className='xl:w-1/2 absolute bottom-0 right-0 z-0 stone-2' />
      {/* <div className='bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full z-10 flex items-center justify-center'>

      </div> */}
    </section>
  )
}

export default Section03