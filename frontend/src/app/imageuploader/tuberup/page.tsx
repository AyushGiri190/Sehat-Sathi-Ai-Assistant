import LungImgUp from "@/components/imageuploader/lungImgUp";
import Navbar from "@/components/navBar/navBar";

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <LungImgUp/>
    </div>
    
  )
}

export default page