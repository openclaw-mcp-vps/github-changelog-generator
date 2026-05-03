import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Changelog Generator – Auto-generate changelogs from commits",
  description: "Analyze commit history and generate formatted changelogs for releases. Built for open source maintainers and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3c7d350-faa5-420c-bc79-6d61e93ca031"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
