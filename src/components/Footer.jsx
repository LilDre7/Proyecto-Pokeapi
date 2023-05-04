import React from 'react'

const Footer = () => {
  return (
    <div className='relative grid grid-cols-[1_fr_auto] '>
      <div className='h-20 bg-red-700' ></div>
      <div className='h-14 bg-black' ></div>
      <div className='absolute top-0 bottom-0 left-1/2 translate-y-8 -translate-x-1/2 h-20 aspect-square rounded-full bg-white border-8 border-black after:content-[""] after:h-14 after:aspect-square after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gray-700 after:border-8 after:border-black'></div>
    </div>
  )
}

export default Footer