import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz", "SOFT"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
