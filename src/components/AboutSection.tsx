import bienalEvent from "@/assets/bienal-event.jpg";
import bookCover from "@/assets/book-cover.png";

const AboutSection = () => {
  return (
    <section className="bg-orange">
      {/* Bienal photo + book */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <div className="border-4 border-primary-foreground rounded-lg overflow-hidden shadow-xl">
            <img src={bienalEvent} alt="Bienal do Livro Rio de Janeiro" className="w-full h-64 md:h-96 object-cover" />
          </div>
          <div className="absolute -bottom-8 left-4 md:left-8 w-32 md:w-48">
            <img src={bookCover} alt="Livro" className="w-full drop-shadow-xl" />
          </div>
        </div>
      </div>

      {/* Blue text section */}
      <div className="bg-sky py-12 md:py-16 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-navy text-right leading-tight mb-8">
            DESCUBRA POR QUE<br />O MUNDO PRECISA<br />DOS POETAS.
          </h2>
          <div className="text-navy text-lg md:text-xl leading-relaxed space-y-4">
            <p>
              A antologia <strong>'POEMAS DE AMOR PARA CURAR O MUNDO'</strong> é um verdadeiro <strong>CHAMADO PARA POETAS.</strong>
            </p>
            <p>
              O mundo, atravessado por conflitos, desigualdades e desencontros, parece estar em um estado constante de turbulência. A solução pode parecer inalcançável, mas talvez a resposta esteja naquilo que nos torna mais humanos: <strong>O AMOR.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
