import Image from "next/image";
import Navbar from "./navBar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          <div className="flex gap-4 mt-8 ml-40">
            <Link href="/diseasecard">
              <div className="group">
                <button className="flex items-center justify-center px-6 py-3 w-40 bg-white text-black rounded-full font-semibold text-lg shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-[#5729D6] hover:to-[#df86aa] hover:text-white">
                  Check
                  <ArrowRight className="ml-2 text-pink-400 transition-colors duration-300 group-hover:text-white" size={20} />
                </button>
              </div>
            </Link>

            <Link href="/chat-bot">
              <div className="group">
                <button className="flex items-center justify-center px-6 py-3 w-40 bg-black text-white rounded-full font-semibold text-lg shadow-md transition duration-300 hover:bg-white hover:text-black whitespace-nowrap">
                  Chat-Bot
                  <ArrowRight className="ml-2 text-white transition-colors duration-300 group-hover:text-black" size={20} />
                </button>
              </div>
            </Link>
          </div>


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
