import useScrollAnimation from "@/hooks/useScrollAnimation";

const BienalBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-orange py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 text-center ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-10">
          TODOS OS AUTORES PARTICIPANTES<br />
          TERÃO HORÁRIO PARA AUTÓGRAFOS<br />
          NA BIENAL DE SÃO PAULO 2026.
        </h2>
        <a
          href="#inscricao"
          className="inline-block bg-primary-foreground text-navy font-heading text-xl md:text-2xl font-bold py-5 px-12 rounded-full hover:bg-primary-foreground/90 transition-colors shadow-lg"
        >
          GARANTIR MINHA VAGA NA BIENAL SÃO PAULO 2026
        </a>
      </div>
    </section>
  );
};

export default BienalBanner;
