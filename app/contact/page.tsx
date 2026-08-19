import ContactHero from "../components/Contact/ContactHero";
import ContactInformation from "../components/Contact/ContactInformation";
import ContactEnquiry from "../components/Contact/ContactEnquiry";
import ContactLocations from "../components/Contact/ContactLocations";
import ContactCTA from "../components/Contact/ContactCTA";


export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInformation />

      <ContactEnquiry />

      <ContactLocations />

      <ContactCTA />
    </main>
  );
}