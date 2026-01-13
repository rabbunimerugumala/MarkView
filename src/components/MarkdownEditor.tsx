"use client";

interface MarkdownEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
    return (
        <textarea
            className="w-full h-full p-4 resize-none outline-none bg-transparent font-mono text-sm leading-relaxed"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type markdown here..."
            spellCheck={false}
        />
    );
}
