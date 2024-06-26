import Bookapp from "@/components/Bookapp";
import Collective from "@/components/Collective.jsx/Collective";
import Contactus from "@/components/Cotact/Contactus";
import DiveIn from "@/components/DiveIn.jsx/DiveIn";
import Multichain from "@/components/Multichain";
import PlatForm from "@/components/PlatForm";
import SocialMediaGaming from "@/components/SocialMediaGaming";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Opportunities from "@/components/opportunities/Opportunities";
import Tournament from "@/components/tournament/Tournament";

export default function Home() {
  return (
    <main className="max-page-screen">
      <Banner />
      <SocialMediaGaming />
      <Features />
      <Opportunities />
      <Tournament />
      <PlatForm />
      <Bookapp />
      <DiveIn />
      <Collective />
      <Multichain />
      <Contactus />
      <Footer />
    </main>
  );
}
