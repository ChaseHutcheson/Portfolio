import React from 'react'
import projectdata from '../data/projectdata'
import ProjectItems from './ProjectItems'

function Projects() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projectdata.map((project) => (
              <ProjectItems 
                title={project.title} 
                img={project.imgUrl} 
                subtitle={project.subtitle}
                stack={project.stack}
              />
            ))}
        </div>
    </div>
  )
}

export default Projects