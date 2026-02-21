import mockupKit from "@/assets/mockup-kit.png";
import mockupKit2 from "@/assets/mockup-kit1.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const KitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const kits = [
    {
      name: "BÁSICO",
      items: [
        "01 (um) texto a ser publicado",
        "02 (dois) livros impressos 'POEMAS DE AMOR PARA CURAR O MUNDO'",
        "02 (dois) marcadores",
        "Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026",
        "Certificado de participação",
      ],
      price: "R$ 247,00",
      installments: "OU 12 X R$ 24,70 no cartão de crédito",
      image: mockupKit,
    },
    {
      name: "CLÁSSICO",
      items: [
        "01 (um) texto a ser publicado",
        "05 (cinco) livros 'POEMAS DE AMOR PARA CURAR O MUNDO'",
        "05 (cinco) marcadores",
        "Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026",
        "Certificado de participação",
        "Fotografia de 5 fotos digitais de sua participação como autor(a) na BIENAL DO LIVRO SÃO PAULO 2026",
      ],
      price: "R$ 497,00",
      installments: "OU 12 X R$ 49,00 no cartão de crédito",
      image: mockupKit2,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = Math.random() * 100;
          const duration = 4 + Math.random() * 6;
          const delay = Math.random() * 8;
          const size = 1 + Math.random() * 2;
          return (
            <div key={i} className="absolute bg-yellow rounded-full" style={{
              left: `${left}%`, width: `${size}px`, height: `${size}px`, opacity: 0,
              animation: `falling ${duration}s ${delay}s infinite`,
            }} />
          );
        })}
      </div>

      <div ref={ref} className={`container mx-auto px-4 relative z-10 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground text-center mb-4">
          KITS DE PUBLICAÇÃO
        </h2>
        <p className="text-primary-foreground text-center mb-12 text-2xl md:text-3xl font-heading font-bold">
          SOMENTE PARA AUTORES SELECIONADOS
        </p>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <div key={kit.name} className="bg-sky rounded-lg p-8 md:p-10 shadow-xl overflow-visible relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 md:max-w-[45%]">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                    KIT {kit.name}
                  </h3>
                  <ul className="space-y-4 mb-6">
                    {kit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-primary-foreground text-lg leading-relaxed">
                        <span className="mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center justify-center flex-1">
                  <img src={kit.image} alt="Livro Poemas de Amor para Curar o Mundo" className="w-full max-w-[500px] drop-shadow-2xl md:-mt-12 md:-mb-12" />
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary-foreground/30 flex flex-col items-center gap-2 text-center">
                <p className="font-heading text-6xl md:text-7xl font-black text-primary-foreground">{kit.price}</p>
                {kit.installments && (
                  <p className="text-primary-foreground text-lg md:text-xl">{kit.installments}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitsSection;
