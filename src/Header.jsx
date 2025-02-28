import headerImg from '../src/assets/Warehouse 01-03-2025 at 04-27-08.jpeg';

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
        <div className='bg-[#E6F4EB]'>
            {/* about component */}
            <div>
            <h1 className='text-black text-5xl font-semibold'>
            Small warehouse space
            <br />
            for rent in <span className='text-[#00AA6C]'>
            Upper West
            <br />
            Side, Atlanta, GA
            </span>
            </h1>
            </div>
            {/* form component */}
            <div></div>
        </div>
        </div>
    );
};

export default Header;
