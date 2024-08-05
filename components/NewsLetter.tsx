import Image from 'next/image'
import React from 'react'

function NewsLetter() {
  return (
    <div className='h-[40vw] w-full bg-[#F5F5F5] absolute flex items-center justify-center translate-y-[15vw]'>
        <div className="circle h-[15vw] w-[15vw] absolute rounded-full bg-none border-2 border-[#F5F5F5] -translate-x-[36vw] translate-y-16"></div>
        <div className="circle h-[15vw] w-[15vw] absolute rounded-full bg-none border-2 border-[#F5F5F5] -translate-x-[30vw] translate-y-32"></div>
        <div className="circle h-[15vw] w-[15vw] absolute rounded-full bg-none border-2 border-[#F5F5F5] translate-x-[40vw] -translate-y-16"></div>
        <div className="circle h-[15vw] w-[15vw] absolute rounded-full bg-none border-2 border-[#F5F5F5] translate-x-[35vw] -translate-y-40"></div>
        {/* <Image src="http://localhost:3000/images/bulb" alt='bulb' height={100} width={100} /> */}
         <div className='bg-[#4D2C5E] w-[80vw] h-[20vw] rounded-xl'>
            <h1 className='text-center text-white text-3xl font-bold translate-y-16 text-["Poppins"]'>Subscribe to our newsletter</h1>
            <p className='text-zinc-300 text-sm text-center translate-y-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex justify-center items-center translate-y-28'>
                <input type="text" placeholder='Email Address' className='placeholder:text-zinc-500 py-4 outline-none text-black font-semibold px-32 rounded-full'/>
                <button className='bg-[#FF7426] px-10 py-3 -ml-32 rounded-full font-semibold'>Email</button>
            </div>
         </div>
    </div>
  )
}

export default NewsLetter