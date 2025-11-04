import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SuccessStories = () => {
  const stories = [
    {
      title: 'Private Label Success',
      challenge: 'Client needed to launch a new private label product in competitive home goods category with limited budget and no Amazon experience.',
      approach: 'Conducted thorough market research, identified profitable niche, sourced quality supplier in China with our QC agent, created optimized listings and launched strategic PPC campaigns.',
      result: 'Successfully launched trademark, achieved $25K monthly revenue within 6 months with 18% profit margins.',
      metrics: [
        { label: 'Revenue', value: '$25K/mo' },
        { label: 'Profit', value: '18%' },
        { label: 'Launch', value: '6 months' },
        { label: 'ROI', value: '340%' },
      ],
    },
    {
      title: 'Wholesale Scaling',
      challenge: 'Established seller wanted to expand into wholesale but lacked supplier connections and negotiation experience.',
      approach: 'Leveraged our supplier network, negotiated exclusive wholesale contracts, optimized inventory management and scaling strategies through our prep center.',
      result: 'Secured 3 exclusive wholesale contracts, doubled monthly revenue while reducing operational overhead by 30%.',
      metrics: [
        { label: 'Contracts', value: '3 Exclusive' },
        { label: 'Revenue', value: '2x Growth' },
        { label: 'Savings', value: '30%' },
        { label: 'Time', value: '4 months' },
      ],
    },
    {
      title: 'Fulfillment Optimization',
      challenge: 'Multi-brand seller struggled with inventory management, prep delays, and rising fulfillment costs across multiple products.',
      approach: 'Consolidated all prep operations to our Orlando facility, implemented video receiving reports, optimized bundling and labeling processes.',
      result: 'Reduced prep time by 60%, cut fulfillment costs by 40%, improved inventory accuracy to 99.8%.',
      metrics: [
        { label: 'Prep Time', value: '-60%' },
        { label: 'Costs', value: '-40%' },
        { label: 'Accuracy', value: '99.8%' },
        { label: 'Efficiency', value: '+150%' },
      ],
    },
  ];

  return (
    <section id="stories" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Success Stories
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real results from real clients who trusted us to transform their Amazon business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <Card
              key={story.title}
              className="glass-card hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-foreground/70 text-sm">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Approach:</h4>
                  <p className="text-foreground/70 text-sm">{story.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                  <p className="text-foreground/70 text-sm">{story.result}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {story.metrics.map((metric) => (
                      <div key={metric.label} className="glass-card p-3 text-center">
                        <div className="text-lg font-bold gradient-text">{metric.value}</div>
                        <div className="text-xs text-foreground/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-foreground/80 font-medium">
            Ready to become our next success story?
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
