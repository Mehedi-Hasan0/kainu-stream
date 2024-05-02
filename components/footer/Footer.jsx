import FooterLinks from "./FooterLinks";
import FooterSocialLink from "./FooterSocialLink";

export default function Footer() {
  return (
    <footer className="bg-[#0e0a22] overflow-hidden">
      <div className="main-container max-screen-width section-margin">
        <FooterLinks />
      </div>
      <FooterSocialLink />
    </footer>
  );
}
