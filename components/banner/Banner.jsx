import BannerImg from "./BannerImg";
import StreamingDetails from "./StreamingDetails";

export default function Banner() {
  return (
    <section className="bg-[url('/assets/images/bg-banner-1.webp')] bg-no-repeat bg-cover bg-center pb-6 lg:pb-8 xl:pb-12 2xl:pb-16">
      <div className="main-container max-screen-width pt-28 md:pt-36 lg:pt-40 xl:pt-52 2xl:pt-64 flex flex-col-reverse md:flex-row gap-8 md:gap-20 justify-between">
        {/* left side data */}
        <div className="flex-1">
          <StreamingDetails />
        </div>
        {/* right side */}
        <BannerImg />
      </div>
    </section>
  );
}
