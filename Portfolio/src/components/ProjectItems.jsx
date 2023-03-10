import React from 'react'

function ProjectItems({ title, img, subtitle, stack}) {
  return (
    <div className='w-full h-full bg-gradient-tr from-red-600 to-yellow-500 rounded-md overflow-hidden'>
      <div className='h-full w-full bg-white'>
        <h1>{title}</h1>
        <img src={img} alt="project-image"/>
        <h3>{subtitle}</h3>
        <p>
            {stack.map((item) => (
                <span>
                    {item}
                </span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default ProjectItems