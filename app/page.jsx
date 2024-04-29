import SocialMediaGaming from "@/components/SocialMediaGaming";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Opportunities from "@/components/opportunities/Opportunities";
import Tournament from "@/components/tournament/Tournament";

export default function Home() {
  return (
    <main>
      <Banner />
      <SocialMediaGaming />
      <Features />
      <Opportunities />
      <Tournament />
    </main>
  );
}
