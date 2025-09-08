import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Building2,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Banking APIs',
      links: [
        { name: 'Account Management', href: '/apis/accounts' },
        { name: 'Payment Processing', href: '/apis/payments' },
        { name: 'Card Issuance', href: '/apis/cards' },
        { name: 'KYC & Compliance', href: '/apis/kyc' },
        { name: 'Transaction History', href: '/apis/transactions' },
        { name: 'API Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Fintech Startups', href: '/solutions/fintech' },
        { name: 'Digital Wallets', href: '/solutions/wallets' },
        { name: 'Lending Platforms', href: '/solutions/lending' },
        { name: 'Investment Apps', href: '/solutions/investment' },
        { name: 'Embedded Finance', href: '/solutions/embedded' },
        { name: 'White Label Banking', href: '/solutions/white-label' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Developer Hub', href: '/developers' },
        { name: 'Integration Guides', href: '/guides' },
        { name: 'Sandbox Environment', href: '/sandbox' },
        { name: 'Regulatory Updates', href: '/regulatory' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'SOC 2 Type II', href: '/compliance/soc2' },
        { name: 'PCI DSS Level 1', href: '/compliance/pci' },
        { name: 'GDPR Compliance', href: '/compliance/gdpr' },
        { name: 'Banking Regulations', href: '/compliance/banking' },
        { name: 'Security Framework', href: '/security' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/bankconnect' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/bankconnect' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/bankconnect' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Building2 className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">BankConnect</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Powering the future of embedded finance with enterprise-grade banking APIs. Trusted
                by 500+ fintech companies to build compliant financial products faster.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">partnerships@bankconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 555-BANK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Financial District, New York, NY</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Developer Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get API updates, regulatory news, and integration tips. Unsubscribe anytime.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="text-xs text-muted-foreground">PCI DSS Level 1</div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 BankConnect. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">FDIC Partner Bank</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sla"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Service Level Agreement
            </Link>
            <Link
              href="/responsible-disclosure"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Security Disclosure
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Technical Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
