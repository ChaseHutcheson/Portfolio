import React from 'react'

function Footer() {
  return (
    <div className='py-3 text-center'>
      <p className='text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Chase Hutcheson. 
        All Rights Reserved
      </p>
    </div>
  )
}

export default Footer