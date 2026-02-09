
import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success toast
    toast({
      title: "Message sent successfully",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      
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
                  <MessageSquare size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
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
                    className="w-full px-4 py-2.5 bg-white/50 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
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
                    className="w-full px-4 py-2.5 bg-white/50 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
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
                    className="w-full px-4 py-2.5 bg-white/50 border border-border rounded-lg focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
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
