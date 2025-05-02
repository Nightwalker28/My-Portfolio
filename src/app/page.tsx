import { TechStackCard } from "./components/TechStackCard";
import { TechGlobeCard } from "./components/TechGlobe";
import  Hero  from "./components/Hero";


export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen w-full snap-start">
        <Hero />
      </section>

      <section className="h-screen w-full snap-start bg-black text-white flex items-center justify-center">
        <TechStackCard/>
        <TechGlobeCard/>
      </section>

      <section className="h-screen w-full snap-start bg-neutral-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Projects</h2>
      </section>
    </main>
  );
}

