import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_services', href: '#services' },
    { key: 'nav_prep', href: '#prep' },
    { key: 'nav_stories', href: '#stories' },
    { key: 'nav_contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          {t('hero_title')}
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={language === 'en' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('en')}
            className="text-xs"
          >
            EN
          </Button>
          <Button
            variant={language === 'ua' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('ua')}
            className="text-xs"
          >
            UA
          </Button>
          <Button
            variant={language === 'ru' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage('ru')}
            className="text-xs"
          >
            RU
          </Button>
          <a
            href="mailto:info@launchhub.us"
            className="ml-4 text-sm text-foreground/60 hover:text-foreground transition-colors hidden lg:block"
          >
            info@launchhub.us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
