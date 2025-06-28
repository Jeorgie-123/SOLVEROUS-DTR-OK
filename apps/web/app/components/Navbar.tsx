"use client";
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Image from "next/image";
import {Variants} from "framer-motion";
import {motion} from 'framer-motion';
import {Anton} from 'next/font/google';
import logo from '../assets/logoo.png';

const anton = Anton({
  subsets:['latin'],
  weight: '400'
})

const navLinks = [
  {title: "Home", path: "#home"},
  {title: "About", path: "#about"},
  {title: "Features", path: "#features"},
  {title: "Pricing", path: "#pricing"},
  {title: "Contacts", path: "#contacts"},
]

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav)//If nav is false, !nav is true | If nav is true, !nav is false
  const closeNav = () => setNav(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll); //Every time the user scrolls, run handleScroll
    return () => {
      window.removeEventListener('scroll', handleScroll); //This is the cleanup function. It removes the scroll event listener when the component is removed
    }
  }, []);

  const menuVariants: Variants = {
    open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
    close: {
      y: '-100%',
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
    },
  }
}

 

  return (
      <div className={`fixed top-0 left-0 right-0 z-[100] transition duration-300 ${ scrolled ? 'bg-gradient-to-b from-[#006CC6]/85 to-[#01345E]/85 shadow-md pb-1' : 'bg-transparent'}`}> 
        <div className='max-w-[1700px] mx-auto py-4 flex items-center xl:px-20 2xl:px-30 px-6 w-screen'>
          <div className='flex-shrink-0 w-[100px]'>
            <Link href='/'>
              <div className='block xl:mt-2 sm:-mt-2 -mt-2 -left-2'>
                <Image src={logo} alt='logo' className="md:h-[45px] w-auto h-[35px]" />
              </div>
            </Link>
          </div>

          <ul className='mt-2 hidden md:flex flex-grow justify-center space-x-8 text-white xl:text-lg font-sans xl:ml-26 2xl:ml-26 lg:ml-20 z-10 text-sm'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <p className='hover:text-[#1E99FF] transition duration-600'>{link.title}</p>
                </Link>
              </li>
             ))}
          </ul>

          <div className='hidden md:flex space-x-3'>
            <Link href={"/"} className='font-sans bg-[#006cc6] text-white border border-white rounded-full py-3 px-7 shadow-md cursor-pointer hover:bg-white hover:text-blue-500 transition duration-300'>Sign Up</Link>
            <Link href={"/"} className='font-sans bg-[#006cc6] rounded-full text-white py-3 px-8 shadow-xl hover:bg-white hover:text-blue-500 cursor-pointer transition duration-300'>Log In</Link>
          </div>
        </div>

        {/*Mobile*/}
        <div onClick={toggleNav} className='md:hidden absolute top-3 right-4 text-white z-2 cursor-pointer'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>} {/*If nav is true, it renders: <AiOutlineClose size={30} /> (a close icon). If nav is false, it renders: <AiOutlineMenu size={30} /> (a hamburger menu icon).*/}
        </div>

          <motion.div
            initial={false}
            animate={nav ? 'open' : 'close'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full z-[200] bg-gradient-to-b from-[#026CC4] to-[#01345E] h-screen flex flex-col opacity-100'>

            {/*Mobile*/}
        <div onClick={toggleNav} className='md:hidden absolute top-3 right-4 text-white cursor-pointer'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>} {/*If nav is true, it renders: <AiOutlineClose size={30} /> (a close icon). If nav is false, it renders: <AiOutlineMenu size={30} /> (a hamburger menu icon).*/}
        </div>

            <ul className={`${anton.className} text-xl text-amber-50 my-24 px-7 space-y-3`}>
              <div className='z-20 absolute top-3 left-4'>  <Image src={logo} alt='logo' className="md:h-[55px] w-auto h-[35px]"/></div>
              {navLinks.map((link, index) => (
                <li key={index} className=''>
                  <Link href={link.path} onClick={closeNav}>
                    {link.title}
                    <div className='bg-white h-0.5 mt-3'></div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='flex item-center text-center justify-center flex-col space-y-3 mt-auto px-7 mb-10'>
                <Link href={"/"} className={`${anton.className} bg-[#006cc6] px-5 py-3 rounded-full shadow-xl text-white cursor-pointer hover:bg-white hover:text-blue-500 transition duration-300 w-full`}>Log In</Link>
                <Link href={"/"} className={`${anton.className} bg-[#006cc6] border border-white rounded-full shadow-xl text-white px-5 py-3 cursor-pointer hover:bg-white hover:text-blue-500 transition duration-300 w-full`}>Sign Up</Link>
            </div>
          </motion.div>
      </div>

  )
}

export default Navbar

