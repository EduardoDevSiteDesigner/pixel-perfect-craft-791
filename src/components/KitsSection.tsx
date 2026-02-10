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
    <section className="bg-magenta py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground text-center mb-4">
          KITS DE PUBLICAÇÃO
        </h2>
        <p className="text-primary-foreground text-center mb-12 text-lg">
          SOMENTE PARA AUTORES SELECIONADOS
        </p>

        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <div key={kit.name} className="bg-sky rounded-lg p-8 md:p-10 shadow-xl overflow-visible relative">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Title + Items */}
                <div className="flex-1">
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

                {/* Right: Book image */}
                <div className="flex-shrink-0 flex flex-col items-center w-full md:w-80">
                  <img
                    src={kit.image}
                    alt="Livro Poemas de Amor para Curar o Mundo"
                    className="w-72 md:w-96 drop-shadow-2xl md:-mt-8 md:-mb-8"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="mt-8 pt-6 border-t border-primary-foreground/30 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="font-heading text-5xl md:text-6xl font-extrabold text-primary-foreground">
                  {kit.price}
                </p>
                {kit.installments && (
                  <p className="text-primary-foreground text-lg md:text-xl font-body">
                    {kit.installments}
                  </p>
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
