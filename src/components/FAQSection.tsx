import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const faqItems = [
  { question: "QUEM PODE PARTICIPAR?", answer: "Qualquer pessoa pode participar, independentemente de idade, nacionalidade ou experiência literária." },
  { question: "É POSSÍVEL INSCREVER TEXTOS DE MAIS DE UM AUTOR(A)?", answer: "Não. Cada inscrição deve conter apenas um texto de autoria individual." },
  { question: "QUAL O TEMA DA ANTOLOGIA?", answer: "O tema é 'Poemas de Amor para Curar o Mundo'. Os poemas devem abordar o amor em suas diversas formas." },
  { question: "QUANTOS TEXTOS CADA AUTOR PODE INSCREVER?", answer: "Cada autor pode inscrever apenas um texto por edição." },
  { question: "A INSCRIÇÃO É GRATUITA? QUAL O PRAZO DE INSCRIÇÃO?", answer: "A inscrição é gratuita. O prazo será divulgado nas redes sociais e no site oficial." },
  { question: "COMO FAÇO A MINHA INSCRIÇÃO?", answer: "Preencha o formulário de inscrição disponível nesta página, anexando seu poema no formato solicitado." },
  { question: "EXISTE ALGUM FORMATO E REGRA PARA O ENVIO DO TEXTO?", answer: "Sim. O texto deve ter no máximo 30 linhas (1 página) e ser enviado em formato digital através do formulário." },
  { question: "SOBRE DIREITOS AUTORAIS", answer: "Os direitos autorais são integralmente do autor. A editora adquire apenas o direito de publicação na antologia." },
  { question: "TEXTOS GERADOS POR IA – INTELIGÊNCIA ARTIFICIAL PODEM PARTICIPAR?", answer: "Não. Textos gerados por inteligência artificial não serão aceitos. Todos os textos devem ser de autoria própria." },
  { question: "SOBRE A SELEÇÃO E PUBLICAÇÃO DOS TEXTOS", answer: "Os textos serão avaliados por uma comissão editorial. Os selecionados serão publicados na antologia." },
  { question: "VALOR DOS KITS PARA PUBLICAÇÃO (após seu texto ser aprovado)", answer: "Os valores dos kits estão detalhados na seção de Kits de Publicação nesta página." },
  { question: "TODOS OS AUTORES PARTICIPANTES DA ANTOLOGIA TERÃO PERÍODO PARA AUTÓGRAFOS NA BIENAL DO LIVRO RIO 2025?", answer: "Sim! Todos os autores participantes terão horário reservado para sessão de autógrafos na Bienal." },
  { question: "SOBRE A PREMIAÇÃO", answer: "O autor vencedor ganhará a publicação de seu livro pela Editora Articule, nos formatos impresso e digital, com cerimônia de lançamento." },
  { question: "DISPOSIÇÕES FINAIS", answer: "Ao se inscrever, o participante declara concordar com todas as regras do regulamento. Casos omissos serão resolvidos pela comissão organizadora." },
  { question: "COMO RECEBEREI MEU KIT, CASO NÃO COMPAREÇA NO LANÇAMENTO DO LIVRO NA BIENAL DO LIVRO RIO 2025?", answer: "O kit será enviado pelos Correios para o endereço cadastrado no formulário de inscrição." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-orange py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy mb-10 text-left">
          RESPOSTAS PARA<br />PERGUNTAS FREQUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-none rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-4 text-navy font-heading font-bold text-sm md:text-base text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-navy">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
