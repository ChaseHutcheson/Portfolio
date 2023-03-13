import React from 'react'

function ProjectItems({ title, img, subtitle, stack}) {
  return (
    <div className='w-full h-full bg-gradient-to-tr from-red-600 to-yellow-500 p-1 rounded-md overflow-hidden'>
      <div className='h-full w-full bg-white p-1 rounded-sm'>
        <h1 className='text-lg text-center underline underline-offset-2'>{title}</h1>
        <img src={img} alt="project-image" className='w-full h-36 md:h-48 object-cover'/>
        <h3 className='text-center font-montserrat py-1'>{subtitle}</h3>
        <div className='bg-gradient-to-tr from-red-600 to-yellow-500 p-1 rounded-lg font-montserrat'>
          <p className='flex flex-wrap item-center justify-between text-sm bg-white rounded-md'>
            {stack.map((item) => (
                <span className='m-1'>
                    {item}
                </span>
            ))}
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectItems