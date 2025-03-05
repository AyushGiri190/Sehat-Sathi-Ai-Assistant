import BrainImgUp from "@/components/imageuploader/brainImgUp"
import Navbar from "@/components/navBar/navBar"
import BrainTumourPage from "@/components/page/knoBrain"


function page() {
  return (
    <div className="bg-[#0D0D1F] min-h-screen">
      <Navbar />
      <BrainTumourPage />
      {/* <h2 className="text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#0D0D1F] to-white my-6">
        Upload MRI Scan for Brain Tumor Analysis
      </h2> */}

      <BrainImgUp />
    </div>

  )
}

export default page