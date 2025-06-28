import Navbar from './components/Navbar';
import {Anton,  Open_Sans} from 'next/font/google';
import AOSInitializer from "../app/components/animation/AOSInitializer";
import Container from './components/Container';
import violet from './assets/violet.png';
import Image from 'next/image';
import Dashboard from './assets/dashboard.png'
import dash2 from './assets/dash2.png';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import four from './assets/4.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import Footer from './components/Footer';

import feedback from './assets/feedback.png';

const anton = Anton({
  subsets:['latin'],
  weight: '400'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'], 
});

export default function Home() {
  return (
    <>
    <div className="relative overflow-x-hidden">
            <AOSInitializer/>
              {/* HOME */}
                <section className="bg-gradient-to-b from-[#006CC6] to-[#01345e] min-h-[600px] relative pb-[250px] pt-20" id="home">
                    <Navbar/>
                  <Container>
                    <div className="absolute sm:w-90 sm:h-90 w-60 h-60 bg-[#1E99FF] opacity-50 blur-3xl rounded-full left-1/2 top-39 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    <div className="absolute sm:w-90 sm:h-90 w-60 h-60 bg-[#1E99FF] opacity-60 blur-3xl rounded-full left-1/2 top-39 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        
                    <div className="text-center mt-10 sm:mt-15 w-full px-4 sm:px-6 lg:px-24 xl:px-40 mx-auto relative z-10 space-y-5">
                    <h1 className={`${anton.className} text-5xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-white mb-4 leading-tight sfont-extrabold text-shadow-strong`}><span className="block sm:hidden"><span className="block mb-4">Neque porro</span><span className="block mb-4">quisquam est qui</span><span className="block mb-4">dolorem ipsum</span></span><span className="hidden sm:block">Neque Porro Quisquam<br /><span className="block mt-4">Est Qui Dolorem Ipsum</span></span></h1>
                      <p className={`${openSans.className} text-center max-w-3xl mx-auto px-4 font-sans 2xl:text-lg font-extralight text-white text-shadow-strong`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br className='hidden xl:inline md:inline lg:inline'/>Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                      <div className="flex justify-center space-x-8 mt-6">
                        <button className="font-sans rounded-full py-3 px-[1.7rem] bg-[#0164B8] text-white cursor-pointer shadow-2xl hover:bg-white shadow-xl/20 hover:text-[#0164B8] transition duration-300 text-base sm:text-lg lg:text-lg">Get Started</button>
                        <button className="font-sans underline text-shadow-strong text-white cursor-pointer bg-transparent hover:text-blue-500 transition duration-300 text-base sm:text-lg lg:text-lg text-shadow">How it Works?</button>
                      </div>  
                    </div>
                  </Container>
                </section>

                <div className="relative z-0 -mt-[200px] flex justify-center px-6 lg:px-6 xl:px-25 max-w-[1500px] mx-auto">
                  <Image src={violet} alt="violet" className="xl:rounded-[4rem] rounded-[2rem] shadow-2xl w-full max-w-full h-auto cardd"/>
                </div >

                <div id="about"></div>
              {/* ABOUT */}
             <section className="mt-10 lg:mt-20 px-1 sm:px-2 md:px-2 w-full relative pb-4 bg-white">
              <Container>
                <div className="px-6 lg:px-6 xl:px-25 max-w-[1500px] mx-auto">
                  <div className="flex flex-col lg:flex-row gap-x-10">
                    <div data-aos="fade-right" className="lg:w-1/2 space-y-6">
                      <div className="mt-0" id="about">
                        <p className='text-sm text-black'>About</p>
                        <h2 className={`${anton.className} text-[30px] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-[#013A5E] mb-4 leading-tight`}>Lorem Ipsum is simply <span className="hidden xl:inline"><br /></span>dummy text of the printing</h2>
                        <p className="font-sans text-sm sm:text-base lg:text-md text-black 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      </div>

                      <div className="">
                        <div className="cardd mb-4 xl:-mt-3 p-8 bg-gradient-to-r from-[#0034E4] to-[#1E95FF] rounded-2xl h-full w-full">
                          <Image src={Dashboard} alt="Dashboard" className="rounded-2xl w-full shadow-lg max-w-[100%]" />
                        </div>
                      </div>
                    </div>

                    <div data-aos="fade-left" className='lg:w-1/2 space-y-8 mt-1 2xl:mt-7'>
                      <div className="relative rounded-xl overflow-hidden xl:mb-3 mb-5">
                        <div className="relative bg-gradient-to-r from-[#01345E]/90 to-[#006CC6]/90 cardd text-white lg:px-8 p-6 xl:p-7 rounded-2xl shadow-lg flex justify-between items-start py-6">
                          <div className="z-10">
                            <h3 className={`${anton.className} font-bold text-lg sm:text-xl lg:text-2xl mb-3`}>Lorem Ipsum</h3>
                            <p className="text-sm sm:text-base lg:text-md text-white font-sans font-thin 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                          </div>
                          <span className="text-4xl text-white z-10 font-thin"><i className="fa-solid fa-arrow-up rotate-45"></i></span>
                        </div>
                      </div>

                      <div className="relative rounded-xl overflow-hidden xl:mb-3 mb-5">
                        <div className="relative bg-gradient-to-r from-[#01345E]/90 to-[#006CC6]/90 text-white cardd lg:px-8 p-6 xl:p-7 rounded-2xl shadow-lg flex justify-between items-start py-6">
                          <div className="z-10">
                            <h3 className={`${anton.className} font-bold text-lg sm:text-xl lg:text-2xl mb-3`}>Lorem Ipsum</h3>
                            <p className="text-sm sm:text-base lg:text-md text-white font-sans font-thin 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                          </div>
                          <span className="text-4xl text-white z-10 font-thin"><i className="fa-solid fa-arrow-up rotate-45"></i></span>
                        </div>
                      </div>

                      <div className="relative rounded-xl overflow-hidden xl:mb-3 mb-5"> 
                        <div className="relative bg-gradient-to-r from-[#01345E]/90 to-[#006CC6]/90 text-white cardd lg:px-8 p-6 xl:p-7 rounded-2xl shadow-lg flex justify-between items-start py-6">
                          <div className="z-10">
                            <h3 className={`${anton.className} font-bold text-lg sm:text-xl lg:text-2xl mb-3`}>Lorem Ipsum</h3>
                            <p className="text-sm sm:text-base lg:text-md text-white font-sans font-thin 2xl:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                          </div>
                          <span className="text-4xl text-white z-10 font-thin"><i className="fa-solid fa-arrow-up rotate-45"></i></span>
                        </div>
                      </div>                      
                    </div>
                  </div>
                </div>
              </Container>
              </section>

              <div id="features"></div>
              {/*FEATURES*/}
              <section className="mt-5 lg:mt-20 px-1 pt-5 sm:px-2 md:px-2 w-full relative z-20 pb-10 bg-gradient-to-b from-[#012e52] to-[#06508d] overflow-hidden">
                <Container>
                  <div data-aos="fade-up" className='relative z-20'>
                    <div className='flext text-center py-4 px-4'>
                      <p className='text-sm text-white'>Features</p>
                      <h1 className={`${anton.className}  text-white text-[34px] sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold p-1 md:mb-3 leading-normal relative`}>Lorem Ipsum is simply<br className='hidden md:block'/> dummy text of the printing</h1>
                    </div>
                  </div>

                  <div className='px-6 lg:px-6 xl:px-25 max-w-[1500px] mx-auto mt-6 space-y-10 lg:space-y-10'>
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 md:gap-5 xl:gap-20 items-center">
                      {/*FIRST*/}
                      <div className='order-2 md:order-1'>
                        <div className="xl:-mt-40 md:-mt-1 lg:-mt-10 sm:-mt-10 -mt-3">
                          <div className="absolute xl:w-170 xl:h-170 w-130 h-130 bg-[#1d97fe] opacity-40 blur-3xl rounded-full animate-moveBlur -right-15 top-1 overflow-x-hidden z-0"></div>
                          <div className="absolute xl:w-170 xl:h-170 w-130 h-130 bg-[#1d97fe] opacity-60 blur-3xl rounded-full animate-moveBlur -right-15 top-1 overflow-x-hidden z-0"></div>
                          <div data-aos="fade-up">
                          <div className='relative z-20'>
                            <h1 className={`${anton.className} z-10 xl:text-4xl leading-normal text-3xl lg:text-4xl text-white mt-18 sm:mt-24`}>Lorem Ipsum is simply<br className='hidden md:block'/> dummy text of the</h1>
                            <p className='text-white font-normal z-10 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                          </div>
                          <div className='space-y-2 mt-4 space-x-3 relative z-20'>
                            <button className='bg-white px-11 py-3 rounded-full text-[#01345E] font-semibold hover:bg-[#006CC6] z-20 hover:text-white transition duration-300 cursor-pointer'>Buy Now</button>
                            <button className='text-white bg-transparent px-9 py-3 rounded-full border border-white font-semibold z-20 hover:bg-[#006CC6] hover:text-white transition duration-300 cursor-pointer'>Contact Us</button>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className='order-1 md:order-2 relative z-20'>
                        <div className="relative w-full aspect-[4/2] md:aspect-auto]" data-aos="fade-up">
                          <Image src={dash2} alt="Dashboard UI 1" className="absolute right-0 top-0 rounded-2xl shadow-lg z-0 object-cover bg-blue-500 p-4 w-2/3 sm:w-2/3 cardd"/>
                          <Image src={dash2} alt="Dashboard UI 2" className="absolute top-15 md:left-[10px] left-[10px] w-2/3 rounded-2xl shadow-lg z-10 object-cover sm:w-2/3 bg-blue-500 p-4 cardd"/>
                        </div>
                      </div>
                    </div>

                    <div className="absolute w-120 h-120 bg-[#1d97fe] opacity-40 blur-3xl rounded-full animate-moveBlur -left-10 xl:top-200 top-260 overflow-x-hidden z-0"></div>
                    <div className="absolute w-120 h-120  bg-[#1d97fe] opacity-60 blur-3xl rounded-full animate-moveBlur -left-10 xl:top-200 top-260 overflow-x-hidden z-0"></div>
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr] gap-10 md:gap-10 xl:gap-20 items-center overflow-hidden" data-aos="fade-up">
                      {/*SECOND*/}
                      <div className='order-2 md:order-1 relative z-20 xl:mt-20 md:mt-10'>
                        <div className='grid grid-cols-2 gap-4 z-10'>
                          <Image src={one} alt="Image 1" className="w-full h-53 object-cover rounded-2xl shadow-strong cardd"/>
                          <Image src={three} alt="Image 2" className="w-full h-53 object-cover rounded-2xl shadow-strong mt-12 cardd" />
                          <Image src={two} alt="Image 3" className="w-full h-53 object-cover rounded-2xl shadow-strong -mt-12 cardd" />
                          <Image src={four} alt="Image 4" className="w-full h-53 object-cover rounded-2xl shadow-strong mt-0.5 cardd" />
                        </div>
                      </div>
                      <div className='order-2 md:order-1 relative z-20'>
                        <div className="xl:-mt-10 md:-mt-1 sm:-mt-5 -mt-9">
                          <h1 className={`${anton.className} xl:text-4xl leading-normal text-3xl lg:text-4xl text-white mt-5 sm:mt-0`}>Lorem Ipsum is simply<br className='hidden md:block'/> dummy text of the</h1>
                          <p className='text-white font-normal mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                          <div className='space-y-2 mt-4 space-x-3'>
                            <button className='bg-white px-11 py-3 rounded-full text-[#01345E] font-semibold hover:bg-[#006CC6] hover:text-white transition duration-300 cursor-pointer'>Buy Now</button>
                            <button className='text-white bg-transparent px-9 py-3 rounded-full border border-white font-semibold hover:bg-[#006CC6] hover:text-white transition duration-300 cursor-pointer'>Contact Us</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4  xl:gap-55 md:gap-13 2xl:gap-20 items-center xl:mt-29 md:mt-20 lg:mt-19 overflow-hidden" data-aos="fade-up">
                      {/*THIRD*/}
                      <div className='order-2 md:order-1 relative z-20'>
                        <div className="xl:-mt-10 sm:mt-2 mt-2 md:mt-5">
                          <h1 className={`${anton.className} xl:text-4xl leading-normal text-3xl lg:text-4xl text-white`}>Lorem Ipsum is simply<br className='hidden md:block'/> dummy text of the</h1>
                          <p className='text-white font-normal mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                          <div className='space-y-2 mt-4 space-x-3'>
                            <button className='bg-white px-11 py-3 rounded-full text-[#01345E] font-semibold hover:bg-[#006CC6] hover:text-white transition duration-300 cursor-pointer'>Buy Now</button>
                            <button className='text-white bg-transparent px-9 py-3 rounded-full border border-white font-semibold hover:bg-[#006CC6] hover:text-white transition duration-300 cursor-pointer'>Contact Us</button>
                          </div>
                        </div>
                      </div>
                      <div className='order-1 md:order-2'>
                        <div className="relative w-auto aspect-[3/2] md:aspect-auto]">
                          <Image src={dash2} alt='Image 1' className='cardd w-[full] object-cover border p-[19px] bg-[#6e92cc] shadow-xl/20 rounded-2xl 2xl:ml-8'/>
                          <Image src={feedback} alt='Image 2' className='cardd absolute shadow-xl/20 -bottom-3 md:-left-7 xl:-left-15 lg:-left-4 md:w-[320px] md:h-[140px] sm:w-[350px] sm:h-[170px] lg:w-[350px] lg:h-[170px] shadow-lg p-[10px] w-[250px] h-[130px] rounded-xl'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>

              <div id="pricing"></div>
              <section className="xl:mt-15 w-full relative lg:pb-4 bg-white mt-5 overflow-hidden">
                <div className='grid md:grid-cols-2 grid-cols-1 px-6 xl:gap-15 lg:px-6 xl:px-25 max-w-[1500px] mx-auto mt-2 items-center md:mt-9 lg:mt-9' data-aos="fade-up">
                  <div className='items-center justify-center text-center md:items-start md:justify-start md:text-left'>
                    <p className='text-sm xl:ml-3 mb-2 text-black'>Pricing</p>
                    <h1 className={`${anton.className} text-[#01345E] text-3xl sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl mb-4 xl:ml-3 leading-tight font-extrabold`}>Neque porro <br className='hidden md:block'/>quisquam est qui</h1>
                  </div>
                  <div className='items-center justify-center text-center md:items-start md:justify-start md:text-left'>
                    <p className='2xl:text-lg text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                  </div>
                </div>

                  <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 px-6 lg:px-25 max-w-[1300px] mx-auto mt-5 xl:mt-9 w-full' data-aos="fade-up">
                    <div className="bg-gradient-to-b from-[#006CC6] to-[#01345E] rounded-2xl p-6 shadow-lg relative z-10 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer" >
                      <h1 className={`${anton.className} text-gray-100 text-2xl`}>Free</h1>
                      <p className="text-gray-100 2xl:text-lg">Lorem Ipsum is simply dummy</p>
                        <div className="py-6 space-y-2">
                          <h1 className={`${openSans.className} text-4xl font-bold text-gray-100`}>$0.00</h1>
                          <div className="bg-white h-0.5"></div>
                        </div>
                        <div className="text-gray-100 mt-2 ">
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                        </div>
                      <div className="justify-center flex mt-7">
                        <button className="rounded-full py-3 px-6 bg-white w-full text-[#01345E] font-semibold cursor-pointer hover:bg-[#006CC6] hover:text-white transition duration-300">Buy Now</button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#006CC6] to-[#01345E] rounded-2xl p-6 shadow-lg relative z-10 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                      <h1 className={`${anton.className} text-gray-100 text-2xl`}>Basic</h1>
                      <p className="text-gray-100 2xl:text-lg">Lorem Ipsum is simply dummy</p>
                        <div className="py-6 space-y-2">
                          <h1 className={`${openSans.className} text-4xl font-bold text-gray-100`}>$10.00<span className="text-base font-sans font-normal">/month</span></h1>
                          <div className="bg-white h-0.5"></div>
                        </div>
                        <div className="text-gray-100 mt-2">
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                          <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                        </div>
                      <div className="justify-center flex mt-7">
                        <button className="rounded-full py-3 px-6 bg-white w-full text-[#01345E] font-semibold cursor-pointer hover:bg-[#006CC6] hover:text-white transition duration-300">Buy Now</button>
                      </div>
                    </div>

                  <div className="bg-gradient-to-b from-[#006CC6] to-[#01345E] rounded-2xl p-6 shadow-lg relative z-10 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                    <h1 className={`${anton.className} text-gray-100 text-2xl`}>Enterprise</h1>
                    <p className="text-gray-100 2xl:text-lg">Lorem Ipsum is simply dummy</p>
                      <div className="py-6 space-y-2">
                        <h1 className={`${openSans.className} text-4xl font-bold text-gray-100`}>$10.00<span className="text-base font-sans font-normal">/month</span></h1>
                        <div className="bg-white h-0.5"></div>
                      </div>
                      <div className="text-gray-100 mt-2">
                        <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                        <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                        <p><span className='text-2xl mr-3'>✔</span>Lorem Ipsum is simply dummy</p>
                        <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                        <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                        <p><span className='text-2xl mr-4'>X</span>Lorem Ipsum is simply dummy</p>
                      </div>
                      <div className="justify-center flex mt-7 mb-2">
                        <button className="rounded-full py-3 px-6 bg-white w-full text-[#01345E] font-semibold cursor-pointer hover:bg-[#006CC6] hover:text-white transition duration-300">Buy Now</button>
                      </div>
                  </div>
                </div>
              </section>

              {/*CONTACT*/}
              <section className="relative overflow-hidden bg-gradient-to-b from-[#014A87] to-[#01345E] mt-15 xl:py-23 py-10 p-2" id="contacts">
                <div className='px-6 lg:px-6 xl:px-25 max-w-[1500px] mx-auto overflow-hidden'>
                  <div className="absolute w-[799px] h-[799px] bg-[#1E99FF] opacity-50 blur-3xl rounded-full left-1/2 xl:top-[300px] md:top-[300px] top-[530px] transform -translate-x-1/2 -translate-y-1/2 overflow-x-hidden z-0"></div>
                  <div className="absolute w-[499px] h-[499px] bg-[#1E99FF] opacity-50 blur-3xl rounded-full left-1/2 xl:top-[300px] md:top-[300px] top-[530px] transform -translate-x-1/2 -translate-y-1/2 overflow-x-hidden z-0"></div>
                  <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-15 gap-4 max-w-[1500px] mx-auto'>
                    <div data-aos="fade-right">
                      <div className="py-5 space-y-2 ">
                        <p className='text-sm text-white'>Contact Us</p>
                        <h2 className={`${anton.className} text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold text-white mb-4 leading-tight`}>Connect With Our Team</h2>
                        <p className="text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-lg max-w-xl text-white z-10 relative font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      </div>

                      <div className="space-y-4 mt-3 z-10 relative">
                        <div className="flex flex-col ml-5">
                          <div className="flex items-center gap-7">
                            <Phone className="text-white w-12 h-12 -mt-3" />
                            <div className="flex-col space-y-0 font-thin">
                              <h2 className={`${anton.className} text-white text-xl leading-tight mb-2`}>Phone</h2>
                              <p className="text-white -mt-2">+639434343434</p>
                              <p className="text-white">+639434343434</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mt-3 z-10 relative flex">
                        <div className="flex flex-col ml-5">
                          <div className="flex items-center gap-7">
                            <Mail className="text-white w-12 h-12 -mt-3" />
                            <div className="flex-col space-y-0 font-thin break-words max-w-full">
                              <h2 className={`${anton.className} text-white text-xl leading-tight mb-2`}>Email</h2>
                              <p className="text-white -mt-2">solverous@gmail.com</p>
                              <p className="text-white break-all">marketingsolverous@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>

                        <div className="bg-white h-0.5 mt-8 max-w-lg"></div>
                        <div className="mt-3">
                          <h1 className={`${anton.className} text-white`}>Follow our social media</h1>
                          <div className="flex gap-2 text-4xl mt-3 ml-2 text-white">
                            <FaFacebook className='hover:text-[#006CC6] tranisition duration-300 cursor-pointer'/>
                            <FaInstagram className='hover:text-[#006CC6] tranisition duration-300 cursor-pointer'/>
                            <FaTiktok className='hover:text-[#006CC6] tranisition duration-300 cursor-pointer'/>
                            <FaLinkedin className='hover:text-[#006CC6] tranisition duration-300 cursor-pointer'/>
                          </div>
                        </div>
                    </div>

                    <div className='mt-4' data-aos="fade-left">
                      <form className="space-y-4 p-4 px-5 bg-white rounded-xl">
                        <h1 className={`${anton.className} text-3xl font-bold bg-gradient-to-b from-[#006CC6] to-[#01345E] bg-clip-text text-transparent`}>Send Us a Message</h1>
                        <div className="flex md:flex-col-2 flex-cols-1 sm:flex-row sm:space-x-4 space-x-4">
                          <div className="flex-1">
                            <label className="block font-semibold mb-1 text-[#01345E]">Name</label>
                            <input type="email" className="text-black w-full px-4 py-2 rounded-md focus:outline-none border-2 border-[#01345E] placeholder-gray-400" placeholder="Name"/>
                          </div>
                          <div className="flex-1">
                            <label className="block font-semibold mb-1 text-[#01345E]">Phone</label>
                            <input type="tel" className="text-black w-full px-4 py-2 rounded-md focus:outline-none border-2 border-[#01345E] placeholder-gray-400" placeholder="Phone"/>
                          </div>
                        </div>
                        <div className="flex md:flex-col-2 flex-cols-1 sm:flex-row sm:space-x-4 space-x-4">
                          <div className="flex-1">
                            <label className="block font-semibold mb-1 text-[#01345E]">Email</label>
                            <input type="email" className="text-black w-full px-4 py-2 not-first:rounded-md focus:outline-none border-2 border-[#01345E] placeholder-gray-400" placeholder="Email"/>
                          </div>
                          <div className="flex-1">
                            <label className="block font-semibold mb-1 text-[#01345E]">Subject</label>
                            <input type="tel" className="text-black w-full px-4 py-2 rounded-md focus:outline-none border-2 border-[#01345E] placeholder-gray-400" placeholder="Subject"/>
                          </div>
                        </div>
                        <div>
                          <label className="block font-semibold mb-1 text-[#01345E]">Message</label>
                          <textarea className="w-full text-black px-4 py-2 rounded-md focus:outline-none border-2 border-[#01345E] placeholder-gray-400" rows={5}placeholder="Your Message"></textarea>
                        </div>

                        <div className="flex w-full justify-center">
                          <button className="py-3 bg-gradient-to-b from-[#006CC6] to-[#01345E] w-full text-white rounded-full text-center hover:bg-gradient-to-b hover:from-[#01345E] hover:to-[#006CC6] hover:text-white cursor-pointer transition duration-300">Send Message</button>
                        </div>
                        </form>
                    </div>
                  </div>
                </div>
              </section>

              <Footer/>
            </div>
              
    </>
  );
}
