import Head from "next/head";
import Navbar from "./Navbar";
import content from "../constants/content";

const { meta, ui } = content;

export default function ContainerBlock({ children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="#main" className="skip">{ui.skip}</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">{children}</main>
    </>
  );
}
