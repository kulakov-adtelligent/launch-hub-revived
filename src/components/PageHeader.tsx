const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <section className="bg-muted border-b border-border">
    <div className="container mx-auto px-4 py-16 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-3xl">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHeader;