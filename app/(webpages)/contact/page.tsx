import ContactForm from "@/app/components/Contact/ContactForm";
import ContactLocations from "@/app/components/Contact/ContactLocations";
import { FAQ } from "@/app/components/FAQ/FAQ";
import Service from "@/app/components/Service/Service";

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <ContactLocations />
      <FAQ />
      <Service
        tag="READY TO INVEST SMARTER?"
        description="Join OROX and access AI-powered, risk-aware strategies—built to cut through the noise and focus on long-term performance."
      />
    </main>
  );
}
