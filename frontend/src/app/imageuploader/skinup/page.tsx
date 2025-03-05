import SkinImgUp from "@/components/imageuploader/skinImgUp"
import Navbar from "@/components/navBar/navBar"

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <SkinImgUp/>
    </div>
    
  )
}

export default page