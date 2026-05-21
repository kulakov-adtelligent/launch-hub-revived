import PageHeader from "@/components/PageHeader";

const About = () => (
  <>
    <PageHeader
      title="About Launch Hub LLC"
      subtitle="A United States-based marketplace operations and e-commerce consulting company."
    />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl space-y-6 text-foreground/90 leading-relaxed">
        <p>
          Launch Hub LLC is a United States-based marketplace operations and e-commerce
          consulting company. We help e-commerce businesses improve operational efficiency,
          catalog workflows, inventory planning, fulfillment coordination, and performance reporting.
        </p>
        <p>
          Our approach is built around structured processes, responsible data handling,
          policy-conscious operations, and long-term marketplace growth. We work with
          sellers who want a dependable operations partner — not shortcuts.
        </p>
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          {[
            { h: "Structured", p: "Repeatable processes and clear documentation across every workflow." },
            { h: "Responsible", p: "Policy-conscious operations and disciplined data handling." },
            { h: "Long-term", p: "Focused on durable marketplace growth, not short-term tactics." },
          ].map((b) => (
            <div key={b.h} className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-primary mb-2">{b.h}</h3>
              <p className="text-sm text-muted-foreground">{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;