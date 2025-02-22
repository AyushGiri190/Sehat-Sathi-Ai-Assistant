"use client";
import { useState, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axiosInstance from "@/lib/axiosInstance"; // Import axiosInstance

export default function AgeChecker() {
  const [age, setAge] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  // Check age eligibility
  const checkAge = async () => {
    if (!age.trim()) {
      setMessage("⚠️ Please enter a valid age.");
      return;
    }

    try {
      const response = await axiosInstance.post("/check-age", {
        age: Number(age),
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("❌ Error: Unable to check eligibility.");
      console.error("Axios Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Check Voting Eligibility</h1>
      <Input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
        className="w-64"
      />
      <Button onClick={checkAge} className="bg-blue-500 hover:bg-blue-700">
        Check
      </Button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}
