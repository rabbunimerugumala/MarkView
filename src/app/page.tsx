"use client";

import { useState } from "react";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [markdown, setMarkdown] = useState<string>("# Welcome to MarkView\n\nStart typing...");

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-bold">MarkView</h1>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex overflow-hidden">
        <div className="w-1/2 border-r flex flex-col">
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        </div>
        <div className="w-1/2 flex flex-col bg-gray-50 dark:bg-zinc-900/50">
          <MarkdownPreview content={markdown} />
        </div>
      </main>
    </div>
  );
}
