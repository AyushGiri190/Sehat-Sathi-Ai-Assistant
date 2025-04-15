import ScrollBar from "@/components/contact/scrollbar";
import TuberImgUp from "@/components/imageuploader/tuberImgUp";
import Navbar from "@/components/navBar/navBar";
import TuberPage from "@/components/page/knoTuber";
import BreadcrumbWithCustomSeparator from "@/components/pageBreadcrumb/pgBreadcrumb";

function page() {
  return (
    <div className="bg-[#0D0D1F] h-screen overflow-hidden">
      <Navbar/>
      <ScrollBar/>
      <div className="custom-scrollbar h-screen overflow-y-auto">
      <div className="ml-6 mt-2">
      <BreadcrumbWithCustomSeparator currentPage="Tuberculosis"/>
      </div>
      <TuberPage/>
      <TuberImgUp/>
      </div>
    </div>
    
  )
}

export default page