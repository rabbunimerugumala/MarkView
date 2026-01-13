import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarkView",
  description: "MarkView - Simple Markdown Editor and Preview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
