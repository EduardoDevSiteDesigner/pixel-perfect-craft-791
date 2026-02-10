import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const InscricaoForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nome: "", email: "", pais: "", estado: "", bairro: "", numero: "",
    cpf: "", celular: "", telefone: "", titulo: "", concordo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <section className="bg-sky py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 max-w-2xl ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-navy text-center mb-2">
          FORMULÁRIO DE INSCRIÇÃO
        </h2>
        <p className="text-center text-navy text-lg mb-2 font-bold">PARTICIPE!</p>
        <p className="text-center text-navy mb-8">PREENCHA SEUS DADOS E ANEXE SEU TEXTO.</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Nome", name: "nome" },
            { label: "E-mail", name: "email", type: "email" },
            { label: "País", name: "pais" },
            { label: "Estado", name: "estado" },
            { label: "Bairro", name: "bairro" },
            { label: "Número", name: "numero" },
            { label: "CPF", name: "cpf" },
            { label: "Celular/WhatsApp (com DDD)", name: "celular" },
            { label: "Telefone fixo", name: "telefone" },
            { label: "Título de seu POEMA", name: "titulo" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-navy font-semibold mb-1">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name as keyof typeof formData] as string}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-navy rounded-md bg-primary-foreground text-navy focus:outline-none focus:ring-2 focus:ring-magenta"
              />
            </div>
          ))}

          <div className="bg-yellow/30 border-2 border-yellow rounded-md p-4">
            <p className="text-navy text-sm font-semibold">ATENÇÃO:</p>
            <p className="text-navy text-sm">
              Antes de enviar o arquivo verifique sua extensão. A extensão máxima do texto é de até 30 linhas (1 página)
            </p>
          </div>

          <div className="border-2 border-dashed border-navy rounded-md p-8 text-center cursor-pointer hover:bg-primary-foreground/50 transition-colors">
            <p className="text-navy font-semibold">Arraste o arquivo ou Clique Aqui</p>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="concordo"
              checked={formData.concordo}
              onChange={handleChange}
              className="mt-1 w-5 h-5 accent-magenta"
            />
            <span className="text-navy">Declaro ter lido e concordar com os termos do regulamento</span>
          </label>

          <button
            type="submit"
            className="w-full bg-navy text-primary-foreground font-heading text-xl font-bold py-4 rounded-md hover:bg-navy/90 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default InscricaoForm;
