import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Package, Truck, FileText, TrendingUp, BarChart } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      titleKey: 'service1_title',
      items: ['service1_item1', 'service1_item2', 'service1_item3'],
    },
    {
      icon: Package,
      titleKey: 'service2_title',
      items: ['service2_item1', 'service2_item2', 'service2_item3'],
    },
    {
      icon: Truck,
      titleKey: 'service3_title',
      items: ['service3_item1', 'service3_item2', 'service3_item3'],
    },
    {
      icon: FileText,
      titleKey: 'service4_title',
      items: ['service4_item1', 'service4_item2', 'service4_item3'],
    },
    {
      icon: TrendingUp,
      titleKey: 'service5_title',
      items: ['service5_item1', 'service5_item2'],
    },
    {
      icon: BarChart,
      titleKey: 'service6_title',
      items: ['service6_item1', 'service6_item2'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t('services_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.titleKey}
              className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {t(item)}
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
