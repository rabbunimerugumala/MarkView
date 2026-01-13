"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarkdownPreviewProps {
  markdown: string;
}

export function MarkdownPreview({ markdown }: MarkdownPreviewProps) {
  return (
    <div className="flex h-full w-full flex-col bg-background">
      <div className="flex shrink-0 items-center justify-between border-b p-2">
        <h2 className="px-2 text-sm font-semibold">Preview</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="prose dark:prose-invert max-w-none"
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </ScrollArea>
    </div>
  );
}
