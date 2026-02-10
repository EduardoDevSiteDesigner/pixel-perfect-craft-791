import logoArticule from "@/assets/logo-articule.png";

const QuemSomos = () => {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header: Title left + Logo right */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground">
            QUEM SOMOS
          </h2>
          <img
            src={logoArticule}
            alt="Logo Editora Articule"
            className="w-32 md:w-48"
          />
        </div>

        {/* YouTube Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/XXOpnnwbmMo"
              title="Quem Somos - Editora Articule"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-primary-foreground text-lg leading-relaxed max-w-4xl mx-auto space-y-6 text-left">
          <p>
            Em 2025 a Articule completa 28 anos. Responsável pela criação e produção de Projetos Culturais diversos como: Dança, Teatro, Música e Literatura, em diversos formatos: Festivais, Congressos, Seminários, Shows, Publicações Literárias, Ações Educativas e Sociais.
          </p>

          <h4 className="font-heading text-2xl font-bold text-yellow text-center mt-8">
            PRINCIPAIS REALIZAÇÕES NESSES 29 ANOS DA ARTICULE
          </h4>

          <div className="space-y-6 mt-6">
            <div>
              <h5 className="font-heading text-xl font-bold text-orange mb-2">Festival de Dança</h5>
              <p className="opacity-90">
                Realizado há 27 anos, com programação formada por: mostra não competitiva; ações educativas; seminário com nomes expressivos da dança; intervenções artísticas em espaços públicos. A Expodance já foi patrocinada pela Prefeitura da Cidade do Rio de Janeiro. Nesses 27 anos foi realizada em 5 cidades, 26 bairros e 22 palcos no estado do RJ.
              </p>
            </div>

            <div>
              <h5 className="font-heading text-xl font-bold text-orange mb-2">Programa Social de Capacitação de Jovens</h5>
              <p className="opacity-90">
                Realizado há 25 anos em parceria com instituições de ensino. Em 2001 foram contemplados no programa Capacitação Solidária, da ONG Comunidade Solidária.
              </p>
            </div>

            <div>
              <h5 className="font-heading text-xl font-bold text-orange mb-2">Coletânea Rock Brasil</h5>
              <p className="opacity-90">
                Festival realizado de forma itinerante envolvendo bandas de todas as regiões do Brasil. Reuniram mais de 3 mil bandas, em shows ao vivo, por palcos em diversos estados. Foram 10 anos de festival.
              </p>
            </div>

            <div>
              <h5 className="font-heading text-xl font-bold text-orange mb-2">Companhia Articule de Teatro</h5>
              <p className="opacity-90">
                A Cia. Articule de Teatro estreou em 1999. São 25 anos realizando montagens especializadas para a infância e juventude.
              </p>
            </div>

            <div>
              <h5 className="font-heading text-xl font-bold text-orange mb-2">Prêmio Brasil - Coletânea Nacional de Literatura</h5>
              <p className="opacity-90">
                Reuniram escritores de 23 estados, além do Distrito Federal, de 119 cidades brasileiras. Lançamento na BIENAL DE SÃO PAULO 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
