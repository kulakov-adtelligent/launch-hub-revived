import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  ClipboardList,
  Boxes,
  Truck,
  BarChart3,
  Workflow,
  ShieldCheck,
  Lock,
  KeyRound,
  AlertTriangle,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Marketplace Operations Consulting", desc: "Structured operational guidance for marketplace sellers." },
  { icon: ClipboardList, title: "Catalog & Listing Support", desc: "Catalog organization and listing content coordination." },
  { icon: Boxes, title: "Inventory Planning", desc: "Replenishment planning, stock monitoring, and reporting." },
  { icon: Truck, title: "Fulfillment Coordination", desc: "Shipment workflows, warehouse communication, logistics docs." },
  { icon: BarChart3, title: "Advertising & Performance Reporting", desc: "Campaign reporting workflows and business insights." },
  { icon: Workflow, title: "Operational Workflow Optimization", desc: "Repeatable processes, documentation, and operational controls." },
];

const steps = [
  "Understand business goals",
  "Review operational workflows",
  "Define support scope",
  "Implement structured processes",
  "Monitor performance and reporting",
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-muted to-background border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-28 max-w-5xl">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">
            Launch Hub LLC
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight">
            Marketplace Operations & E-commerce Growth Consulting
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Launch Hub LLC helps e-commerce businesses improve marketplace operations through
            catalog support, inventory planning, fulfillment coordination, advertising reporting,
            and operational workflow optimization.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View Services
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
            We support marketplace sellers with policy-conscious operational processes,
            secure data handling, and structured business workflows.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Launch Hub LLC is a marketplace operations consulting company focused on
            operational support, reporting, catalog coordination, fulfillment workflows,
            and advertising analytics. We work alongside e-commerce teams to bring structure,
            documentation, and measurable consistency to day-to-day marketplace operations.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Services Overview</h2>
            <p className="text-muted-foreground">
              A focused set of services designed to support marketplace sellers and e-commerce operators.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition-colors">
                <s.icon className="text-secondary mb-4" size={28} />
                <h3 className="font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="text-secondary font-medium hover:underline inline-flex items-center gap-1">
              Learn more about our services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Compliance & Data Protection</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Launch Hub LLC follows structured security practices designed to protect client and
            marketplace information.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Role-Based Access", desc: "Access is limited based on business need." },
              { icon: Lock, title: "Least Privilege", desc: "Personnel receive only the access required." },
              { icon: KeyRound, title: "Secure Credentials", desc: "MFA where supported and managed credentials." },
              { icon: AlertTriangle, title: "Incident Response", desc: "Defined detection and response procedures." },
            ].map((c) => (
              <div key={c.title} className="border border-border rounded-lg p-6">
                <c.icon className="text-secondary mb-3" size={24} />
                <h3 className="font-semibold text-primary mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">How We Work</h2>
          <ol className="grid gap-6 md:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step} className="bg-card border border-border rounded-lg p-5">
                <div className="text-secondary font-bold text-sm mb-2">STEP {i + 1}</div>
                <p className="text-primary font-medium text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-xl p-10 md:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to improve your marketplace operations?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Contact Launch Hub LLC to discuss operational consulting tailored to your e-commerce business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
