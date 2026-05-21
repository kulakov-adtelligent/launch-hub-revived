import { useState } from "react";
import { z } from "zod";
import PageHeader from "@/components/PageHeader";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  serviceInterest: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const services = [
  "Marketplace Operations Consulting",
  "Catalog & Listing Support",
  "Inventory Planning",
  "Fulfillment Coordination",
  "Advertising & Performance Reporting",
  "Operational Workflow Optimization",
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({ title: "Message sent", description: "We'll get back to you shortly." });
    }, 600);
  };

  return (
    <>
      <PageHeader title="Contact" subtitle="Tell us about your business and how we can help." />
      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-3 max-w-6xl">
          <aside className="space-y-6">
            <div className="flex gap-3">
              <Mail className="text-secondary mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:info@launchhub.us" className="text-primary font-medium hover:underline">
                  info@launchhub.us
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="text-secondary mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+17865570600" className="text-primary font-medium hover:underline">
                  +1 786-557-0600
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="text-secondary mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="text-primary font-medium">United States</div>
              </div>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="lg:col-span-2 bg-card border border-border rounded-lg p-6 md:p-8 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Name *" required />
              <Field name="company" label="Company" />
              <Field name="email" label="Email *" type="email" required />
              <Field name="phone" label="Phone" type="tel" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Service interest</label>
              <select
                name="serviceInterest"
                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="justify-self-start px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

const Field = ({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
    <input
      name={name}
      type={type}
      required={required}
      maxLength={255}
      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
    />
  </div>
);

export default Contact;