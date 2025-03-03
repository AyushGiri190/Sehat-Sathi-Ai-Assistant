import Image from "next/image";
import Navbar from "./navBar";
const HomePage = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0D0D1F] to-[#432663]">
          {/* Navbar */}
          <Navbar />
    
          {/* Main Content */}
          <div className="flex items-center px-8 md:px-16 min-h-[calc(100vh-4rem)]">
            {/* Left Section: Text & Buttons */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-8xl md:text-8xl font-bold text-white leading-tight ml-32 mt-20">
                Sehat-Sathi
              </h1>
              <h1 className="text-3xl md:text-3xl font-bold text-white leading-tight mt-4 ml-40">
                "Your AI Health Companion"
              </h1>
            </div>
    
            {/* Right Section: Floating Image */}
            <div className="absolute right-2 bottom-2 md:right-16 md:bottom-8">
              <Image
                src="/roket.png"
                alt="Floating Rocket"
                width={400}
                height={398}
                className="animate-float"
              />
            </div>
          </div>
        </div>
      );
    };

export default HomePage;
