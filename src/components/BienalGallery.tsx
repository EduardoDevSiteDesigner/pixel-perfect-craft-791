import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useScrollAnimation from "@/hooks/useScrollAnimation";

import img1 from "@/assets/bienal-gallery-1.jpg";
import img2 from "@/assets/bienal-gallery-2.jpg";
import img3 from "@/assets/bienal-gallery-3.jpg";
import img4 from "@/assets/bienal-gallery-4.jpg";
import img5 from "@/assets/bienal-gallery-5.jpg";
import img6 from "@/assets/bienal-gallery-6.jpg";
import bienalStand from "@/assets/bienal-gallery-1.png";

const galleryTop = [
  { image: img1, alt: "Família no estande Articule na Bienal Rio 2025" },
  { image: img2, alt: "Autora com livro Poemas de Amor na Bienal Rio 2025" },
  { image: img3, alt: "Livro Poemas de Amor para Curar o Mundo" },
  { image: img4, alt: "Autoras com livro na Bienal Rio 2025" },
  { image: img5, alt: "Autoras na sessão de autógrafos Bienal Rio 2025" },
  { image: img6, alt: "Autoras com flores na Bienal Rio 2025" },
];

const galleryBottom = [
  { image: bienalStand, alt: "Estande Editora Articule na Bienal Rio 2025" },
  { image: img1, alt: "Bienal Rio 2025 - Momento 2" },
  { image: img2, alt: "Bienal Rio 2025 - Momento 3" },
  { image: img3, alt: "Bienal Rio 2025 - Momento 4" },
  { image: img4, alt: "Bienal Rio 2025 - Momento 5" },
  { image: img5, alt: "Bienal Rio 2025 - Momento 6" },
];

const BienalGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-magenta py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground text-center mb-12">
          MOMENTOS INESQUECÍVEIS NA BIENAL RIO 2025
        </h2>

        <div className="space-y-10">
          {/* Top gallery - offset to the left */}
          <div className="max-w-6xl mx-auto px-12 md:mr-0 md:ml-auto">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryTop.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={img.image}
                        alt={img.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>

          {/* Bottom gallery - offset to the right */}
          <div className="max-w-6xl mx-auto px-12 md:ml-0 md:mr-auto">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryBottom.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={img.image}
                        alt={img.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BienalGallery;
