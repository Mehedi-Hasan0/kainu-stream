import ContactForm from "./ContactForm";
import Download from "./Download";

export default function Contactus() {
  return (
    <section className="bg-[#110e21] overflow-hidden">
      <div className="main-container max-screen-width section-margin">
        <ContactForm />
        <Download />
      </div>
    </section>
  );
}
