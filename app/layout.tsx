import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi Bold
    "700", // Bold
    "800", // Extra Bold
    "900", // Black
  ],
});
export const metadata: Metadata = {
  title: "Care Yuk – Teman Bicaramu",
  description:
    "Care Yuk adalah aplikasi yang membantumu memahami, melacak, dan menjaga kesehatan mental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
