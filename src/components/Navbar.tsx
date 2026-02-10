import logoArticule from "@/assets/logo-articule.png";

const Navbar = () => {
  return (
    <nav className="bg-navy py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src={logoArticule} alt="Editora Articule" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex items-center justify-center flex-1 gap-6 text-primary-foreground text-sm">
          <a href="#inicio" className="hover:text-orange transition-colors">Início</a>
          <a href="#sobre" className="hover:text-orange transition-colors">Sobre</a>
          <a href="#premiacao" className="hover:text-orange transition-colors">Premiação</a>
          <a href="#kits" className="hover:text-orange transition-colors">Kits</a>
          <a href="#inscricao" className="hover:text-orange transition-colors">Inscrição</a>
          <a href="#contato" className="hover:text-orange transition-colors">Contato</a>
        </div>
        <a
          href="#inscricao"
          className="hidden md:inline-block bg-yellow text-navy font-heading text-sm font-bold py-2 px-6 hover:bg-yellow/90 transition-colors rounded-full whitespace-nowrap"
        >
          INSCREVA-SE AGORA
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
