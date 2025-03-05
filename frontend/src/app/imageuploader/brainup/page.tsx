import BrainImgUp from "@/components/imageuploader/brainImgUp"
import Navbar from "@/components/navBar/navBar"


function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <BrainImgUp/>
    </div>
    
  )
}

export default page