"use client";

import { useState } from "react";
import axios from "axios";
import InputForm from "@/components/InputForm";
import BlogDisplay from "@/components/BlogDisplay";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [blogContent, setBlogContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (topic: string) => {
    setIsLoading(true);
    setBlogContent("");
    try {
      // Call the FastAPI backend
      const response = await axios.post("http://localhost:8000/kickoff", {
        topic: topic,
      });
      setBlogContent(response.data.result);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setBlogContent("### Error\n\nSomething went wrong while generating the blog. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Powered by CrewAI & Gemini</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
            AI Research Agent
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Enter any topic and watch our autonomous AI crew research the web and write a comprehensive blog post for you in real-time.
          </p>
        </div>

        <InputForm onSearch={handleSearch} isLoading={isLoading} />
        <BlogDisplay content={blogContent} />
      </div>
    </main>
  );
}
