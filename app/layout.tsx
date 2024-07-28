import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
// inter.className
export const metadata: Metadata = {
  title: "TWONODE",
  description: "TWONODE TECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!-- SEO Meta Tags --> */}
        <meta
          name="description"
          content="PluttrApp helps you manage your finances with ease. Track your expenses, set budgets, and achieve your financial goals."
        />
        <meta name="author" content="TwoNode" />

        {/* <!-- OG Meta Tags to improve the way the post looks when you share the page on LinkedIn, Facebook, Google+ --> */}
        <meta property="og:site_name" content="TwoNode" />
        {/* <!-- website name --> */}
        <meta
          property="og:site"
          content="https://www.twonodetechnologies.com"
        />
        {/* <!-- website link --> */}
        <meta
          property="og:title"
          content="PluttrApp - Track Your Finances Effortlessly"
        />
        {/* <!-- title shown in the actual shared post --> */}
        <meta
          property="og:description"
          content="PluttrApp helps you manage your finances with ease. Track your expenses, set budgets, and achieve your financial goals."
        />
        {/* <!-- description shown in the actual shared post --> */}
        <meta
          property="og:image"
          content="https://www.twonodetechnologies.com/public/logo.png."
        />
        {/* <!-- image link, make sure it's jpg --> */}
        <meta
          property="og:url"
          content="https://www.twonodetechnologies.com"
        />
        {/* <!-- where do you want your post to link to --> */}
        <meta property="og:type" content="article" />

        {/* <!-- Twitter Card Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PluttrApp" />
        <meta
          name="twitter:title"
          content="PluttrApp - Track Your Finances Effortlessly"
        />
        <meta
          name="twitter:description"
          content="PluttrApp helps you manage your finances with ease. Track your expenses, set budgets, and achieve your financial goals."
        />
        <meta
          name="twitter:image"
          content="https://www.twonodetechnologies.com/images/favicon.png"
        />

        {/* <!-- Website Title --> */}
        <title>PluttrApp - Track Your Finances Effortlessly</title>

        {/* <!-- Styles --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/fontawesome-all.css" rel="stylesheet" />
        <link href="css/swiper.css" rel="stylesheet" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />

        {/* <!-- Favicon  --> */}
        <link rel="icon" href="images/favicon.png" />

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
      <body style={{}}>
        <div className="h-[70px] w-full bg-slate-900">
          <div className="fixed top-0 right-0 left-0 z-[30] w-full h-[65px] px-2.5 py-4 bg-sky-950 justify-center items-center gap-1 flex-col flex">
            <div className="text-center">
              <span className="text-white text-[10px] lg:text-[13px] font-normal font-['Bricolage Grotesque'] leading-[8px] lg:leading-[20px]">
                Reach out on: Call - (+234) 706-9227-677 || Email:
                info@twonodetechnologies.com{" "}
              </span>
              <Link
                href={"/contact"}
                className="text-white text-[8px] lg:text-[12px] font-semibold font-['Bricolage Grotesque'] underline leading-[8px] lg:leading-[20px] whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-white text-[8px] lg:text-[12px] font-normal font-['Bricolage Grotesque'] leading-[8px] lg:leading-[30px]">
              RC NO.: 7742902
            </p>
          </div>
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
