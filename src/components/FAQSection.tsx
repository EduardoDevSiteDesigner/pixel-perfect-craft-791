import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "TODOS OS AUTORES PARTICIPANTES DA ANTOLOGIA TERÃO PERÍODO PARA AUTÓGRAFOS NA BIENAL DO LIVRO SÃO PAULO 2026?",
    answer: "Sim. Todos os autores dos textos selecionados, que enviarem corretamente preenchida e assinada a CARTA DE ADESÃO e realizarem o pagamento do Kit de publicação de sua escolha: terão seus textos publicados no livro POEMAS DE AMOR PARA CURAR O MUNDO – volume 2 - 2026; participarão como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SP 2026; estarão automaticamente concorrendo à PREMIAÇÃO. Todos os autores participantes receberão credenciais de autor para entrada na Bienal do Livro SP 2026."
  },
  {
    question: "A CHANCE DE PUBLICAR SEU PRÓPRIO LIVRO (PREMIAÇÃO)",
    answer: "Todos os autores estarão automaticamente concorrendo à PREMIAÇÃO, que inclui a Publicação de um livro completo do(a) autor(a) vencedor(a) pela Editora Articule. Esta obra terá versão impressa (100 exemplares) e deverá ter no máximo 100 páginas. A Editora Articule será responsável por: edição de texto (copidesque); diagramação (projeto gráfico); revisão final; registro ISBN e ficha catalográfica; produção gráfica; impressão; organização da cerimônia de lançamento do livro."
  },
  { question: "QUAL O TEMA DA ANTOLOGIA?", answer: "O tema é AMOR e serão aceitos textos inéditos no gênero: POEMA. 'Um POEMA DE AMOR não fala apenas de romance, mas também de empatia, compaixão, ternura e esperança. Esses elementos, quando semeados no coração das pessoas, podem gerar mudanças significativas na forma como nos relacionamos uns com os outros e com o mundo ao nosso redor.'" },
  { question: "CIRCULAÇÃO DO LIVRO POR TODO O BRASIL (DIVULGAÇÃO)", answer: "Reunimos poetas de todas as regiões do país: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Um livro que automaticamente circula e é distribuído por todo o Brasil." },
  { question: "QUEM PODE PARTICIPAR?", answer: "Podem participar autores de qualquer nacionalidade residentes no Brasil e brasileiros residentes no exterior, que tenham idade mínima de 16 anos, completos a partir da data de inscrição. Menores de 18 anos deverão enviar a autorização de responsável legal para a organização." },
  { question: "É POSSÍVEL INSCREVER TEXTOS DE MAIS DE UM AUTOR(A)?", answer: "Não. Cada inscrição deverá ser feita, obrigatoriamente, por um único autor. Não será aceita coautoria." },
  { question: "QUANTOS TEXTOS CADA AUTOR PODE INSCREVER?", answer: "Os autores podem inscrever até 05 (cinco) poemas. Nesse caso, devem realizar uma inscrição para cada um dos textos." },
  { question: "A INSCRIÇÃO É GRATUITA? QUAL O PRAZO DE INSCRIÇÃO?", answer: "As inscrições são GRATUITAS e podem ser feitas até 28 DE MARÇO DE 2026, mediante preenchimento de formulário e envio do texto. O formulário pode ser encontrado no site: articule.art.br/poemasdeamor" },
  { question: "COMO FAÇO A MINHA INSCRIÇÃO?", answer: "Preencha completamente o FORMULÁRIO DE INSCRIÇÃO com seus dados, incluindo o ENVIO DE SEU TEXTO. O formulário pode ser encontrado no site articule.art.br/poemasdeamor" },
  { question: "EXISTE ALGUM FORMATO E REGRA PARA O ENVIO DO TEXTO?", answer: "Sim. Os textos devem ser escritos em língua portuguesa no seguinte formato: extensão máxima de 1 (uma) página com até 30 linhas; digitados em página tamanho A4, com margens de 3 cm, fonte Times New Roman tamanho 12. Espaçamento entre as linhas é livre. Os arquivos devem ser anexados em formato WORD. O título do texto deve constar na parte superior da página, alinhado à esquerda." },
  { question: "PAGAMENTO DO KIT DE PUBLICAÇÃO", answer: "Ao ter seu texto aprovado, para que ele esteja confirmado na antologia, é necessário adquirir um kit. Ele ajuda no custeio da produção editorial (Revisão, diagramação, ficha catalográfica, registros, arte-final, produção gráfica e impressão) e garante ao autor, exemplares e brindes a preço de atacado, podendo ser revendido com lucro. O autor só pagará pelo kit após ter seu texto aprovado." },
  { question: "VALOR DOS KITS PARA PUBLICAÇÃO APÓS TEXTO SER APROVADO", answer: "KIT BRONZE: R$ 297,00 (ou 12x R$ 30,22) — 02 livros + 02 marcadores + autógrafos na Bienal + frete grátis + certificado. KIT PRATA: R$ 594,00 (ou 12x R$ 60,44) — 04 livros + 04 marcadores + autógrafos + frete grátis + certificado + 03 fotos profissionais. KIT OURO: R$ 891,00 (ou 12x R$ 90,67) — 06 livros + 06 marcadores + autógrafos + frete grátis + certificado + 03 fotos profissionais. KIT DIAMANTE: R$ 1.485,00 (ou 12x R$ 151,11) — 10 livros + 10 marcadores + autógrafos + frete grátis + certificado + 03 fotos profissionais + gravação em áudio por locutor(a) profissional." },
  { question: "VENDA E DIREITOS AUTORAIS", answer: "Os direitos autorais permanecerão com o autor(a), que poderá usar seu texto livremente após a publicação. O autor concede à Editora Articule o direito de publicação do texto, somente no livro POEMAS DE AMOR PARA CURAR O MUNDO – volume 2 – 2026. Não serão repassados royalties de vendas dos exemplares. No entanto, trabalhamos com exemplares em preços de atacado para que os participantes possam comercializar e obter lucro com a revenda dos livros." },
  { question: "CRONOGRAMA", answer: "Período de Inscrições: 23 FEV a 27 MAR 2026. Divulgação lista AUTORES que irão compor a antologia: 08 MAI 2026. Divulgação lista de AUTORES FINALISTAS: 15 MAI 2026. Divulgação lista de AUTORES VENCEDORES: 22 MAI 2026. Agendamento Sessão Autógrafos na Bienal SP 2026: 19 MAI a 12 JUN 2026. Envio dos livros pelos CORREIOS: 06 JUL a 07 AGO 2026. LANÇAMENTO NA BIENAL DO LIVRO SÃO PAULO 2026: 04 a 13 SET 2026." },
  { question: "FRETE GRATUITO PARA TODO BRASIL", answer: "O frete fixo gratuito já estará incluso para todo o Brasil, e será entregue via Correios (via impresso módico) ou através da transportadora e empresa de logística atuante em todo território brasileiro. Uma segunda tentativa de envio, caso o pacote retorne à editora, será cotado e cobrado à parte." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-16" style={{
      background: 'linear-gradient(135deg, hsl(220 60% 20%), hsl(230 55% 30%), hsl(220 50% 40%))'
    }}>
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-10 text-left">
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
              <AccordionContent className="px-4 pb-4 text-navy text-base md:text-lg leading-relaxed">
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
