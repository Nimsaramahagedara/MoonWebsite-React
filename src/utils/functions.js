import { gsap } from 'gsap'
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)

export const scrollInto = (target) => {
    gsap.to(window, { duration: 2,scrollTo: { y: target, offsetY: 0 },ease: "power4.inOut", });
};
