import Image from 'next/image'
import React from 'react'

function StudentSays() {
    const says = [
        {
            message: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself”",
            name: "Frankly Krick"
        },
        {
            message: "“Complete account of the system andexpound the actual Contrary to popularbelief, Lorem Ipsum is not simply random text. It has roots”",
            name: "Dypmate P. ane"
        },
        {
            message: "“There are many variations of passagesof Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour”",
            name: "Clara R. Altman"
        }
    ]
  return (
    <div className='h-[50vw] bg-[#F5F5F5] w-full'>
        <h1 className='text-black text-3xl font-bold text-center translate-y-20'>What's Student's Say</h1>
        <p className='text-center text-zinc-500 translate-y-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="says flex items-center justify-between px-40 translate-y-40">
            {
                says.map((item: any, index: any) => {
                    return (
                        <div className='bg-white px-4 py-16 mx-4'>
                            <p className='text-zinc-500 text-sm'>{item.message}</p>
                            <h2 className='text-black font-bold translate-y-4'>{item.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default StudentSays