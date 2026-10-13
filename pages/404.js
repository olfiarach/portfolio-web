import ContainerBlock from "../components/ContainerBlock";
import content from "../constants/content";

export default function NotFound() {
  return (
    <ContainerBlock noindex>
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="display text-step-2">{content.ui.notFound}</h1>
        <a href="/" className="link mt-6">{content.ui.backHome}</a>
      </div>
    </ContainerBlock>
  );
}
