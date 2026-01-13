"use client";

import { useState } from "react";
import { MarkdownEditor } from "@/components/markdown-editor";
import { MarkdownPreview } from "@/components/markdown-preview";
import { ThemeToggle } from "@/components/theme-toggle";

const defaultMarkdown = `# Welcome to MarkView!

This is a live Markdown viewer. Start typing in the editor on the left, and you'll see the rendered HTML on the right.

## Features

- **Live Preview:** Updates as you type.
- **GitHub Flavored Markdown:** Uses \`remark-gfm\` for tables, strikethrough, and more.
- **Dark/Light Mode:** Toggle the theme in the top right.

### Code Blocks

\`\`\`javascript
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
}

export default MyComponent;
\`\`\`

Check out the [react-markdown](https://github.com/remarkjs/react-markdown) library that powers this preview.
`;

export default function Home() {
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b bg-background px-4 sm:px-6">
        <h1 className="text-xl font-bold font-headline">MarkView</h1>
        <ThemeToggle />
      </header>

      <main className="flex flex-1 flex-col md:flex-row">
        <div className="relative flex h-1/2 w-full flex-col md:h-full md:w-1/2">
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        </div>
        
        {/* Mobile separator */}
        <div className="h-[1px] w-full bg-border md:hidden" />
        
        {/* Desktop separator */}
        <div className="hidden w-[1px] bg-border md:block" />

        <div className="relative flex h-1/2 w-full flex-col md:h-full md:w-1/2">
          <MarkdownPreview markdown={markdown} />
        </div>
      </main>
    </div>
  );
}
