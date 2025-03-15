import BlogHero from "@/app/components/Blog/BlogHero";
import { BlogList } from "@/app/components/Blog/BlogList";
import Service from "@/app/components/Service/Service";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogList />
      <Service />
    </main>
  );
}
