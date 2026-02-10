import authorSigning from "@/assets/author-signing.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PremiacaoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-orange py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="max-w-2xl mx-auto mb-12">
          <div className="border-4 border-primary-foreground rounded-lg overflow-hidden shadow-xl">
            <img src={authorSigning} alt="Autor autografando livro" className="w-full h-64 md:h-96 object-cover" />
          </div>
        </div>

        <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-navy mb-8">PREMIAÇÃO</h2>

        <div className="bg-navy text-primary-foreground p-8 md:p-12 rounded-lg mb-8">
          <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            O AUTOR(A) VENCEDOR(A)
          </h3>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-yellow mb-6">
            GANHARÁ A PUBLICAÇÃO DE SEU LIVRO PELA ARTICULE
          </p>
          <p className="text-lg leading-relaxed opacity-90" style={{ textAlign: 'justify', hyphens: 'auto' }}>
            Todos os autores participantes da antologia 'POEMAS DE AMOR PARA CURAR O MUNDO' estarão automaticamente concorrendo a seguinte premiação: A Editora Articule publicará o livro do autor que conquistar o primeiro lugar entre os poemas da antologia. O livro será produzido nos formatos impresso e digital, e terá cerimônia de lançamento organizada pela editora.
          </p>
        </div>

        <div className="text-center">
          <button className="bg-yellow text-navy font-heading text-3xl md:text-4xl font-bold py-5 px-16 rounded-full hover:bg-yellow/90 transition-colors shadow-lg">
            REGULAMENTO
          </button>
          <p className="text-navy mt-3 text-sm">Clique no botão acima e leia o REGULAMENTO.</p>
        </div>
      </div>
    </section>
  );
};

export default PremiacaoSection;
