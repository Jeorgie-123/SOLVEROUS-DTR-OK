"use client"

import { useEffect } from "react"
import AOS from 'aos';
import "aos/dist/aos.css";

export default function AOSInitializer(){
    useEffect(() => {
      AOS.init({
        once: false,
        duration: 500,
        easing: "ease",
        mirror: true,
      });
    }, [])

    return null;
}