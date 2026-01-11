"use client";

import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

interface BlogDisplayProps {
    content: string;
}

export default function BlogDisplay({ content }: BlogDisplayProps) {
    if (!content) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto mt-12 p-8 bg-gray-900/40 border border-gray-800 rounded-2xl backdrop-blur-sm shadow-2xl"
        >
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-400 prose-a:text-purple-400 hover:prose-a:text-purple-300">
                <ReactMarkdown>{content}</ReactMarkdown>
            </article>
        </motion.div>
    );
}
