import { BrainCancer } from "@/components/diseaseCards/brainCancer";
import { BreastCancer } from "@/components/diseaseCards/breastCancer";
import { SkinCancer } from "@/components/diseaseCards/skinCancer";
import { TuberCancer } from "@/components/diseaseCards/tuberCancer";
import Navbar from "@/components/navBar/navBar";
export default function HomePage() {
    return (
      <div>
        <Navbar/>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 hover:-translate-y-10 transition duration-300">
            <BrainCancer />
          </div>
          <div className="p-4 hover:-translate-y-10 transition duration-300">
            <BreastCancer />
          </div>
          <div className="p-4 hover:-translate-y-10 transition duration-300">
            <SkinCancer />
          </div>
          <div className="p-4 hover:-translate-y-10 transition duration-300">
            <TuberCancer />
          </div>
        </div>
      </div>
      </div>
    );
  }
  
  