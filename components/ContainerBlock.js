import Head from "next/head";
import Navbar from "./Navbar";
import content, { SITE_URL } from "../constants/content";

const { meta, ui, links } = content;
const image = `${SITE_URL}/img/temannetra.png`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Olfia Rachmi W",
      url: SITE_URL,
      image: `${SITE_URL}/self.jpg`,
      jobTitle: "AI & Computer Vision Engineer",
      sameAs: [links.linkedin, links.github],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Olfia Rachmi W", inLanguage: "en", publisher: { "@id": `${SITE_URL}/#person` } },
  ],
};

export default function ContainerBlock({ children, noindex = false }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
        {!noindex && <link rel="canonical" href={`${SITE_URL}/`} />}
        <meta property="og:type" content="website" />
        {!noindex && <meta property="og:url" content={`${SITE_URL}/`} />}
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={content.hero.alt} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
        {!noindex && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      </Head>
      <a href="#main" className="skip">{ui.skip}</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">{children}</main>
    </>
  );
}
