import { Providers } from "./providers";
import Header from "@/components/Header";
import Toogler from "@/components/Toogler";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "animate.css";

const poppins = Poppins({weight:'400' ,subsets: ["latin"] });

export const metadata = {
  title: "Xplore Community",
  verification: {
    google: "r97zbLMu8e2wl4mmmFuUoOZTZDVKXEUhXVFlTD07p5A"
  },
  description:
    "An all in one resource platform for learners from different domains. Discover a treasure trove of tech articles, tutorials, and roadmaps on xplore community's website. Dive into a world of knowledge as we provide insightful content to help you navigate various domains, master new skills, and chart your path to success. Join us on this educational journey!",
  applicationName: "Xplore Community",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "programming",
    "free resources",
    "best tutorials",
    "complete roadmaps",
    "article on",
    "all in one resource platform",
    "Rust",
    "Rust Tutorials",
  ],
  authors: [
    {
      name: "Jayanth MKV",
      url: "https://www.linkedin.com/in/jayanth-mkv-685609207/",
    },
  ],
  creator: "Jayanth MKV",
  publisher: "Xplore Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} yes-scrollbar overflow-x-hidden `}>
        <Providers>
          <Script src='https://www.googletagmanager.com/gtag/js?id=G-8BDPV1PKKC' />
          <Script id='google-analytics'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-8BDPV1PKKC');
        `}
          </Script>
          <Header />
          <Toogler />
          <div className=' bg-blue-200 dark:bg-slate-900 min-h-[750px] md:mt-[3rem] font-sans'>
            {children}
            <div className="md:h-[15rem] min-h-[5rem]"></div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
