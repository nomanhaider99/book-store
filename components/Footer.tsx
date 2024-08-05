import React from 'react'

function Footer() {
  return (
        <div className='h-[20vw] w-full bg-[#FDF8EE] absolute translate-y-[55vw] flex overflow-hidden border-none'>
        <div className="logo w-1/4 py-16 px-14">
                <h2 className='flex items-center font-extrabold text-lg text-black'>
                    <svg className='mr-2'  width="35" height="35" viewBox="0 0 59 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3433 10.65L46.1416 0.780273V9.36441L29.3433 10.65Z" fill="#B8E8F2"/>
                <path d="M29.3433 10.6501L49.7233 3.09448V9.2157L29.3433 10.6501Z" fill="#88CFE5"/>
                <path d="M29.3432 10.6501L7.51074 0V8.34957L29.3432 10.6501Z" fill="#B8E8F2"/>
                <path d="M29.3432 10.65L2.90967 1.92603V7.81268L29.3432 10.65Z" fill="#88CFE5"/>
                <path d="M29.3791 51.8476L0.0315758 46.1685L0 4.96191L29.3475 10.6456L29.3791 51.8476Z" fill="#472758"/>
                <path d="M58.7946 34.0297C58.7946 41.3192 53.0748 47.1968 45.9973 48.5772L29.3478 51.8159L29.3433 10.65L44.8606 7.63224C51.7667 6.28801 57.3782 9.84256 57.3782 16.9607C57.3782 20.3709 56.0745 23.33 53.9274 25.6891C56.8684 27.0514 58.79 29.8527 58.7946 34.0297ZM38.4055 17.7095V24.999L44.8606 23.7405C46.8995 23.3435 48.3159 21.5392 48.3159 19.4236C48.3159 17.308 46.9581 16.045 44.8606 16.4509L38.4055 17.7095ZM49.7323 35.0852C49.7323 32.7937 48.2617 31.4315 45.9928 31.8735L38.4055 33.3486V41.229L45.9928 39.754C48.2617 39.3164 49.7323 37.3813 49.7323 35.0852Z" fill="#4D2C5E"/>
                    </svg>
                        Book Store  
                </h2>
                <p className='text-zinc-500 text-sm pt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
            </div>
        <div className="links w-3/4 flex justify-between px-52 translate-y-16">
        <div className="link1">
            <h2 className='text-black font-bold'>Company</h2>
            <div className="sub-links-1 text-bold text-zinc-500 text-sm pt-5">
                <h4>About us</h4>
                <h4>How to work?</h4>
                <h4>Popular Course</h4>
                <h4>Services</h4>
            </div>
        </div>
        <div className="link2">
            <h2 className='text-black font-bold'>Courses</h2>
            <div className="sub-links-2 text-bold text-zinc-500 text-sm pt-5">
                <h4>Categories</h4>
                <h4>Offline Course</h4>
                <h4>Video Course</h4>
            </div>
        </div>
        <div className="link3">
            <h2 className='text-black font-bold'>Support</h2>
            <div className="sub-links-3 text-bold text-zinc-500 text-sm pt-5">
                <h4>FAQ</h4>
                <h4>Help Center</h4>
                <h4>Career</h4>
                <h4>Privacy</h4>
            </div>
        </div>
        <div className="link4">
            <h2 className='text-black font-bold'>Contact Info</h2>
            <div className="sub-links-4 text-bold text-zinc-500 text-sm pt-5">
                <h4>+031 9831212</h4>
                <h4>ElizabethJ@email.com</h4>
                <h4>4808 Skinner Hollow Road
                Days Creek, OR 97429</h4>
            </div>
        </div>
        </div>
        <div className="copyright bg-[#FDF8EE] w-full absolute text-center mt-[17.5vw] border-t-2 border-zinc-300 py-2">
        <h2 className='text-zinc-500 text-sm font-bold'>BookStore All Right Reserved, 2022</h2>
    </div>
    </div>
  ) 
}

export default Footer