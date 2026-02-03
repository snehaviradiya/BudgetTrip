import {
  Wallet,
  Calendar,
  Backpack,
  Lightbulb,
  MapPin,
  Clock,
} from "lucide-react";

const tips = [
  {
    id: 1,
    icon: Wallet,
    title: "Save Money While Traveling",
    description:
      "Use local transport, eat where locals eat, and book accommodations in advance for better deals",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Best Travel Seasons",
    description:
      "Travel during shoulder seasons for better prices and fewer crowds. Avoid peak holiday periods",
  },
  {
    id: 3,
    icon: Backpack,
    title: "Packing Essentials",
    description:
      "Pack light, wear layers, and bring universal adapters and travel documents in digital format",
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "Smart Travel Hacks",
    description:
      "Use flight comparison tools, book flights mid-week, and consider overnight buses to save on accommodation",
  },
  {
    id: 5,
    icon: MapPin,
    title: "Public Transport Tips",
    description:
      "Get travel passes for multiple days, learn basic transportation phrases, and download offline maps",
  },
  {
    id: 6,
    icon: Clock,
    title: "Time Management",
    description:
      "Plan your itinerary but leave room for spontaneity. Use travel days to rest and explore locally",
  },
];

export default function TravelTipsSection() {
  return (
    <section id="travel-tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Travel Tips & Hacks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pro tips to make your travels safer, cheaper, and more enjoyable
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className="bg-white border-2 border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg group"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
