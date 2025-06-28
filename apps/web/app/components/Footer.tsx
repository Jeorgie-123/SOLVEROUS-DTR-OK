"use client"
import Link from "next/link";
import Image from "next/image";
import logo from './../assets/logo.png'
import React from 'react'
import {Anton} from 'next/font/google';
import { FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa';
import gmail from './../assets/gmail.png'
import { SiGmail } from 'react-icons/si';
const anton = Anton({
  subsets:['latin'],
  weight: '400'
})


const Footer = () => {
  return (
      <footer className="text-black bg-white lg:px-25 max-w-[1500px] mx-auto mt-7 px-6 overflow-hidden">
            <div className="py-5 max-w-7xl mx-auto bg-white">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-12">
                
                <div className="md:col-span-5 -mt-10">
                  <Link href="/">
                    <Image src={logo} height={150} width={150} alt="logo" className="-ml-5" />
                  </Link>
                  <p className="text-black -mt-7 2xl:text-md xl:text-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  </p>
                </div>

                <div className="md:col-span-7 w-full">
                  <div className="flex flex-col md:grid md:grid-cols-7 gap-6">
                    <div className="flex flex-row justify-between w-full gap-6 md:col-span-7">
                      <div className="flex-1">
                        <h2 className={`${anton.className} font-bold mb-1 text-[#01345E] text-xl`}>Navigation</h2>
                        <ul className="space-y-1 2xl:text-md xl:text-md text-black">
                          <li><Link href="#home"><p className="hover:text-blue-900 transition duration-300 cursor-pointer">Home</p></Link></li>
                          <li><Link href="#about"><p className="hover:text-blue-900 transition duration-300 cursor-pointer">About</p></Link></li>
                          <li><Link href="#features"> <p className="hover:text-blue-900 transition duration-300 cursor-pointer">Features</p></Link></li>
                          <li><Link href="#pricing"><p className="hover:text-blue-900 transition duration-300 cursor-pointer">Pricing</p></Link></li>
                          <li><Link href="#contacts"><p className="hover:text-blue-900 transition duration-300 cursor-pointer">Contacts</p></Link></li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <h2 className={`${anton.className} font-bold mb-1 text-[#01345E] text-xl`}>Other Services</h2>
                        <ul className="space-y-1 2xl:text-md xl:text-md text-black">
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                          <li>Lorem Ipsum</li>
                        </ul>
                      </div>

                      <div className="flex-1">
                        <h1 className={`${anton.className} font-bold mb-1 text-[#01345E] text-xl`}>Contact Info</h1>
                        <ul className="space-y-1 2xl:text-md xl:text-md text-black">
                          <li>Facebook</li>
                          <li>Gmail</li>
                          <li>Linkedin</li>
                          <li>Whatsapp</li>
                          <li>Github</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0.5 bg-[#01345E] mt-13 mb-20"></div>

              <div className="flex flex-row justify-between -mt-18">
                <p className="text-[15px] 2xl:text-lg lg:text-lg text-black mr-2">Copyright 2025. Solverous Technology Opc. All Rights Reserved</p>
                <div className="flex text-2xl gap-2">
                    <Link href="/"><FaFacebook className="text-blue-600 cursor-pointer" /></Link>
                    <Link href="/">
                      <div className="cursor-pointer mt-0.5 flex-shrink-0">
                        <Image src={gmail} alt="Gmail logo" className="h-[18px] w-auto min-w-[18px]" />
                      </div>
                    </Link>
                    <Link href="/"><FaWhatsapp className="text-green-500 cursor-pointer" /></Link>
                    <Link href="/"><FaGithub className="text-gray-800 cursor-pointer" /></Link>
                </div>
              </div>
            </div>
      </footer>
  )
}

export default Footer