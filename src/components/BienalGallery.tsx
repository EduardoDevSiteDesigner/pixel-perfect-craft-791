import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import bienalImg1 from "@/assets/bienal-gallery-1.png";

// Placeholder: user will send images 4-10 in next message
const galleryTop = [
  { image: bienalImg1, alt: "Estande Editora Articule na Bienal Rio 2025" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 2" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 3" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 4" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 5" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 6" },
];

const galleryBottom = [
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 7" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 8" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 9" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 10" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 11" },
  { image: bienalImg1, alt: "Bienal Rio 2025 - Momento 12" },
];

const GalleryCarousel = ({ images }: { images: typeof galleryTop }) => (
  <div className="max-w-5xl mx-auto px-12">
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/4 p-2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img.image}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
      <CarouselNext className="border-primary-foreground text-primary-foreground" />
    </Carousel>
  </div>
);

const BienalGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-magenta py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground text-center mb-12">
          MOMENTOS INESQUECÍVEIS NA BIENAL RIO 2025
        </h2>

        <div className="space-y-8">
          <GalleryCarousel images={galleryTop} />
          <GalleryCarousel images={galleryBottom} />
        </div>
      </div>
    </section>
  );
};

export default BienalGallery;
