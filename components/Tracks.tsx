'use client'
import Image from 'next/image'
import React from 'react'
import "../images/girl.png" 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Tracks() {
    useGSAP(()=>{
        gsap.from(".task-text", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".task-text",
                scroller: "body",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                markers: true
            }
        });
    },[])
    const tracks = [
        {
            smTitle: "UI/UX Design",
            lgTitle: "UI/UX Design for Beginners",
            price: "$98",
            time: "22hr 30min",
            courses: "34 courses",
            sales: "250 sales"
        },
        {
            smTitle: "Next JS Development",
            lgTitle: "Next JS Development for Beginners",
            price: "$70",
            time: "20hr 30min",
            courses: "12 courses",
            sales: "900 sales"
        },
        {
            smTitle: "Database Mastery",
            lgTitle: "Database Mastery for Beginners",
            price: "$25",
            time: "5hr 30min",
            courses: "5 courses",
            sales: "50 sales"
        }
    ]
  return (
    <div className='main h-[50vw] w-full bg-[#F5F5F5] font-["Roboto"] overflow-hidden'>
        <h1 className='task-text text-center text-4xl font-bold text-black translate-y-52'>Our Tracks</h1>
        <p className='text-center text-zinc-500 translate-y-52 pt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <svg className='absolute translate-x-[90rem] translate-y-20 text-black' width="169" height="177" viewBox="0 0 169 177" fill="black" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3619 68.6905C17.3383 69.6504 18.8903 69.6356 19.8582 68.6729C31.4612 57.5128 43.6783 51.8362 56.1349 51.6939C68.2643 51.5571 80.5182 56.8191 92.5408 67.2449C95.2131 69.5205 99.3439 74.2587 102.978 79.8529C99.9287 84.2385 97.897 89.432 96.8938 94.4355C95.4142 101.825 96.4916 108.62 98.9302 111.985C100.281 113.849 102.024 114.991 104.061 115.467C106.669 116.072 110.212 115.532 114.279 112.083C119.89 107.301 121.254 100.474 119.577 92.96C118.692 89.0101 116.905 84.8649 114.678 80.8815C117.254 78.825 120.46 77.6354 124.36 78.0637C132.617 78.9144 138.808 85.6942 143.211 93.6712C147.03 100.572 151.631 110.767 150.415 118.867C150.003 121.62 148.799 123.986 151.071 126.236C154.549 129.717 157.738 126.113 158.309 122.332C159.531 114.21 156.635 104.426 153.778 96.9332C148.534 83.1445 138.694 70.7428 125.407 69.0331C119.177 68.2602 113.892 69.9166 109.611 72.9942C105.547 67.3546 101.164 62.6886 98.2881 60.3468C84.0586 48.9921 69.7379 43.7117 55.8821 44.5149C42.04 45.3101 28.6151 52.1063 16.3443 65.1941C15.3843 66.1706 15.3854 67.7305 16.3619 68.6905ZM108.657 90.8019C109.521 93.0935 110.105 95.345 110.276 97.4858C110.489 100.208 109.964 102.733 107.842 104.527C107.483 104.826 107.045 105.244 106.685 105.544C106.415 104.598 105.947 102.739 105.94 101.201C105.941 97.7674 106.721 93.6818 108.288 89.8767C108.435 90.1956 108.553 90.4948 108.657 90.8019Z" fill="#4D2C5E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M106.358 105.805C106.115 105.67 105.882 105.584 105.901 105.775C105.93 106.016 106.091 105.978 106.358 105.805Z" fill="#4D2C5E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1602 63.2611C24.2907 60.7358 25.3831 58.0489 26.1625 55.4877C27.3614 51.491 27.8756 47.8346 26.8896 45.1728C26.5819 43.845 25.2432 43.0208 23.9233 43.3422C22.5956 43.6498 21.7713 44.9885 22.0927 46.3084C22.1607 46.9667 21.9311 47.65 21.7136 48.4181C21.2169 50.2287 20.1052 52.1189 18.8955 54.1574C17.3492 56.7575 15.4893 59.3551 13.9027 61.7582C12.459 63.9319 11.2552 65.9487 10.4893 67.5475C9.27977 70.0633 9.21426 72.1756 9.48797 73.4128C9.56434 73.7359 12.246 78.5396 16.8323 76.6261C18.4719 75.9365 22.5354 73.9759 22.7361 73.8784C25.1774 72.5423 29.7122 70.1261 34.0312 68.8625C35.3961 68.4601 36.7138 68.1032 37.9145 68.0525C37.9781 68.1626 38.0417 68.2728 38.1191 68.375C39.2403 69.9673 41.4211 70.3422 43.0214 69.2346C43.9084 68.7042 45.0653 67.2101 45.3748 66.3154C45.9686 64.5774 45.3076 63.1782 43.6854 62.0219C41.4757 60.4522 38.279 60.003 34.6853 60.2971C30.9083 60.6235 26.6291 61.9559 23.1602 63.2611ZM19.1712 71.3286C18.9033 71.8504 18.8124 72.2334 19.1736 72.3186C19.5783 72.4154 19.309 71.7264 19.1712 71.3286Z" fill="#4D2C5E"/>
</svg>
    <div className='flex justify-center translate-y-[18vw]'>
    <div className="tracks w-[80vw] h-[20vw] flex items-center justify-between ">
    <div className='p-8 bg-white rounded-xl shadow-lg'>
        <div className="image">
                <Image src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-xl' alt="" width={250} height={100}/>
            </div>
            <div className="first-area pb-4 border-b-2 border-zinc-500 pt-4">
                <h4 className='text-zinc-500 font-bold'>UI/UX Design</h4>
                <h2 className='text-black font-bold'>UI/UX Design for Beginners</h2>
                <h3 className='font-bold text-[#FF7426]'>$25</h3>
            </div>
            <div className="second-area flex items-center justify-between">
                <h4 className='text-zinc-500 font-bold text-sm py-2'>5hr 30min</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>3 courses</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>27 sales</h4>
            </div>
            <div className='flex justify-center'>
            <button className='shadow-2xl bg-[#FF7426] text-white font-semibold px-5 py-2 rounded-full absolute mt-2'>Join Course</button>
            </div>
        </div>

        <div className='p-8 bg-white rounded-xl shadow-lg'>
        <div className="image">
                <Image src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-xl' alt="" width={250} height={100}/>
            </div>
            <div className="first-area pb-4 border-b-2 border-zinc-500 pt-4">
                <h4 className='text-zinc-500 font-bold'>UI/UX Design</h4>
                <h2 className='text-black font-bold'>UI/UX Design for Beginners</h2>
                <h3 className='font-bold text-[#FF7426]'>$120</h3>
            </div>
            <div className="second-area flex items-center justify-between">
                <h4 className='text-zinc-500 font-bold text-sm py-2'>20hr 30min</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>22 courses</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>77 sales</h4>
            </div>
            <div className='flex justify-center'>
            <button className='shadow-2xl bg-[#FF7426] text-white font-semibold px-5 py-2 rounded-full absolute mt-2'>Join Course</button>
            </div>
        </div>

        <div className='p-8 bg-white rounded-xl shadow-lg'>
        <div className="image">
                <Image src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-xl' alt="" width={250} height={100}/>
            </div>
            <div className="first-area pb-4 border-b-2 border-zinc-500 pt-4">
                <h4 className='text-zinc-500 font-bold'>UI/UX Design</h4>
                <h2 className='text-black font-bold'>UI/UX Design for Beginners</h2>
                <h3 className='font-bold text-[#FF7426]'>$120</h3>
            </div>
            <div className="second-area flex items-center justify-between">
                <h4 className='text-zinc-500 font-bold text-sm py-2'>20hr 30min</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>22 courses</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>77 sales</h4>
            </div>
            <div className='flex justify-center'>
            <button className='shadow-2xl bg-[#FF7426] text-white font-semibold px-5 py-2 rounded-full absolute mt-2'>Join Course</button>
            </div>
        </div>

        

        <div className='p-8 bg-white rounded-xl shadow-lg'>
        <div className="image">
                <Image src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-xl' alt="" width={250} height={100}/>
            </div>
            <div className="first-area pb-4 border-b-2 border-zinc-500 pt-4">
                <h4 className='text-zinc-500 font-bold'>UI/UX Design</h4>
                <h2 className='text-black font-bold'>UI/UX Design for Beginners</h2>
                <h3 className='font-bold text-[#FF7426]'>$99</h3>
            </div>
            <div className="second-area flex items-center justify-between">
                <h4 className='text-zinc-500 font-bold text-sm py-2'>22hr 30min</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>34 courses</h4>
                <h4 className='text-zinc-500 font-bold text-sm py-2'>250 sales</h4>
            </div>
            <div className='flex justify-center'>
            <button className='shadow-2xl bg-[#FF7426] text-white font-semibold px-5 py-2 rounded-full absolute mt-2'>Join Course</button>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Tracks