import { useState } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MessageSquare, Phone, MapPin, Send, ArrowRight, Instagram, Linkedin, Twitter, Sparkles, Globe, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitToWeb3Forms } from "@/lib/web3forms";

const serviceOptions = [
  { value: "mc-services", label: "MC Services" },
  { value: "cx-training", label: "CX Training" },
  { value: "movie-date", label: "Movie Date with Angel" },
  { value: "general", label: "General Inquiry" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aloopurity2@gmail.com",
    href: "mailto:aloopurity2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 728 946 612",
    href: "tel:+254728946612",
  },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: null },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const { status, data: responseData } = await submitToWeb3Forms(data);

      if (status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. Angel will get back to you shortly.",
        });
        setIsSubmitted(true);
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: responseData.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* Global Success Indicator (Top Right) */}
      {isSubmitted && (
        <div className="fixed top-24 right-6 z-[100] animate-in slide-in-from-right duration-500">
          <div className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.5)] border border-white/20">
            <CheckCircle2 className="w-5 h-5 animate-pulse" />
            <span>Success! Message Sent</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium">
                Get in Touch
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something{" "}
              <span className="text-gradient-gold">Amazing</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Have a project in mind? Want to book my services? Or just want to
              say hello? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-card rounded-3xl border border-border/50 p-8 sm:p-12 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-center">
              {isSubmitted && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/50 rounded-full text-green-500 font-bold text-sm animate-bounce shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Success!
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-4">
                  {isSubmitted ? "Thank You!" : "Send a Message"}
                  <div className="h-px flex-1 bg-border/50" />
                </h2>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
                       <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <p className="text-2xl font-display font-medium text-foreground">
                      I have received your request and will get back to you shortly.
                    </p>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Thank you for your interest in Angel's Experience Hub. We've received your inquiry and our team will be in touch soon.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 rounded-full px-8"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden field for email subject */}
                    <input
                      type="hidden"
                      name="subject"
                      value={formData.service ? `${serviceOptions.find(o => o.value === formData.service)?.label || formData.service} - New Inquiry` : "New Experience Hub Inquiry"}
                    />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                          placeholder="+254 XXX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or event..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full h-14 text-lg font-bold uppercase tracking-widest shadow-lg shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display text-lg font-semibold mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-card border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-foreground">
                    Currently Available
                  </span>
                </div>
                <p className="text-muted-foreground">
                  I'm currently accepting bookings for events and training
                  sessions. Reach out to discuss your needs and secure your
                  preferred dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
