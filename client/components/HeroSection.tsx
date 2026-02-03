export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Explore More, Spend Less
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light animate-fade-in">
          Discover amazing budget trips for students and travelers around the world
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="#destinations"
            className="px-8 py-4 bg-primary hover:opacity-90 text-primary-foreground font-bold rounded-full transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Explore Destinations
          </a>
          <a
            href="#budget-plans"
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full border-2 border-white transition-all transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto"
          >
            View Budget Plans
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-sm font-medium">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
