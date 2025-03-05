import TuberImgUp from "@/components/imageuploader/tuberImgUp";
import Navbar from "@/components/navBar/navBar";
import TuberPage from "@/components/page/knoTuber";

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <TuberPage/>
      <TuberImgUp/>
    </div>
    
  )
}

export default page