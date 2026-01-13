"use client";

import ReactMarkdown from "react-markdown";
import RemarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
    content: string;
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
    return (
        <div className="w-full h-full p-4 overflow-auto">
            <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[RemarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
}
