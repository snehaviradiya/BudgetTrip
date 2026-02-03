import { Check } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Weekend Trip",
    price: 299,
    duration: "2-3 days",
    description: "Perfect for a quick getaway",
    features: ["Accommodation (2 nights)", "Local transport pass", "2 meals daily", "Walking tour"],
    color: "primary",
  },
  {
    id: 2,
    name: "Student Saver Pack",
    price: 599,
    duration: "5-7 days",
    description: "The most popular choice",
    features: [
      "Accommodation (5 nights)",
      "All transport included",
      "3 meals daily",
      "Guided tours",
      "Activity included",
    ],
    color: "accent",
    highlighted: true,
  },
  {
    id: 3,
    name: "Backpacker Plan",
    price: 999,
    duration: "10-14 days",
    description: "Maximum adventure & exploration",
    features: [
      "Accommodation (10 nights)",
      "Premium transport",
      "All meals included",
      "Multiple guided tours",
      "Adventure activities",
      "Travel insurance",
    ],
    color: "primary",
  },
];

export default function BudgetPlansSection() {
  return (
    <section id="budget-plans" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Budget-Friendly Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your travel style and budget
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                plan.highlighted
                  ? "ring-2 ring-accent bg-white shadow-xl"
                  : "bg-white shadow-lg"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="bg-accent text-accent-foreground text-center py-2 font-bold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      per person
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.duration}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 font-bold rounded-lg transition-all transform hover:scale-105 mb-8 ${
                    plan.highlighted
                      ? "bg-accent hover:opacity-90 text-accent-foreground"
                      : "bg-primary hover:opacity-90 text-primary-foreground"
                  }`}
                >
                  Book Now
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
