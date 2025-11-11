"use client";

import React, { useState, useRef, useEffect } from "react";
import axiosIns from "@/lib/axiosins";
import Navbar from "@/components/navBar/navBar";

const ChatBotCard = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatLog, setChatLog] = useState<
    { sender: "user" | "bot"; message: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Scroll to bottom when new message added
  const chatContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatLog, loading]);

  const handleSend = async () => {
    if (!userMessage.trim()) {
      alert("Please enter a message");
      return;
    }

    setChatLog((prev) => [...prev, { sender: "user", message: userMessage }]);
    setLoading(true);
    setError(null);

    try {
      console.log("Sending message:", userMessage);
      const response = await axiosIns.post("/chatbot", { message: userMessage });

      console.log("Response:", response.data);

      const botReply = response.data.reply || "Sorry, no response from bot.";
      setChatLog((prev) => [...prev, { sender: "bot", message: botReply }]);
      setUserMessage("");
    } catch (err) {
      setError("Failed to get response. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <div className="bg-[#0D0D1F] min-h-screen overflow-hidden">
      <Navbar/>
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] bg-[#0D0D1F] pb-10 ">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#0D0D1F] to-white my-6 text-center">
        AI Chatbot
      </h2>
       <div className="w-full max-w-xl flex flex-col bg-gray-900 rounded-lg border-4 border-white/10 h-[80vh]">
        <header className="text-center pt-4 text-white">
          <h3 className="text-2xl font-semibold">Talk to our AI</h3>
          <p className="text-gray-400">Ask questions and get instant responses</p>
        </header>

        <div
          ref={chatContentRef}
          className="flex flex-col h-[400px] overflow-y-auto px-4 space-y-4 text-white"
        >
          {chatLog.length === 0 && (
            <p className="text-gray-400 text-center mt-20">
              Start the conversation below...
            </p>
          )}

          {chatLog.map((chat, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                chat.sender === "user"
                  ? "self-end bg-blue-600 text-white"
                  : "self-start bg-gray-700 text-gray-200"
              }`}
            >
              <p>{chat.message}</p>
            </div>
          ))}

          {loading && (
            <p className="self-start italic text-gray-400 select-none">
              AI is typing...
            </p>
          )}
        </div>

        <div className="flex gap-2 p-4 border-t border-white/10">
          <input
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="flex-grow rounded px-3 py-2 text-black"
          />
          <button
            onClick={handleSend}
            disabled={loading || !userMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Send
          </button>
        </div>

        {error && <p className="text-red-500 text-center p-2">{error}</p>}
      </div>
    </div>
    </div>
  );
};

export default ChatBotCard;
