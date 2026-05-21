import PageHeader from "@/components/PageHeader";

const services = [
  {
    title: "Marketplace Operations Consulting",
    body: "We help e-commerce businesses structure and improve operational workflows, reporting processes, and marketplace coordination.",
  },
  {
    title: "Catalog & Listing Support",
    body: "We assist with product catalog organization, listing content coordination, product data review, and marketplace content workflows.",
  },
  {
    title: "Inventory Planning",
    body: "We support inventory tracking, replenishment planning, stock monitoring, and operational reporting.",
  },
  {
    title: "Fulfillment Coordination",
    body: "We assist with fulfillment workflows, shipment coordination, warehouse communication, and logistics documentation.",
  },
  {
    title: "Advertising & Performance Reporting",
    body: "We support performance reporting, advertising data review, campaign reporting workflows, and business insights.",
  },
  {
    title: "Operational Workflow Optimization",
    body: "We help businesses create repeatable processes, documentation, reporting structures, and operational controls.",
  },
];

const Services = () => (
  <>
    <PageHeader
      title="Services"
      subtitle="Operational consulting services for marketplace sellers and e-commerce operators."
    />
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl grid gap-8 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-xl font-semibold text-primary mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Services;