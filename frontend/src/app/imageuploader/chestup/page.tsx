import ScrollBar from "@/components/contact/scrollbar"
import ChestImgUp from "@/components/imageuploader/chestImgUp"
import Navbar from "@/components/navBar/navBar"
import ChestTumourPage from "@/components/page/knoChest"
import BreadcrumbWithCustomSeparator from "@/components/pageBreadcrumb/pgBreadcrumb";

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <div className="ml-6 mt-2">
      <BreadcrumbWithCustomSeparator currentPage="Lung Cancer"/>
      </div>
      <ChestTumourPage/>
      <ChestImgUp/>
      </div>
    </div>
    
  )
}

export default page