"use client";

import { Clipboard, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface MarkdownEditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

export function MarkdownEditor({ markdown, setMarkdown }: MarkdownEditorProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    if (!markdown) return;
    navigator.clipboard.writeText(markdown);
    toast({
      title: "Copied to clipboard!",
      description: "You can now paste the Markdown content elsewhere.",
    });
  };

  const handleClear = () => {
    setMarkdown("");
  };

  return (
    <div className="flex h-full w-full flex-col bg-background">
      <div className="flex shrink-0 items-center justify-between border-b p-2">
        <h2 className="px-2 text-sm font-semibold">Editor</h2>
        <div className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
                  <Clipboard className="h-4 w-4" />
                  <span className="sr-only">Copy</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy Markdown</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleClear}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Clear</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Clear Editor</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="relative flex-1">
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Paste or type Markdown here…"
          className="absolute h-full w-full resize-none rounded-none border-0 p-4 font-code text-sm !ring-0 !ring-offset-0"
          aria-label="Markdown Editor"
        />
      </div>
      <p className="flex h-8 shrink-0 items-center justify-center border-t px-4 text-center text-xs text-muted-foreground">
        This is local only. Your content is not saved anywhere.
      </p>
    </div>
  );
}
