const Navbar = () => {
  return (
    <nav className="bg-navy py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-orange">ARTICULE</span>
          <span className="text-sky font-script text-sm">Editora</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-primary-foreground text-sm">
          <a href="#inicio" className="hover:text-orange transition-colors">Início</a>
          <a href="#sobre" className="hover:text-orange transition-colors">Sobre</a>
          <a href="#premiacao" className="hover:text-orange transition-colors">Premiação</a>
          <a href="#kits" className="hover:text-orange transition-colors">Kits</a>
          <a href="#inscricao" className="hover:text-orange transition-colors">Inscrição</a>
          <a href="#contato" className="hover:text-orange transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
