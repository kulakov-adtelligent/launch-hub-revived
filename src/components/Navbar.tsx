const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Prep Center', href: '#prep' },
    { label: 'Success Stories', href: '#stories' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          Launch Hub
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:info@launchhub.us"
          className="text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          info@launchhub.us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
