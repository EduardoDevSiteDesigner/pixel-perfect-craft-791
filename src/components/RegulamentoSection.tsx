const RegulamentoSection = () => {
  return (
    <section className="bg-primary-foreground w-full py-12 md:py-16">
      <div className="flex flex-col items-center gap-3">
        <button className="bg-magenta text-primary-foreground font-heading text-4xl md:text-6xl font-bold py-8 px-24 rounded-full hover:bg-magenta/90 transition-colors shadow-lg">
          REGULAMENTO
        </button>
        <p className="text-navy mt-3 text-sm">Clique no botão acima e leia o REGULAMENTO.</p>
      </div>
    </section>
  );
};

export default RegulamentoSection;
