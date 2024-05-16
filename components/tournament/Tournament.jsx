import TournamentCard from "./TournamentCard";
import TournamentText from "./TournamentText";

export default function Tournament() {
  return (
    <section className="bg-[url('/assets/images/cpre-tournament-bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-20 justify-center">
        {/* left side text */}
        <TournamentText />
        {/* right side card */}
        <TournamentCard />
      </div>
    </section>
  );
}
