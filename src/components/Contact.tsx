
import { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mojplzyn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent successfully",
          description: "Thank you for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or email me directly.",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
      });
    }

    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">


      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="section-heading">Get In Touch</h2>
            <p className="section-subheading">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a 
                    href="mailto:sampathnanamcharla1@gmail.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    sampathnanamcharla1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Github size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">GitHub</h3>
                  <a
                    href="https://github.com/Sam12696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    github.com/Sam12696
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/sampathnanamcharla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    linkedin.com/in/sampathnanamcharla
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg transition-all text-foreground" style={{ background: "hsl(222 30% 14%)", border: "1px solid rgba(0,229,255,0.15)" }}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg transition-all text-foreground" style={{ background: "hsl(222 30% 14%)", border: "1px solid rgba(0,229,255,0.15)" }}
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg transition-all text-foreground" style={{ background: "hsl(222 30% 14%)", border: "1px solid rgba(0,229,255,0.15)" }}
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full primary-button flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing</>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
