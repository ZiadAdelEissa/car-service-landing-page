import React from 'react'
import about from '../img/about.jfif'
export default function About() {
  return (
    <div className='about  grid  grid-cols-2 self-center justify-items-center gap-12 p-8 bg-[rgba(0,0,0,0.74)]  max-lg:grid max-lg:grid-cols-1 font-serif'>
    <div className='about-text flex flex-col justify-center  ml-[20px] break-words'>
      <h1 className='text-4xl text-yellow-500'>El Akssa</h1>
      <p className='text-white text-2xl max-lg:text-lg'>
        Elora is a renowned digital art curator, known for her vibrant and expressive artwork that showcases her diverse backgrounds and interests. She has been honored to collaborate with various artists worldwide, including the world-renowned artist Jennifer Lawrence.
      </p>
    </div>
    <div className='about-img  flex justify-center items-center w-[300px] h-[300px] '>
    <img className=' object-cover' src={about} alt='info-img' />
    </div>
  </div>
  )
}
