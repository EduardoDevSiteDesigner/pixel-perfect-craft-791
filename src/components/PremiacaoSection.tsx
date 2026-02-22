import premiacaoPhoto1 from "@/assets/premiacao-photo1.jpg";
import premiacaoPhoto2 from "@/assets/premiacao-photo2.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PremiacaoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      {/* Falling sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
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

      <div ref={ref} className={`container mx-auto px-4 relative z-10 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl font-black text-primary-foreground mb-8">PREMIAÇÃO</h2>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-4 border-primary-foreground rounded-lg overflow-hidden shadow-xl">
              <img src={premiacaoPhoto1} alt="Autora na Bienal" className="w-full h-72 md:h-[500px] object-cover" />
            </div>
            <div className="border-4 border-primary-foreground rounded-lg overflow-hidden shadow-xl">
              <img src={premiacaoPhoto2} alt="Autoras na Bienal" className="w-full h-72 md:h-[500px] object-cover" />
            </div>
          </div>
        </div>

        <div className="text-primary-foreground p-8 md:p-12 mb-8">
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            O AUTOR(A) VENCEDOR(A)
          </h3>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-yellow mb-6">
            GANHARÁ A PUBLICAÇÃO DE SEU LIVRO PELA ARTICULE
          </p>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-4xl" style={{ textAlign: 'justify', hyphens: 'auto' }}>
            Todos os autores participantes da antologia 'POEMAS DE AMOR PARA CURAR O MUNDO - volume 2' estarão automaticamente concorrendo a seguinte premiação: A Editora Articule publicará o livro do autor que conquistar o primeiro lugar entre os poemas da antologia. O livro será produzido no formato impresso e terá cerimônia de lançamento organizada pela editora Articule.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiacaoSection;
