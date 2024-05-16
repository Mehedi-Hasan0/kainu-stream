import PlatFormText from "./PlatFormText";
import PlatFormCard from "./PlatFormCard";

export default function PlatForm() {
  return (
    <section className="bg-[url('/assets/images/features-platform-bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-20 justify-center">
        {/* left side text */}
        <PlatFormText />
        {/* right side card */}
        <PlatFormCard />
      </div>
    </section>
  );
}
