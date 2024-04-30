import DiveInBanner from "./DiveInBanner";
import DiveInHeader from "./DiveInHeader";

export default function DiveIn() {
  return (
    <section className="bg-[#0e0a22] overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col gap-7 sm:gap-9 md:gap-11 xl:gap-14">
        <DiveInHeader />
        <DiveInBanner />
      </div>
    </section>
  );
}
