import StoreProvider from "./StoreProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drawing Tool",
  description: "drawing tool",
  icons: {
    icon: "/favicon.ico",
  }
  
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
