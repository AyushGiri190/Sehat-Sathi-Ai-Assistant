import ChestImgUp from "@/components/imageuploader/chestImgUp"
import Navbar from "@/components/navBar/navBar"

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <ChestImgUp/>
    </div>
    
  )
}

export default page