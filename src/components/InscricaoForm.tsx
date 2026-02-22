import useScrollAnimation from "@/hooks/useScrollAnimation";

const InscricaoForm = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-sky pt-48 pb-72 md:pt-64 md:pb-96">
      <div ref={ref} className={`container mx-auto px-4 max-w-4xl ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-navy text-center mb-2">
          FORMULÁRIO DE INSCRIÇÃO
        </h2>
        <p className="text-center text-navy text-5xl md:text-6xl mb-2 font-heading font-black">PARTICIPE!</p>
        <p className="text-center text-navy mb-8 text-xl md:text-2xl font-heading font-bold">PREENCHA SEUS DADOS E ANEXE SEU TEXTO.</p>

        {/* Espaço reservado para o formulário */}
        <div className="w-full min-h-[500px] md:min-h-[800px]" />
      </div>
    </section>
  );
};

export default InscricaoForm;
