import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Pendekatan } from '@/components/sections/Pendekatan';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div id="atas" className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Pendekatan />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
