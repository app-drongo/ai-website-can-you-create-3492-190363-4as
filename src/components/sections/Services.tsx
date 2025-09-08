import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  CreditCard,
  Shield,
  Zap,
  Building2,
  Users,
  BarChart3,
  Lock,
  Globe,
  Smartphone,
} from 'lucide-react';

export default function ServicesListDescriptions() {
  const services = [
    {
      id: 'embedded-banking',
      title: 'Embedded Banking APIs',
      description: 'Integrate full banking capabilities directly into your platform',
      longDescription:
        'Transform your fintech application with our comprehensive embedded banking infrastructure. Our APIs enable seamless account creation, payment processing, and financial services integration without the complexity of traditional banking partnerships.',
      icon: CreditCard,
      benefits: [
        'Real-time account provisioning and KYC',
        'Multi-currency payment processing',
        'Automated compliance and reporting',
        'White-label banking experience',
      ],
      pricing: 'Starting at $2,500/month + transaction fees',
      timeline: '2-4 weeks integration',
      featured: true,
      badge: 'Core Platform',
    },
    {
      id: 'payment-infrastructure',
      title: 'Payment Infrastructure',
      description: 'Enterprise-grade payment processing and settlement',
      longDescription:
        'Power your digital business with our robust payment infrastructure. Handle domestic and international transfers, instant settlements, and multi-rail payment routing with 99.9% uptime guarantee.',
      icon: Zap,
      benefits: [
        'Instant ACH and wire transfers',
        'Real-time payment rails (RTP/FedNow)',
        'Cross-border payment optimization',
        'Fraud detection and prevention',
      ],
      pricing: '0.25% per transaction',
      timeline: '1-2 weeks setup',
    },
    {
      id: 'compliance-suite',
      title: 'Regulatory Compliance Suite',
      description: 'Automated compliance monitoring and reporting',
      longDescription:
        'Stay compliant with evolving financial regulations through our automated compliance suite. We handle BSA/AML monitoring, OFAC screening, and regulatory reporting so you can focus on growth.',
      icon: Shield,
      benefits: [
        'Real-time transaction monitoring',
        'Automated SAR and CTR filing',
        'OFAC and sanctions screening',
        'Audit trail and documentation',
      ],
      pricing: 'Starting at $1,200/month',
      timeline: '1 week implementation',
    },
    {
      id: 'digital-banking',
      title: 'Digital Banking Platform',
      description: 'Complete white-label banking solution',
      longDescription:
        'Launch your own digital bank with our comprehensive platform. Includes mobile apps, web dashboard, card management, and all essential banking features with your brand identity.',
      icon: Smartphone,
      benefits: [
        'iOS and Android mobile applications',
        'Web-based customer portal',
        'Virtual and physical card issuance',
        'Account management and statements',
      ],
      pricing: 'Custom enterprise pricing',
      timeline: '6-12 weeks deployment',
      badge: 'Enterprise',
    },
    {
      id: 'treasury-management',
      title: 'Treasury & Liquidity Management',
      description: 'Optimize cash flow and liquidity across your platform',
      longDescription:
        "Maximize your platform's financial efficiency with our treasury management tools. Real-time liquidity monitoring, automated cash positioning, and yield optimization for idle funds.",
      icon: BarChart3,
      benefits: [
        'Real-time cash position monitoring',
        'Automated sweep and concentration',
        'Yield optimization strategies',
        'Risk management and hedging',
      ],
      pricing: '0.15% AUM annually',
      timeline: '2-3 weeks setup',
    },
    {
      id: 'risk-analytics',
      title: 'Risk Analytics & Monitoring',
      description: 'Advanced risk assessment and fraud prevention',
      longDescription:
        'Protect your platform and customers with our AI-powered risk analytics. Machine learning models detect suspicious patterns, assess credit risk, and prevent fraud in real-time.',
      icon: Lock,
      benefits: [
        'ML-powered fraud detection',
        'Credit risk scoring models',
        'Behavioral analytics and alerts',
        'Regulatory risk assessment',
      ],
      pricing: 'Starting at $800/month',
      timeline: '1-2 weeks integration',
      badge: 'AI-Powered',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Banking Infrastructure Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Banking Infrastructure
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Modern Fintech
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive banking-as-a-service solutions to power your fintech innovation with
            enterprise-grade security and compliance
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">{service.pricing}</span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Integration:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                        >
                          Start Integration
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="size-6 text-primary" />
            <Badge variant="outline">FDIC Insured • SOC 2 Certified</Badge>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Ready to Launch Your Banking Platform?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 500+ fintech companies using BankConnect's infrastructure. Get sandbox access and
            technical documentation to start building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Open Account
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline">
              API Documentation
              <Globe className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
