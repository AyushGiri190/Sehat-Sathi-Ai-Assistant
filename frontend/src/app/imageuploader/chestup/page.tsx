import ChestImgUp from "@/components/imageuploader/chestImgUp"
import Navbar from "@/components/navBar/navBar"
import ChestTumourPage from "@/components/page/knoChest"

function page() {
  return (
    <div className="bg-[#0D0D1F]">
      <Navbar/>
      <ChestTumourPage/>
      <ChestImgUp/>
    </div>
    
  )
}

export default page