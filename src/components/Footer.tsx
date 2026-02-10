import useScrollAnimation from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-navy border-t-4 border-orange">
      <div ref={ref} className={`container mx-auto px-4 py-10 text-center ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-6">
          CONTATOS ARTICULE
        </h3>
        <div className="space-y-2 text-primary-foreground opacity-90">
          <p className="text-sky font-script text-xl">Porque</p>
          <p className="font-heading text-3xl font-bold text-orange">ARTICULE</p>
          <p className="text-sky font-script text-xl mb-4">gente pra brilhar.</p>
          <p>WHATSAPP: (21) 99472-8748</p>
          <p>E-MAIL: editora@articule.art.br</p>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            Copyright 2026 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
