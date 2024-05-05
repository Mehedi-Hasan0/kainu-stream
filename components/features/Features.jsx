import FeaturesCard from "./FeaturesCard";
import FeaturesHeader from "./FeaturesHeader";

export default function Features() {
  return (
    <section className="main-container max-screen-width section-margin overflow-hidden 2xl:px-44">
      <div className="flex flex-col justify-center items-center">
        <FeaturesHeader />
        <FeaturesCard />
      </div>
    </section>
  );
}
