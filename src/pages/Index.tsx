import { LanguageProvider } from '@/contexts/LanguageContext';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PrepCenter from '@/components/PrepCenter';
import SuccessStories from '@/components/SuccessStories';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <StarryBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <PrepCenter />
          <SuccessStories />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
