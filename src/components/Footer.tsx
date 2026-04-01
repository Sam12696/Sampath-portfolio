
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden" style={{ borderTop: '1px solid rgba(0,229,255,0.08)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 mb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold">
              <span className="text-foreground">SN</span>
              <span className="cyan-text">.</span>
              <span className="text-foreground">ARCHITECT</span>
            </a>
            <p className="text-muted-foreground mt-2 text-sm max-w-xs">
              Building scalable data systems and cloud-native architectures that drive business decisions.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { icon: Mail, href: 'mailto:sampathnanamcharla1@gmail.com', label: 'Email' },
              { icon: Github, href: 'https://github.com/Sam12696', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sampathnanamcharla', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-200 hover:text-foreground"
                style={{ background: 'hsl(224 39% 10%)', border: '1px solid rgba(0,229,255,0.1)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,255,0.4)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,229,255,0.1)'; }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Sampath Nanamcharla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
