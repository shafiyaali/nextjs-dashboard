import  {inter } from "@/app/ui/fonts"
import "@/app/ui/global.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shafiya Invoice Dashboard",
  description: "Shafiya built this invoice dashboard for learning",
  keywords: "shafiya, shinaash, invoice, dashboard"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
