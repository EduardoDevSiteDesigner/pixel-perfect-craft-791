import useScrollAnimation from "@/hooks/useScrollAnimation";

const WEBHOOK_URL = "https://n8n-n8n.s7gbvq.easypanel.host/webhook/poemas";

const InscricaoForm = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-sky py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 max-w-3xl ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-navy text-center mb-2">
          FORMULÁRIO DE INSCRIÇÃO
        </h2>
        <p className="text-center text-navy text-4xl md:text-5xl mb-2 font-heading font-black">PARTICIPE!</p>
        <p className="text-center text-navy mb-8 text-xl md:text-2xl font-heading font-bold">PREENCHA SEUS DADOS E ANEXE SEU TEXTO.</p>

        <div className="w-full rounded-lg overflow-hidden shadow-lg bg-primary-foreground">
          <iframe
            src={WEBHOOK_URL}
            title="Formulário de Inscrição"
            className="w-full border-0"
            style={{ minHeight: "1200px" }}
            allow="clipboard-write"
          />
        </div>
      </div>
    </section>
  );
};

export default InscricaoForm;
