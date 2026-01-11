"use client";

import { useState } from 'react';
import { Loader2, Search } from 'lucide-react';

interface InputFormProps {
    onSearch: (topic: string) => void;
    isLoading: boolean;
}

export default function InputForm({ onSearch, isLoading }: InputFormProps) {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (topic.trim()) {
            onSearch(topic);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="What do you want to research today?"
                    className="w-full pl-11 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                    disabled={isLoading}
                />
            </div>
            <button
                type="submit"
                disabled={isLoading || !topic.trim()}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        <span>Researching & Writing...</span>
                    </>
                ) : (
                    <span>Start Research</span>
                )}
            </button>
        </form>
    );
}
