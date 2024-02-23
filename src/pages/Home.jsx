import React from 'react'
import Section01 from '../components/Home/Section01'
import Section02 from '../components/Home/Section02'
import Section03 from '../components/Home/Section03'
import Section04 from '../components/Home/Section04'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from "@gsap/react";

const Home = () => {

    // useGSAP(()=>{
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.registerPlugin(ScrollToPlugin);
    
    //     let sections = gsap.utils.toArray(".panel");
    
    //     const goToSection = (i)=> {
    //         gsap.to(window, {
    //             scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
    //             duration: 2
    //         });
    //     }
    
    //     ScrollTrigger.defaults({
    //          markers: true
    //     });
    
    //     sections.forEach((eachPanel, i) => {
    //         // const mainAnim = gsap.timeline({ paused: true });
    
    //         ScrollTrigger.create({
    //             trigger: eachPanel,
    //             onEnter: () => goToSection(i)
    //         });
    
    //         ScrollTrigger.create({
    //             trigger: eachPanel,
    //             start: "center top",
    //             onEnterBack: () => goToSection(i)
    //         });
    //     });

    // })

    return (
        <main>
            <Section01 />
            <Section02 />
            <Section03 />
            {/* <Section04/> */}
        </main>
    )
}

export default Home