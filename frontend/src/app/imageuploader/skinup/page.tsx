import ScrollBar from "@/components/contact/scrollbar"
import SkinImgUp from "@/components/imageuploader/skinImgUp"
import Navbar from "@/components/navBar/navBar"
import SkinCancerPage from "@/components/page/knoSkin"
import BreadcrumbWithCustomSeparator from "@/components/pageBreadcrumb/pgBreadcrumb";

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <div className="ml-6 mt-2">
      <BreadcrumbWithCustomSeparator currentPage="Skin Cancer"/>
      </div>
      <SkinCancerPage/>
      <SkinImgUp/>
      </div>
    </div>
    
  )
}

export default page