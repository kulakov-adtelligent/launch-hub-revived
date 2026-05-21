import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold mb-3">Launch Hub LLC</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Marketplace operations and e-commerce growth consulting for serious sellers.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Email: <a href="mailto:info@launchhub.us" className="hover:text-secondary">info@launchhub.us</a></li>
            <li>Phone: <a href="tel:+17865570600" className="hover:text-secondary">+1 786-557-0600</a></li>
            <li>Location: United States</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-secondary">About</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-secondary">Terms of Service</Link></li>
            <li><Link to="/data-protection" className="hover:text-secondary">Data Protection & Security</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 text-xs text-primary-foreground/60 text-center">
          © {year} Launch Hub LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
