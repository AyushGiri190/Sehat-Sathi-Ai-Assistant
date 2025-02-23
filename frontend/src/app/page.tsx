"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";
import axiosInstance from "@/lib/axiosInstance"; // Import axiosInstance

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewURL(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setMessage("⚠️ Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axiosInstance.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(`✅ ${response.data.message}`);
    } catch (error) {
      console.error("Upload Error:", error);
      setMessage("❌ Error: Failed to upload image.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Upload & Preview Image</h1>
      <Input type="file" accept="image/*" onChange={handleFileChange} className="w-64" />
      
      {previewURL && (
        <Image src={previewURL} alt="Preview" width={200} height={200} className="rounded-md shadow-md" />
      )}

      <Button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700">
        Upload
      </Button>

      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}
