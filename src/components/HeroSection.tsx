import bookCover from "@/assets/book-cover.png";

const HeroSection = () => {
  return (
    <section className="relative bg-magenta overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-primary-foreground">
            <p className="font-heading text-lg md:text-xl tracking-widest mb-2 opacity-80">
              ANTOLOGIA 2025
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
              UM CHAMADO<br />AOS POETAS.
            </h1>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-yellow leading-tight">
              LANÇAMENTO<br />NA BIENAL RIO 2025.
            </h2>
          </div>
          <div className="flex-shrink-0 w-64 md:w-80 lg:w-96">
            <img
              src={bookCover}
              alt="Livro Poemas de Amor para Curar o Mundo"
              className="w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
