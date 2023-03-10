import React from 'react'

function Hero() {
  return (
    <section className='flex flex-row md:flex-col text-white items-start justify-center bg-gradient-to-tr from-red-600 to-yellow-500 w-full overflow-hidden px-5 sm:px-20'>
        <div className='flex-1 flex justify-center items-start flex-col'>
          <div className='flex-1 items-start mt-48'>
            <h1 className='font-montserrat font-semibold text-5xl mb-1'>Name</h1>
            <p className='font-montserrat font-normal text-xl text-stone-200'>Software Engineer & Web Developer</p>
          </div>
        </div>
    </section>
  )
}

export default Hero