import React, { useEffect } from 'react'
import TopNav from './TopNav'
import moonBlue from '../../assets/Home/moon-blue.png'
import moonPink from '../../assets/Home/moon-pink.png'
import moonYellow from '../../assets/Home/moon-yellow.png'
import mainBg from '../../assets/Home/home-bg.png'
import astro from '../../assets/Home/astro.png'
import { FaChevronDown } from "react-icons/fa";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { scrollInto } from '../../utils/functions'
import { useGSAP } from "@gsap/react";

const Section01 = () => {

  useGSAP(() => {
    //gsap.fromTo('.blue-moon',{scale:2,bottom:'50%',rotate:45,left:'50%'},{scale:1, duration:2,bottom:'0',translateY:'50',rotate:0,left:'50%',yoyo:true,delay:1})
    //gsap.to('.blue-moon',{delay:1,duration:2,scale:1, rotate:0,yoyo:true,ease: "back.inOut(1.7)",})
   gsap.fromTo('.yellow-moon',{x:'0%',y:'-50%'}, { delay: 1, duration: 3, x: '-50%',y:'-50%',rotate:45, yoyo: true, ease: "back.inOut(1.7)" })
    gsap.fromTo('.header-text', { y: '100vh' }, { y: 0, delay: 1.5, duration: 1.8, ease: "back.inOut(2.0)" })
    gsap.fromTo('.pink-moon', { translateY: '50%', translateX: 0 }, { duration: 3, delay: 1, translateX: '50%', translateY: 0, yoyo: true, ease: "back.inOut(1.7)" })
    gsap.fromTo('.astro-boy', { opacity: 0, y: 150, x: -100 }, { opacity: 1, y: 0, x: -50, duration: 3, delay: 1, ease: "back.inOut(2.0)" })
    gsap.fromTo('.header-desc', { opacity: 0, y: '100vh' }, { opacity: 1, y: 0, duration: 3, delay: 1, ease: "back.inOut(2.0)" })


    gsap.set('.blue-moon', { scale: 2, rotate: 45 });
    gsap.to('.blue-moon', {
      scale: 1,
      rotate: 0,
      duration: 2,
      yoyo: true,
      ease: 'back.inOut(1.7)',
      delay: 1,
    });
    gsap.to('.blue-moon',{
      rotate:400,
      repeat:-1,
      duration:20,
      ease:'none'
    })

    //Wheel To the right animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: ".section-2",
        start: "top 90%",
        end: "top 30%",
        markers: false
      },
    });
    tl2.to(".pink-moon ", {
      position: 'fixed',
      zIndex: 10,
      rotate: 45,
      right: 0,
      top: '-50%'
    });


    const tl3 = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: ".section-2",
        start: "top 95%",
        end: "top top",
        markers: false
      },
    });
    tl3.to('.blue-moon',{
      scale: 0.7,
      duration: 10,
      yoyo: true,
      ease: 'back.inOut(4)',
    })
    tl3.to('.yellow-moon', { 
      duration: 1, 
      x: 200, 
      yoyo: true, 
      scrub:1,
    })


  }, [])

  return (
    <section className='bg-black min-h-screen relative overflow-hidden text-center panel' style={{ backgroundImage: `url(${mainBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} id='section-01'>
      <TopNav />
      <div className=' md:w-1/2 absolute top-0 left-0 translate-x-1/2 -translate-y-1/2 yellow-moon'>
        <img src={moonYellow} className='w-full h-full object-contain' />
      </div>
      <div className='md:w-1/2 absolute top-0 right-0  pink-moon -z-[0]'>
        <img src={moonPink} className='w-full h-full object-contain' />
      </div>
      <div className=' xl:w-2/3 w-full scale-125 md:scale-100 left-1/2 rounded-full overflow-hidden -translate-x-1/2 absolute top-1/2 xl:top-auto -translate-y-1/2  md:translate-y-1/2 xl:translate-y-0 bottom-0 md:bottom-auto blue-moon z-10'>
        <img src={moonBlue} className='w-full h-full object-cover' />
      </div>
      <h1 className='mt-32 xl:mt-28 text-2xl md:text-7xl xl:text-9xl text-white font-stalinist text-center header-text'>MISCRET</h1>
      {/* 
      <div className='xl:w-2/3 w-full left-1/2 scale-[200%] -translate-x-1/2 absolute bottom-0 md:bottom-auto rotate-45 blue-moon'>
        <img src={moonBlue} className='w-full h-full object-cover' />
      </div> */}
      <div className='md:w-1/3 w-2/3 absolute bottom-0 left-0 astro-boy'>
        <img src={astro} className='w-full h-full object-cover' />
      </div>
      <div className='mt-5 xl:mt-32 relative z-20 header-desc'>
        <div className='text-white flex items-center justify-between font-brick tracking-widest xl:tracking-[10px] text-xl md:text-2xl xl:text-5xl'>
          <div className='h-1 bg-white w-1/6' />
          <p>Embark on a cosmic journey with<br />
            MISCRET</p>
          <div className='h-1 bg-white w-1/6' />
        </div>
        <button className='bg-transparent backdrop-blur-sm px-8 md:px-10 py-2 md:py-3 mt-5 xl:mt-10 rounded-full text-white text-sm xl:text-2xl font-bold border border-white hover:bg-white transition-all hover:text-black'>LAUNCH</button>
      </div>

      {/* BLACK GRADIENT BELOW */}
      <div className='bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full h-52 z-10 flex flex-col items-center justify-center'>
     
          <div className='w-1 h-32 bg-white rounded-full' />
          <button onClick={() => scrollInto('#section-02')} className='text-white text-2xl xl:text-4xl mt-4 border-white border rounded-full p-2 flex items-center justify-center mx-auto hover:bg-white hover:text-black transition-all backdrop-blur-sm'><FaChevronDown /></button>
     
      </div>
    </section>
  )
}

export default Section01