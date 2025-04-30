import { TechStackCard } from "./components/TechStackCard";
import { TechGlobe } from "./components/TechGlobe";
import  Hero  from "./components/Hero";


export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Slide 1 */}
      <section className="h-screen w-full snap-start">
        <Hero />
      </section>

      {/* Slide 2 */}
      <section className="h-screen w-full snap-start bg-black text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Tech Stack</h2>
        <TechStackCard/>
      </section>

      {/* Slide 3 */}
      <section className="h-screen w-full snap-start bg-neutral-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>
    </main>
  );
}

