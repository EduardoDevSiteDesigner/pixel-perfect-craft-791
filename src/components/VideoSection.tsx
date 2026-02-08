const VideoSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1">
            <p className="font-script text-3xl md:text-4xl text-primary-foreground leading-relaxed">
              Assista e<br />saiba mais<br />sobre a<br />antologia<br />
              <span className="text-yellow">'poemas de amor<br />para curar<br />o mundo'</span>
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-primary-foreground font-heading text-xl">INSCRIÇÕES ABERTAS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
