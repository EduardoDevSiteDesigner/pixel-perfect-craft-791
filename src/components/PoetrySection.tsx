const PoetrySection = () => {
  return (
    <>
      {/* Pink section - quote */}
      <section className="bg-magenta py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
            A POESIA TEM A CAPACIDADE ÚNICA DE TOCAR A ALMA,<br />
            DESPERTANDO EMOÇÕES PROFUNDAS E RESGATANDO<br />
            SENTIMENTOS ESSENCIAIS PARA A HARMONIA ENTRE<br />
            OS SERES HUMANOS.
          </h2>
        </div>
      </section>

      {/* Orange text block */}
      <section className="bg-orange py-12 md:py-16">
        <div className="container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed space-y-6 max-w-4xl" style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            Um <strong>POEMA DE AMOR</strong> não fala apenas de romance, mas também de empatia, compaixão, ternura e esperança. Esses elementos, quando semeados no coração das pessoas, podem gerar mudanças significativas na forma como nos relacionamos uns com os outros e com o mundo ao nosso redor.
          </p>
          <p>
            Historicamente, poetas usaram o amor como força transformadora. Pablo Neruda, Rumi e Vinicius de Moraes, entre tantos outros, construíram versos que ultrapassaram barreiras culturais e linguísticas, promovendo a união entre povos e indivíduos.
          </p>
        </div>
      </section>

      {/* Sky blue highlight */}
      <section className="bg-sky py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
            O AMOR ESCRITO EM POESIA<br />
            TRANSCENDE TEMPOS E ESPAÇOS.
          </h2>
        </div>
      </section>

      {/* Light blue text */}
      <section className="bg-sky/30 py-12">
        <div className="container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed max-w-4xl" style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            Além disso, a poesia é um refúgio em tempos de dor e angústia. Para quem sofre, um poema de amor pode ser um alento, um bálsamo que ressignifica a experiência do sofrimento e da solidão.
          </p>
        </div>
      </section>

      {/* Pink highlight */}
      <section className="bg-pink-light py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
            EM TEMPOS DE GUERRA E DIVISÃO,<br />
            A LINGUAGEM DO AMOR<br />
            PODE HUMANIZAR O OUTRO<br />
            E ABRIR CAMINHOS PARA O DIÁLOGO.
          </h2>
        </div>
      </section>

      {/* Final text */}
      <section className="bg-sky py-12">
        <div className="container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed max-w-4xl" style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            O mundo precisa de soluções práticas, mas também precisa de beleza, de sonho, de emoção. E é na poesia que o amor se torna uma linguagem universal, capaz de curar feridas invisíveis e abrir caminhos para um futuro mais harmonioso.
          </p>
        </div>
      </section>
    </>
  );
};

export default PoetrySection;
