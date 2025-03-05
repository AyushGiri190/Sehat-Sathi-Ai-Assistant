import SkinImgUp from "@/components/imageuploader/skinImgUp"
import Navbar from "@/components/navBar/navBar"
import SkinCancerPage from "@/components/page/knoSkin"

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <SkinCancerPage/>
      <SkinImgUp/>
    </div>
    
  )
}

export default page