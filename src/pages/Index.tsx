import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PrepCenter from '@/components/PrepCenter';
import SuccessStories from '@/components/SuccessStories';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <PrepCenter />
        <SuccessStories />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
