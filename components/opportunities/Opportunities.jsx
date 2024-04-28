import OpportunitiesCard from "./OpportunitiesCard";
import OpportunitiesHeader from "./OpportunitiesHeader";
import OppotunitiesSlider from "./OppotunitiesSlider";

export default function Opportunities() {
  return (
    <section className=" bg-[#0d0a1e] overflow-hidden">
      <div className="section-margin flex flex-col gap-8 md:gap-12 xl:gap-16">
        <OpportunitiesHeader />
        <OpportunitiesCard />
        <OppotunitiesSlider />
      </div>
    </section>
  );
}
