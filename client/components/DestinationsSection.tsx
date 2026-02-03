import { MapPin, DollarSign } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Bali Beach Paradise",
    description: "Crystal clear waters, white sand beaches, and vibrant nightlife",
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=600&h=400&fit=crop",
    budget: "Under $150",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    description: "Stunning mountain peaks, hiking trails, and alpine villages",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    budget: "Under $200",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bangkok City Escape",
    description: "Street food, temples, markets, and incredible culture",
    image:
      "https://images.unsplash.com/photo-1540959375944-7049f642e9d8?w=600&h=400&fit=crop",
    budget: "Under $100",
    rating: 4.7,
  },
  {
    id: 4,
    name: "New Zealand Wilderness",
    description: "Breathtaking landscapes, adventure sports, and natural wonders",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    budget: "Under $180",
    rating: 4.9,
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore incredible places around the world that won't break the bank
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full flex items-center gap-1 font-semibold text-sm">
                  <DollarSign className="h-4 w-4" />
                  {dest.budget}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold text-foreground">
                      {dest.rating}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {dest.description}
                </p>

                <button className="w-full py-2 bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-lg transition-all transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
