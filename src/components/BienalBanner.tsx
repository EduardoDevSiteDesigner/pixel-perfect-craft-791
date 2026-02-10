import bienalEvent from "@/assets/bienal-event.jpg";
import mockupBienal from "@/assets/mockup-bienal.png";

const BienalBanner = () => {
  return (
    <section className="relative bg-orange py-12 md:py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bienalEvent})` }}
      />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight">
            TODOS OS AUTORES PARTICIPANTES<br />
            TERÃO HORÁRIO PARA AUTÓGRAFOS<br />
            NA <span className="text-sky">BIENAL DE SÃO PAULO 2026.</span>
          </h2>
          <p className="text-navy mt-4 text-lg">
            contato: andersonarticule@gmail.com
          </p>
        </div>
        <div className="flex-shrink-0 w-64 md:w-80">
          <img
            src={mockupBienal}
            alt="Livro Poemas de Amor para Curar o Mundo"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BienalBanner;
