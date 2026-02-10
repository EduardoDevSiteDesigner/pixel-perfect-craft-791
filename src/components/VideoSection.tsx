const VideoSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <p className="font-script text-xl md:text-2xl text-primary-foreground leading-relaxed mb-8">
          Assista e saiba mais sobre a antologia{" "}
          <span className="text-yellow">'poemas de amor para curar o mundo'</span>
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/urz9Y0mN15s"
              title="Poemas de Amor para Curar o Mundo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
