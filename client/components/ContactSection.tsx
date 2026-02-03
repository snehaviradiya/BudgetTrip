import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const destinations = [
  "Bali, Indonesia",
  "Bangkok, Thailand",
  "Swiss Alps",
  "New Zealand",
  "Barcelona, Spain",
  "Tokyo, Japan",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", destination: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Start Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Let us help you plan your perfect budget trip
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Image/Info */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=500&fit=crop"
              alt="Travel Planning"
              className="w-full rounded-2xl shadow-lg"
            />

            {/* Contact Info */}
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    hello@budgettrip.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Travel Street, Adventure City, AC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground"
                />
              </div>

              {/* Destination Dropdown */}
              <div>
                <label htmlFor="destination" className="block text-sm font-bold text-foreground mb-2">
                  Interested Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select a destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors placeholder-muted-foreground resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary hover:opacity-90 text-primary-foreground font-bold rounded-lg transition-all transform hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
