const ActionButtons = () => {
  const buttons = [
    { label: "INSCRIÇÕES ENCERRADAS", variant: "yellow" as const },
    { label: "LISTA AUTORES PARTICIPANTES", variant: "yellow" as const, subtitle: "CLIQUE NO BOTÃO ACIMA E CONFIRA OS AUTORES PARTICIPANTES DO POEMAS DE AMOR PARA CURAR O MUNDO" },
    { label: "LISTA AUTORES FINALISTAS", variant: "yellow" as const, subtitle: "CLIQUE NO BOTÃO ACIMA E CONFIRA OS AUTORES FINALISTAS DO POEMAS DE AMOR PARA CURAR O MUNDO" },
    { label: "AUTORES VENCEDORES", variant: "yellow" as const, subtitle: "CLIQUE NO BOTÃO ACIMA E CONFIRA OS AUTORES VENCEDORES DO POEMAS DE AMOR PARA CURAR O MUNDO" },
  ];

  return (
    <section className="bg-magenta py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        {buttons.map((btn, i) => (
          <div key={i} className="w-full max-w-xl text-center">
            <button className="w-full bg-yellow text-navy font-heading text-xl md:text-2xl font-bold py-3 px-8 border-2 border-navy hover:bg-yellow/90 transition-colors">
              {btn.label}
            </button>
            {btn.subtitle && (
              <p className="text-primary-foreground text-sm mt-2">
                {btn.subtitle.split("POEMAS DE AMOR PARA CURAR O MUNDO").map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && <strong>POEMAS DE AMOR PARA CURAR O MUNDO</strong>}
                  </span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionButtons;
