import mockupHero from "@/assets/mockup-hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-start pt-0" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      {/* Falling sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const left = Math.random() * 100;
          const duration = 4 + Math.random() * 6;
          const delay = Math.random() * 8;
          const size = 1 + Math.random() * 2;
          return (
            <div
              key={i}
              className="absolute bg-yellow rounded-full"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0,
                animation: `falling ${duration}s ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 py-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-1 text-primary-foreground text-center md:text-left">
            <p className="font-heading text-2xl md:text-3xl tracking-widest mb-3 opacity-80">
              ANTOLOGIA 2026
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 whitespace-nowrap">
              UM NOVO CHAMADO<br />A TODOS OS POETAS.
            </h1>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow leading-tight mb-8 whitespace-nowrap">
              LANÇAMENTO NA BIENAL<br />SÃO PAULO 2026.
            </h2>
            <a
              href="#inscricao"
              className="inline-block bg-yellow text-navy font-heading text-2xl md:text-3xl font-bold py-5 px-14 hover:bg-yellow/90 transition-colors rounded-full"
            >
              INSCREVA-SE AGORA
            </a>
          </div>
          <div className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[600px] xl:w-[700px] md:-ml-16 lg:-ml-24">
            <img
              src={mockupHero}
              alt="Livro Poemas de Amor para Curar o Mundo - Volume 2"
              className="w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
