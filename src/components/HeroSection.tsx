import mockupHero from "@/assets/mockup-hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.6,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-primary-foreground text-center md:text-left">
            <p className="font-heading text-2xl md:text-3xl tracking-widest mb-4 opacity-80">
              ANTOLOGIA 2026
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4">
              UM NOVO CHAMADO<br />AOS POETAS.
            </h1>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-yellow leading-tight mb-10">
              LANÇAMENTO<br />NA BIENAL<br />SÃO PAULO 2026.
            </h2>
            <a
              href="#inscricao"
              className="inline-block bg-yellow text-navy font-heading text-2xl md:text-3xl font-bold py-5 px-14 border-2 border-navy hover:bg-yellow/90 transition-colors rounded-md"
            >
              INSCREVA-SE AGORA
            </a>
          </div>
          <div className="flex-shrink-0 w-72 md:w-96 lg:w-[500px]">
            <img
              src={mockupHero}
              alt="Livro Poemas de Amor para Curar o Mundo - Volume II"
              className="w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
