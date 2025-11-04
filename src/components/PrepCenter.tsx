import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Package, CheckCircle, Box, Archive, Clock, Award, FileCheck, Warehouse } from 'lucide-react';

const PrepCenter = () => {
  const features = [
    { icon: Video, label: 'Video receiving reports' },
    { icon: Package, label: 'Bundling & labeling' },
    { icon: CheckCircle, label: 'Quality control inspection' },
    { icon: Box, label: 'FBA prep services' },
    { icon: Archive, label: 'Inventory management' },
    { icon: Clock, label: 'Fast turnaround times' },
  ];

  const infrastructure = [
    { icon: Award, label: '10+ registered U.S. trademarks' },
    { icon: FileCheck, label: 'Exclusive supplier contracts' },
    { icon: Warehouse, label: 'Own prep center in Orlando' },
  ];

  return (
    <section id="prep" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Orlando Prep Center
          </h2>
          <p className="text-xl text-foreground/70">
            Our own warehouse facility in Orlando, Florida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.label}
              className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-background" />
                </div>
                <p className="text-foreground/80 font-medium">{feature.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">
            Real infrastructure, not just promises
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {infrastructure.map((item, index) => (
              <Badge
                key={item.label}
                variant="outline"
                className="glass-card px-6 py-3 text-base flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepCenter;
