import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const badges = [
    { key: 'badge_trademarks', icon: Sparkles },
    { key: 'badge_prep', icon: Rocket },
    { key: 'badge_qc', icon: Sparkles },
    { key: 'badge_logistics', icon: Rocket },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Rocket className="w-8 h-8 text-primary/30" />
        </div>
        <div className="absolute bottom-40 right-40 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-6 h-6 text-secondary/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in">
          {badges.map((badge) => (
            <Badge
              key={badge.key}
              variant="outline"
              className="glass-card px-4 py-2 text-sm flex items-center gap-2"
            >
              <badge.icon className="w-4 h-4" />
              {t(badge.key)}
            </Badge>
          ))}
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
          {t('hero_title')}
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {t('hero_subtitle')}
        </p>

        <div className="glass-card max-w-4xl mx-auto p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-foreground/70 leading-relaxed">
            {t('hero_description')}
          </p>
        </div>

        <Button
          size="lg"
          className="group text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {t('hero_cta')}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="mt-8 text-sm text-foreground/50 flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Sparkles className="w-4 h-4" />
          {t('hero_multilingual')}
        </p>
      </div>
    </section>
  );
};

export default Hero;
