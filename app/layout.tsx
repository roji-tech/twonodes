import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
// inter.className
export const metadata: Metadata = {
  title: "TWONODES",
  description: "TWONODES TECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{

      }}>
        <div className="h-[65px] w-full bg-slate-900">
          <div className="fixed top-0 right-0 left-0 z-[30] w-full h-[65px] px-2.5 py-4 bg-sky-950 justify-center items-center gap-2 inline-flex">
            <div className="text-center">
              <span className="text-white text-[10px] lg:text-[13px] font-normal font-['Bricolage Grotesque'] leading-[10px] lg:leading-[30px]">
                Reach out on: Call - (+234) 706-9227-677 || Email:
                info@twonodetechnologies.com{" "}
              </span>
              <Link
                href={"/contact"}
                className="text-white text-[10px] lg:text-[13px] font-semibold font-['Bricolage Grotesque'] underline leading-[10px] lg:leading-[30px] whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
