import React from 'react'
import Image from '../assets/image.jpg'

function Hero() {
  return (
    <section className='bg-gradient-to-tr from-red-600 to-yellow-500 text-white py-32 border-b-4'>
        <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
          <div className='pb-5 md:pb-0 px-5 md:px-5'>
            <h1 className='font-montserrat font-bold text-4xl lg:text-6xl'>Hi, Im Chase.</h1>
            <p className='font-montserrat font-semibold text-xl text-stone-200 mt-1 mb-2 underline underline-offset-2'>Software Engineer & Web Developer</p>
            <p className='py-2'>I'm a student at The Mahoning County Carrer & Technical Center taking classes in Software Development and Web Development. I'm an Intermediate Python Coder and Web Developer. Beginner in Databases</p>
          </div>
          <img src={Image} className="rounded-3xl p-3 md:p-5"/>
        </div>
    </section>
  )
}

export default Hero