import headerImg from '../src/assets/Warehouse 01-03-2025 at 04-27-08.jpeg';
import img1 from '../src/assets/296312894289b8da04ee23e6c9b09cbf.jpg'
import img2 from '../src/assets/306ffb951b1eda6c359990fd447daff8.jpg'
import img3 from '../src/assets/562233083093b34d7924e7847e5dd5ae.jpg'
import img4 from '../src/assets/6642048031a1a0aef4b829d02720f823.jpg'


const Header = () => {
    return (
        <div 
            className="w-full min-h-screen flex flex-col items-center justify-center text-white"
            style={{
            backgroundImage: `url(${headerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            }}
          >
        <div className='bg-[#E6F4EB] flex gap-10 rounded-[10px] mx-auto'>
            {/* about component */}
            <div className='ml-9 mt-12'>
                
            <h1 className='text-black text-5xl font-semibold'>
            Small warehouse space
            <br />
            for rent in <span className='text-[#00AA6C]'>
            Upper West
            <br />
            Side, Atlanta, GA
            </span>
            </h1>
            <div className='flex gap-6 mt-6'>
                <div className='bg-white'>
                <svg className='mt-2' width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect y="0.73587" width="34.5283" height="34.5283" rx="5.39504" fill="white"/>
<path d="M24.3855 11.5747H10.1432C9.30872 11.5747 8.63226 12.2512 8.63226 13.0856V25.6183C8.63226 26.4527 9.30872 27.1292 10.1432 27.1292H24.3855C25.2199 27.1292 25.8964 26.4527 25.8964 25.6183V13.0856C25.8964 12.2512 25.2199 11.5747 24.3855 11.5747Z" stroke="#00AA6C" stroke-width="1.07901" stroke-miterlimit="10"/>
<path d="M12.9425 8.871V14.3341" stroke="#00AA6C" stroke-width="1.07901" stroke-miterlimit="10"/>
<path d="M21.5862 8.871V14.3341" stroke="#00AA6C" stroke-width="1.07901" stroke-miterlimit="10"/>
<path d="M8.91867 16.4494H25.7613" stroke="#00AA6C" stroke-width="1.07901" stroke-miterlimit="10"/>
<path d="M12.7355 18.6359H12.1311C11.793 18.6359 11.5188 18.9101 11.5188 19.2482V19.8526C11.5188 20.1908 11.793 20.4649 12.1311 20.4649H12.7355C13.0737 20.4649 13.3478 20.1908 13.3478 19.8526V19.2482C13.3478 18.9101 13.0737 18.6359 12.7355 18.6359Z" fill="#00AA6C"/>
<path d="M17.5705 18.6359H16.9662C16.628 18.6359 16.3539 18.9101 16.3539 19.2482V19.8526C16.3539 20.1908 16.628 20.4649 16.9662 20.4649H17.5705C17.9087 20.4649 18.1828 20.1908 18.1828 19.8526V19.2482C18.1828 18.9101 17.9087 18.6359 17.5705 18.6359Z" fill="#00AA6C"/>
<path d="M22.3976 18.6359H21.7932C21.4551 18.6359 21.1809 18.9101 21.1809 19.2482V19.8526C21.1809 20.1908 21.4551 20.4649 21.7932 20.4649H22.3976C22.7358 20.4649 23.0099 20.1908 23.0099 19.8526V19.2482C23.0099 18.9101 22.7358 18.6359 22.3976 18.6359Z" fill="#00AA6C"/>
<path d="M12.7355 22.7234H12.1311C11.793 22.7234 11.5188 22.9975 11.5188 23.3357V23.94C11.5188 24.2782 11.793 24.5524 12.1311 24.5524H12.7355C13.0737 24.5524 13.3478 24.2782 13.3478 23.94V23.3357C13.3478 22.9975 13.0737 22.7234 12.7355 22.7234Z" fill="#00AA6C"/>
<path d="M17.5705 22.7234H16.9662C16.628 22.7234 16.3539 22.9975 16.3539 23.3357V23.94C16.3539 24.2782 16.628 24.5524 16.9662 24.5524H17.5705C17.9087 24.5524 18.1828 24.2782 18.1828 23.94V23.3357C18.1828 22.9975 17.9087 22.7234 17.5705 22.7234Z" fill="#00AA6C"/>
<path d="M22.3976 22.7234H21.7932C21.4551 22.7234 21.1809 22.9975 21.1809 23.3357V23.94C21.1809 24.2782 21.4551 24.5524 21.7932 24.5524H22.3976C22.7358 24.5524 23.0099 24.2782 23.0099 23.94V23.3357C23.0099 22.9975 22.7358 22.7234 22.3976 22.7234Z" fill="#00AA6C"/>
        </svg>

                </div>
                <div className='text-[#102442]'>
                <h1 className='text-lg font-bold'>Flexible spaces & leases</h1>
                <p>Leases as short as 6 months. Upscale or downscale anytime!</p>
                </div>
            </div>
            <div className='flex gap-6 my-4'>
                <div className='bg-white'>
                <svg className='mt-2' width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect y="0.73584" width="34.5283" height="34.5283" rx="5.39504" fill="white"/>
          <path d="M13.21 7.5H8.77C7.51631 7.5 6.5 8.51631 6.5 9.77C6.5 11.0237 7.51631 12.04 8.77 12.04H13.21C14.4637 12.04 15.48 11.0237 15.48 9.77C15.48 8.51631 14.4637 7.5 13.21 7.5Z" stroke="#00AA6C" stroke-miterlimit="10"/>
          <path d="M11.9499 24.46H9.87988V12.04" stroke="#00AA6C" stroke-miterlimit="10"/>
          <path d="M28.4502 24.46H16.9502" stroke="#00AA6C" stroke-miterlimit="10"/>
          <path d="M14.0898 27.62C15.5147 27.62 16.6698 26.4649 16.6698 25.04C16.6698 23.6151 15.5147 22.46 14.0898 22.46C12.6649 22.46 11.5098 23.6151 11.5098 25.04C11.5098 26.4649 12.6649 27.62 14.0898 27.62Z" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M21.2799 27.3599C21.8819 27.3599 22.3699 26.8719 22.3699 26.2699C22.3699 25.6679 21.8819 25.1799 21.2799 25.1799C20.678 25.1799 20.1899 25.6679 20.1899 26.2699C20.1899 26.8719 20.678 27.3599 21.2799 27.3599Z" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M25.6598 27.3599C26.2618 27.3599 26.7498 26.8719 26.7498 26.2699C26.7498 25.6679 26.2618 25.1799 25.6598 25.1799C25.0578 25.1799 24.5698 25.6679 24.5698 26.2699C24.5698 26.8719 25.0578 27.3599 25.6598 27.3599Z" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M12.8701 19.0601H15.3201C16.1501 19.0601 16.9401 19.3901 17.5301 19.9701C18.1201 20.5601 18.4401 21.3501 18.4401 22.1801V24.3801" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M13.3701 19.0601V22.5501" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M26.9199 17.6399H20.1899V24.3699H26.9199V17.6399Z" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M23.5098 17.5601V21.4701" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M26.9199 10.7H20.1899V17.43H26.9199V10.7Z" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M23.5098 10.6101V14.5201" stroke="#00AA6C"     stroke-miterlimit="10"/>
        </svg>

                </div>
                <div className='text-[#102442]'>
                <h1 className='text-lg font-bold'>All-inclusive warehousing</h1>
                <p>Rental includes racking, equipment, loading docks & more</p>
                </div>
            </div>
            <div className='flex gap-6'>
                <div className='bg-white'>
                <svg className='mt-2' width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.73584" width="34.5283" height="34.5283" rx="5.39504" fill="white"/>
<g clip-path="url(#clip0_1_109)">
<path d="M10.83 12.68C10.48 12.4 10.17 12.05 9.94001 11.64C9.00001 9.97001 9.61001 7.86001 11.28 6.94001C12.95 6.02001 15.05 6.61001 15.98 8.28001C16.67 9.52001 16.52 10.99 15.71 12.05" stroke="#00AA6C" stroke-miterlimit="10"/>
<path d="M15.67 13.03C16.3327 13.03 16.87 12.4927 16.87 11.83C16.87 11.1673 16.3327 10.63 15.67 10.63C15.0073 10.63 14.47 11.1673 14.47 11.83C14.47 12.4927 15.0073 13.03 15.67 13.03Z" fill="#00AA6C"/>
<path d="M21.99 11.15C20.42 8.32 16.85 7.3 14.02 8.87C11.19 10.44 10.17 14.01 11.74 16.84C13 19.11 15.55 20.21 17.97 19.75L22.64 28.16L25.7 29.89L25.83 26.38L25 24.88L24.06 25.4L23.08 23.63L24.02 23.11L23.25 21.73L22.31 22.25L21.31 20.46L22.25 19.94L21.16 17.98C22.84 16.17 23.25 13.42 21.98 11.15H21.99Z" stroke="#00AA6C" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_1_109">
<rect width="17.35" height="24.73" fill="white" transform="translate(9 6)"/>
</clipPath>
</defs>
</svg>
               </div>
                <div className='text-[#102442]'>
                <h1 className='text-lg font-bold'>Immediate availability</h1>
                <p>Move in today!</p>
                </div>
            </div>
            {/* image section */}
            <div className='mt-6 flex gap-2 mb-3'>
             <img className='w-36 rounded-lg' src={img1} alt="" />
             <img className='w-36 rounded-lg' src={img2} alt="" />
             <img className='w-36 rounded-lg' src={img3} alt="" />
             <img className='w-36 rounded-lg' src={img4} alt="" />
            </div>
            <h1 className='text-[#00AA6C] font-bold text-lg'>200-2,000 sq ft starting as low as $625/month</h1>
            </div>
            
            {/* form component */}
            <div className='mt-8 mr-12 mb-12'>
                <div className='bg-white rounded-[10px]'>
                 <h1 className='font-semibold text-3xl text-black  pt-8 mx-8'>Visit for an in-person tour</h1>
                 <div className='flex mx-8 pt-3'>
                 <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                <p className='text-[#102442]'>
                Cashana or Khadijah will answer your
                 <br /> 
                 questions and find you a space that meets
                 <br />
                 your needs. No commitment necessary!   
                </p>
                 </div>
                  {/* form here */}
                 <div className='mx-8'>
                 <form action="">
                 <div>
                 <input type="text" placeholder="First name here" className="input input-md text-[#00000066] mt-2" />
                 <input type="text" placeholder="Last name here" className="input input-md text-[#00000066] mt-2" />
                 </div>
                  <div>
                  <input type="text" placeholder="Email here" className="input input-md text-[#00000066] mt-2" />
                  <input type="text" placeholder="Phone number (Just so we can remind you of your appt)" className="input input-md text-[#00000066] mt-2" />
                  </div>
                 </form>
                 </div>
                 <button className='btn mx-8 bg-[#00AA6C] py-2 px-16 text-white font-semibold mt-3 rounded-lg'>Step 2: Find a time that works</button>
                 <h1 className='mt-3 text-[#102442] mx-8'>Questions? Give us a call: <span className='text-[#00AA6C] underline'>415-985-0940</span></h1>
                <div className='pb-6'>
                <h1 className='text-[#102442] mt-9 ml-8 mr-14 rounded-3xl text-center py-1 bg-[#E6F4EB]'>Looking for a job? <span className='underline'>Click here.</span></h1>
                </div>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default Header;
