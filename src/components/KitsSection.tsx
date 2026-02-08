const KitsSection = () => {
  const kits = [
    {
      name: "BÁSICO",
      items: [
        "01 (um) texto a ser publicado",
        "02 (dois) livros impressos 'POEMAS DE AMOR PARA CURAR O MUNDO'",
        "02 (dois) marcadores",
        "Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO RIO 2025",
        "Certificado de participação",
      ],
      price: "R$ 247,00",
    },
    {
      name: "CLÁSSICO",
      items: [
        "01 (um) texto a ser publicado",
        "05 (cinco) livros 'POEMAS DE AMOR PARA CURAR O MUNDO'",
        "05 (cinco) marcadores",
        "Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO RIO 2025",
        "Certificado de participação",
        "Fotografia de 5 fotos digitais de sua participação como autor(a) na BIENAL DO LIVRO RIO 2025",
      ],
      price: "R$ 497,00",
      installments: "OU 12 X R$ 49,00 no cartão de crédito",
    },
  ];

  return (
    <section className="bg-magenta py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground text-center mb-4">
          KITS DE PUBLICAÇÃO
        </h2>
        <p className="text-primary-foreground text-center mb-12 text-lg">
          SOMENTE PARA AUTORES SELECIONADOS
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map((kit) => (
            <div key={kit.name} className="bg-primary-foreground rounded-lg p-8 shadow-xl">
              <div className="text-center mb-6">
                <p className="font-heading text-sm tracking-widest text-muted-foreground">ANTOLOGIA 2025</p>
                <h3 className="font-heading text-3xl font-bold text-navy mt-2">KIT {kit.name}</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {kit.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-navy">
                    <span className="text-magenta mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center border-t pt-6">
                <p className="font-heading text-4xl font-bold text-navy">{kit.price}</p>
                {kit.installments && (
                  <p className="text-muted-foreground mt-2">{kit.installments}</p>
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
