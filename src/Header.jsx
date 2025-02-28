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
        <div>
            <h1>Nice</h1>
        </div>
        <div>
            <h1>Nice</h1>
        </div>
        </div>
    );
};

export default Header;
