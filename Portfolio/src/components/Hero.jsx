import React from 'react'
import Image from '../assets/image.jpg'

function Hero() {
  return (
    <section className='flex flex-row md:flex-col text-white items-start justify-center bg-gradient-to-tr from-red-600 to-yellow-500 w-full overflow-hidden px-5 md:px-20 border-b-4 border-stone-300'>
        <div className='flex-1 flex justify-center items-start flex-col lg:flex-row md:items-center'>
          <div className='flex-1 items-start my-3 lg:my-28 px-5 lg:px-20'>
            <h1 className='font-montserrat font-bold text-5xl mb-1 -ml-0.5'>Hi, Im Chase.</h1>
            <p className='font-montserrat font-semibold text-xl text-stone-200 mt-1 mb-2 underline underline-offset-2'>Software Engineer & Web Developer</p>
            <p className=''>I'm a student at The Mahoning County Carrer & Technical Center taking classes in Software Development and Web Development. I'm an Intermediate Python Coder and Web Developer. Beginner in Databases</p>
          </div>
          <img src={Image} className="rounded-3xl my-2 px-md:md:my-3"/>
        </div>
    </section>
  )
}

export default Hero