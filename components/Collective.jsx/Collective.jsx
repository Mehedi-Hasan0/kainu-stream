import CollectiveCards from "./CollectiveCards";
import CollectiveHeader from "./CollectiveHeader";

export default function Collective() {
  return (
    <section className="bg-[#110d25] overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col gap-7 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
        <CollectiveHeader />
        <CollectiveCards />
      </div>
    </section>
  );
}
