import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code2,
      title: 'RESTful Banking APIs',
      description:
        'Complete suite of banking APIs for account management, payments, and transfers with 99.9% uptime SLA.',
      badge: 'API Infrastructure',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description:
        'SOC 2 Type II, PCI DSS Level 1, and FDIC insured with automated KYC/AML compliance workflows.',
      badge: 'Compliance',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description:
        'Instant payment processing and account updates with sub-100ms API response times globally.',
      badge: 'Performance',
    },
    {
      icon: Smartphone,
      title: 'Mobile SDK Integration',
      description:
        'Native iOS and Android SDKs with biometric authentication and offline transaction queuing.',
      badge: 'Mobile Banking',
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description:
        'Advanced transaction analytics, spending insights, and risk assessment tools with ML-powered fraud detection.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solutions',
      description:
        'Fully customizable banking interface with your branding, custom workflows, and personalized user experiences.',
      badge: 'Customization',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Support for 150+ currencies with real-time exchange rates and international wire transfers.',
      badge: 'Global Banking',
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description:
        'End-to-end encryption, tokenization, and multi-factor authentication with zero-trust architecture.',
      badge: 'Security',
    },
    {
      icon: Headphones,
      title: 'Developer Support',
      description:
        '24/7 technical support, comprehensive documentation, and dedicated integration specialists.',
      badge: 'Support',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Banking Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Banking APIs
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete banking infrastructure with enterprise-grade APIs, regulatory compliance, and
            white-label solutions for fintech innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to integrate banking services into your platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              API Documentation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Integration Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
