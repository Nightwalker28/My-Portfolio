import { TechStackCard } from "./components/TechStackCard";
import { TechGlobe } from "./components/TechGlobe";
import {Card} from "./components/Cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white">
      <div className="w-full max-w-6xl flex justify-center items-center">
        <TechStackCard />
        <TechGlobe/>
      </div>
    </main>
  );
}
