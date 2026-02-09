import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Links } from "@/components/links";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-6 md:px-8">
      <Hero />

      <div className="mt-20 md:mt-32">
        <Projects />
      </div>

      <div className="mt-20 md:mt-32">
        <Links />
      </div>

      <Footer />
    </main>
  );
}
