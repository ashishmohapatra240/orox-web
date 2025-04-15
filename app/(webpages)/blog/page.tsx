import BlogHero from "@/app/components/Blog/BlogHero";
import { BlogList } from "@/app/components/Blog/BlogList";
import Service from "@/app/components/Service/Service";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogList />
      <Service
        tag="READY TO INVEST SMARTER?"
        description="Join OROX and access AI-powered, risk-aware strategies—built to cut through the noise and focus on long-term performance."
      />
    </main>
  );
}
