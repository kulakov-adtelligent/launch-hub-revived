import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Package, Truck, FileText, TrendingUp, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Private Label & Wholesale Research',
      items: ['product validation', 'unit economics', 'competitor analysis'],
    },
    {
      icon: Package,
      title: 'Supplier Sourcing & Negotiation',
      items: ['factories & distributors', 'QC agent in China', 'price optimization'],
    },
    {
      icon: Truck,
      title: 'Logistics to U.S. (DDP)',
      items: ['import handling', 'timeline control', 'preferred partners'],
    },
    {
      icon: FileText,
      title: 'Listing Creation',
      items: ['photo + studio + 3D', 'A+ content', 'SEO & conversion copy'],
    },
    {
      icon: TrendingUp,
      title: 'PPC & Launch',
      items: ['campaign setup', 'scaling with profit guards'],
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      items: ['dashboards', 'margins & inventory control'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          What we do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
