import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { AnimatedBlobs } from "@/components/AnimatedBlobs";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <AnimatedBlobs />
      <ParticleBackground />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main id="home">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Abdelrahman Mohamed
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
