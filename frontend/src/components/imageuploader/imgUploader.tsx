import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ImgUploader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-[780px] h-[600px]">
        <CardHeader>
          <CardTitle>Image Uploader</CardTitle>
          <CardDescription>Upload and manage your images easily.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center flex-grow">
          <Card className="h-[300px] w-full max-w-md flex flex-col justify-center items-center border-dashed border-2 border-gray-300 mt-20 gap-4">
            <CardTitle>Image Uploader</CardTitle>
            <CardDescription>Upload and manage your images easily.</CardDescription>
            <Label htmlFor="picture" className="cursor-pointer flex flex-col items-center justify-center gap-2 p-5">
              <Button className="text-sm bg-gray-200 text-black hover:!bg-gray-400 hover:!text-white transition duration-300 ease-in-out">
                Click to upload an image
              </Button>

              <Input id="picture" type="file" className="hidden" />
            </Label>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImgUploader;
