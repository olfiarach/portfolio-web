import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import FavouriteProjects from "../components/FavouriteProjects";
import Experience from "../components/Experience";
import Teaching from "../components/Teaching";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import HeroShader from "../components/HeroShader";
import Motion from "../components/Motion";

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <AboutMe />
      <FavouriteProjects />
      <Experience />
      <Teaching />
      <Stack />
      <Contact />
      <Motion />
      <HeroShader />
    </ContainerBlock>
  );
}
