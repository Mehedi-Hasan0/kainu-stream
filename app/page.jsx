import SocialMediaGaming from "@/components/SocialMediaGaming";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Opportunities from "@/components/opportunities/Opportunities";

export default function Home() {
  return (
    <main>
      <Banner />
      <SocialMediaGaming />
      <Features />
      <Opportunities />
    </main>
  );
}
