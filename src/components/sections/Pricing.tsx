import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Code, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for fintech startups and MVP development',
      price: 'Free',
      period: '',
      badge: null,
      icon: Code,
      features: [
        '1,000 API calls/month',
        'Sandbox environment',
        'Basic KYC verification',
        'ACH transfers',
        'Developer documentation',
        'Community support',
        'Test card issuance',
        'Webhook notifications',
      ],
      cta: 'Start Building',
      popular: false,
    },
    {
      name: 'Growth',
      description: 'Ideal for scaling digital businesses and platforms',
      price: '$299',
      period: '/month',
      badge: 'Most Popular',
      icon: Zap,
      features: [
        '50,000 API calls/month',
        'Production environment',
        'Advanced KYC/AML compliance',
        'Wire transfers & RTP',
        'Multi-currency support',
        'Priority technical support',
        'Custom card programs',
        'Real-time fraud monitoring',
        'Regulatory reporting',
        'White-label solutions',
      ],
      cta: 'Open Account',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring custom infrastructure',
      price: 'Custom',
      period: '',
      badge: 'FDIC Insured',
      icon: Building,
      features: [
        'Unlimited API calls',
        'Dedicated infrastructure',
        'Full regulatory compliance',
        'Custom integration support',
        '24/7 dedicated support',
        'SLA guarantees (99.9%)',
        'Advanced security controls',
        'Custom reporting dashboard',
        'Dedicated account manager',
        'Regulatory consultation',
      ],
      cta: 'Schedule Demo',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Shield className="size-3 mr-2" />
            Banking Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Fintech
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              With Confidence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the banking infrastructure that grows with your business. FDIC insured, SOC 2
            compliant, and built for developers.
          </p>

          {/* Trust Indicators */}
          <div className="inline-flex items-center gap-6 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium text-foreground">$2.1B+</div>
              <div className="text-xs text-muted-foreground">Assets Under Management</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-sm font-medium text-foreground">99.9%</div>
              <div className="text-xs text-muted-foreground">API Uptime</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-sm font-medium text-foreground">SOC 2</div>
              <div className="text-xs text-muted-foreground">Type II Certified</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    <Shield className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                )}

                <div className="mb-4">
                  <plan.icon className="size-8 mx-auto text-primary" />
                </div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {plan.name === 'Growth' && (
                  <p className="text-xs text-muted-foreground mt-2">
                    + $0.10 per additional 1K API calls
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Growth' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees
                  </p>
                )}

                {plan.name === 'Developer' && (
                  <p className="text-center text-sm text-muted-foreground">
                    No credit card required • Instant access
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Ready to embed banking into your platform?</h3>
          <p className="text-muted-foreground mb-6">
            Join 500+ fintech companies using BankConnect's infrastructure to power their financial
            products. Get started with our comprehensive API documentation and sandbox environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Code className="size-4 mr-2" />
              View API Documentation
            </Button>
            <Button variant="outline" size="lg">
              Investment Guide
            </Button>
          </div>

          {/* Compliance Footer */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              BankConnect is a registered service provider. Banking services provided by our
              FDIC-insured partner banks. All deposits are FDIC insured up to $250,000 per
              depositor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
