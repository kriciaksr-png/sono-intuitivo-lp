import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { ChevronRight, Star } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Soft Luxury Minimalism
 * - Extreme whitespace and breathing room
 * - Subtle gradients and soft shadows
 * - Typography-driven hierarchy
 * - Restraint in color—use palette sparingly
 * - Asymmetric layout with generous padding
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-section") || "0");
            setVisibleSections((prev) => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => Array.from(visibleSections).includes(index);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky CTA Bar - Mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-soft-lg" : "bg-transparent"
        }`}
      >
        <div className="container py-3 flex gap-2">
          <Button className="btn-premium flex-1">Quero começar</Button>
        </div>
      </div>

      {/* ===== SECTION 1: HERO ===== */}
      <section
        data-section="1"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 md:pb-0"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/hero-mother-baby-oPYp9GA7xoym2H3k3ppSFe.webp"
            alt="Mãe e bebê em momento acolhedor"
            className="w-full h-full object-cover"
          />
          {/* Premium overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container max-w-2xl text-center">
          {/* Micro Social Proof */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/80">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <span>Centenas de famílias acompanhadas</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: 'var(--font-display)' }}
            className={`mb-6 transition-all duration-700 delay-100 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            O acompanhamento completo para o sono do seu bebê.
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-foreground/80 mb-8 transition-all duration-700 delay-200 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Gentil. Personalizado. Com você em cada etapa — sem precisar resolver isso sozinha.
          </p>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-foreground/70 mb-10 transition-all duration-700 delay-300 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Do diagnóstico ao resultado: plano 100% personalizado, encontros ao vivo semanais com Kricia e suporte para cada ajuste no caminho. O Método Sono Intuitivo, aplicado ao seu bebê.
          </p>

          {/* Badges */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 transition-all duration-700 delay-400 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {["Sem deixar chorar", "Plano personalizado", "Suporte real", "0–36 meses"].map(
              (badge, i) => (
                <div key={i} className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                  <span className="text-accent">✔</span>
                  {badge}
                </div>
              )
            )}
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button className="btn-premium text-lg">
              Quero o acompanhamento completo <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PAIN POINT ===== */}
      <section
        data-section="2"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(2) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-8 text-accent">Você está exausta.</h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Não é uma noite ruim — são semanas, talvez meses de sono fragmentado. Você acorda 5, 6, 7 vezes por noite. Seu bebê não consegue dormir mais de 30 minutos. Você está cansada, confusa, e começa a questionar se está fazendo algo errado.
            </p>
            <p>
              Pesquisa desesperada às 2 da manhã. Tenta tudo: rotina, janela de sono, ruído branco, mais movimento, menos movimento. Pede conselhos para amigos, família, internet. Recebe orientações contraditórias. Nada funciona.
            </p>
            <p>
              E o pior: você se sente sozinha nesse processo. Como se fosse a única mãe que não consegue fazer o bebê dormir. Como se todo mundo soubesse o que fazer menos você.
            </p>
            <p>
              Você ama seu bebê profundamente. Mas está no limite. Precisa de ajuda real.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: WHY NOTHING WORKED ===== */}
      <section
        data-section="3"
        className={`py-20 md:py-32 bg-secondary/5 transition-all duration-700 ${
          isVisible(3) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-8">Não é porque você falhou.</h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Talvez você já tenha tentado rotina da internet, janela de sono, dicas contraditórias, métodos rígidos ou até orientações que simplesmente não respeitam sua realidade.
            </p>
            <p>
              O problema raramente é falta de esforço.
            </p>
            <p>
              Na maioria das vezes, é falta de um plano realmente adaptado ao bebê, à mãe e à rotina da família.
            </p>
            <p className="font-semibold text-foreground">
              Seu bebê não é genérico. E o plano dele também não deveria ser.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: THE METHOD ===== */}
      <section
        data-section="4"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(4) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12">Um método gentil, mas com direção.</h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Sono infantil não precisa ser rígido nem baseado em deixar chorar.
          </p>
          <p className="text-lg font-semibold text-foreground mb-8">
            O Método Sono Intuitivo combina:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              "Desenvolvimento infantil",
              "Ciência do sono",
              "Observação do temperamento do bebê",
              "Realidade da família",
            ].map((item, i) => (
              <div
                key={i}
                className={`card-glass transition-all duration-500 delay-${i * 100} ${
                  isVisible(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-foreground/70 leading-relaxed">
            Tudo aplicado ao seu bebê — e não a um modelo pronto da internet.
          </p>
        </div>
      </section>

      {/* ===== SECTION 5: FUTURE PACING ===== */}
      <section
        data-section="5"
        className={`py-20 md:py-32 bg-accent/5 transition-all duration-700 ${
          isVisible(5) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12">Imagina finalmente voltar a respirar.</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>Imagine acordar sem sentir que passou a noite inteira sobrevivendo.</p>
            <p>Ter clareza sobre o que fazer.</p>
            <p>Parar de pesquisar desesperadamente às 2 da manhã.</p>
            <p>Conseguir entender os sinais do seu bebê.</p>
            <p>Dormir melhor.</p>
            <p>Se sentir mais presente.</p>
            <p>Mais leve.</p>
            <p>Mais segura.</p>
            <p className="font-semibold text-foreground">
              E, principalmente, não estar mais sozinha nesse processo.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHAT CHANGES ===== */}
      <section
        data-section="6"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(6) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12 text-center">O que muda para você</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "📋", title: "Plano personalizado", desc: "Adaptado ao seu bebê, sua rotina, sua realidade" },
              { icon: "🌙", title: "Você não fica sozinha às 2 da manhã", desc: "Suporte real quando você mais precisa" },
              { icon: "🧠", title: "Aprende a ler os sinais do bebê", desc: "Entender o que seu bebê realmente precisa" },
              { icon: "🔄", title: "Preparada para regressões", desc: "Sabe como lidar com mudanças e desafios" },
            ].map((item, i) => (
              <div
                key={i}
                className={`card-glass transition-all duration-500 delay-${i * 100} hover:shadow-soft-lg ${
                  isVisible(6) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 card-glass">
            <div className="text-3xl mb-3">💤</div>
            <h3 className="font-semibold text-lg mb-2">Noites melhores para toda família</h3>
            <p className="text-foreground/70">Quando o bebê dorme bem, todos dormem bem</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: WHAT'S INCLUDED ===== */}
      <section
        data-section="7"
        className={`py-20 md:py-32 bg-secondary/5 transition-all duration-700 ${
          isVisible(7) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12 text-center">O que está incluído</h2>
          <div className="space-y-4">
            {[
              "Diagnóstico inicial completo do sono do seu bebê",
              "Plano personalizado 100% adaptado ao seu caso",
              "Encontros ao vivo semanais com Kricia",
              "Suporte contínuo para cada ajuste no caminho",
              "Acesso ao curso de 1 ano sobre sono infantil",
              "Tutor IA disponível 24h para dúvidas rápidas",
            ].map((item, i) => (
              <div
                key={i}
                className={`card-glass flex gap-4 transition-all duration-500 delay-${i * 100} ${
                  isVisible(7) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-accent text-2xl flex-shrink-0">✓</div>
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FOR WHOM ===== */}
      <section
        data-section="8"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(8) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12 text-center">Para quem é (e para quem não é)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Whom */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-accent">Para quem é:</h3>
              <div className="space-y-3">
                {[
                  "Mães que querem um método gentil e respeitoso",
                  "Bebês de 0 a 36 meses",
                  "Famílias que buscam personalização real",
                  "Quem quer entender o bebê, não apenas 'resolver'",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <p className="text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not For Whom */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Não é para:</h3>
              <div className="space-y-3">
                {[
                  "Quem busca soluções rápidas e mágicas",
                  "Quem quer deixar o bebê chorar até dormir",
                  "Quem não está disposto a fazer ajustes",
                  "Quem precisa de resultado em 3 dias",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-foreground/40 flex-shrink-0">✗</span>
                    <p className="text-foreground/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: ABOUT KRICIA ===== */}
      <section
        data-section="9"
        className={`py-20 md:py-32 bg-secondary/5 transition-all duration-700 ${
          isVisible(9) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12">Você não precisa fazer isso sozinha.</h2>
          <div className="card-glass">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-xl mb-4">Kricia</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Mãe de gêmeos, especialista em sono infantil com formação aprovada pelo MEC, e vivendo na Austrália. Acompanhou centenas de famílias em sua jornada para noites melhores.
                </p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>✓ Experiência real como mãe</p>
                  <p>✓ Especialização aprovada pelo MEC</p>
                  <p>✓ Centenas de famílias acompanhadas</p>
                  <p>✓ Vivendo na Austrália</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: TESTIMONIALS ===== */}
      <section
        data-section="10"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(10) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12 text-center">O que as famílias dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marina",
                before: "Bebê acordava 6 vezes por noite",
                after: "Agora dorme 7 horas seguidas",
                emotion: "Finalmente respiro",
              },
              {
                name: "Juliana",
                before: "Tentei tudo, nada funcionava",
                after: "Entendi o que meu bebê realmente precisava",
                emotion: "Transformou minha vida",
              },
              {
                name: "Fernanda",
                before: "Me sentia sozinha e perdida",
                after: "Tenho suporte real e orientação clara",
                emotion: "Não estou mais sozinha",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`card-glass transition-all duration-500 delay-${i * 100} ${
                  isVisible(10) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 mb-4">
                  <span className="font-semibold text-foreground">Antes:</span> {testimonial.before}
                </p>
                <p className="text-sm text-foreground/70 mb-4">
                  <span className="font-semibold text-foreground">Depois:</span> {testimonial.after}
                </p>
                <p className="font-semibold text-accent italic">{testimonial.emotion}</p>
                <p className="text-sm text-foreground/60 mt-4">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: OFFER ===== */}
      <section
        data-section="11"
        className={`py-20 md:py-32 bg-accent/5 transition-all duration-700 ${
          isVisible(11) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl text-center">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-8">O acompanhamento completo para noites mais leves.</h2>
          <div className="card-glass mb-10">
            <div className="text-5xl font-bold text-accent mb-4">R$ 297</div>
            <p className="text-foreground/70 mb-6">Até 12x no cartão</p>
            <p className="text-sm text-foreground/60 italic">
              Vagas limitadas para manter acompanhamento próximo.
            </p>
          </div>
          <Button className="btn-premium text-lg mb-8">
            Quero começar <ChevronRight size={20} />
          </Button>
          <p className="text-sm text-foreground/60">
            Sem compromisso. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </section>

      {/* ===== SECTION 12: FAQ ===== */}
      <section
        data-section="12"
        className={`py-20 md:py-32 transition-all duration-700 ${
          isVisible(12) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-12 text-center">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                question: "Funciona para bebê que mama no peito?",
                answer:
                  "Sim! O método é totalmente adaptável para bebês que amamentam. Kricia trabalha com a realidade de cada família.",
              },
              {
                question: "E se meu bebê acorda muitas vezes?",
                answer:
                  "Esse é exatamente o tipo de situação que o acompanhamento resolve. Vamos entender o que está causando os despertares.",
              },
              {
                question: "Serve para recém-nascido?",
                answer:
                  "O método é indicado a partir de 3 meses. Para recém-nascidos, o foco é diferente e Kricia pode orientar sobre isso.",
              },
              {
                question: "Já tentei de tudo, ainda vale?",
                answer:
                  "Sim! Muitas famílias chegam assim. O diferencial é a personalização e o suporte contínuo.",
              },
              {
                question: "Tenho gêmeos, funciona?",
                answer:
                  "Funciona! Kricia é mãe de gêmeos e sabe exatamente os desafios. O plano é adaptado para essa realidade.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="card-glass border-0">
                <AccordionTrigger className="hover:no-underline font-semibold text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== SECTION 13: FINAL CTA ===== */}
      <section
        data-section="13"
        className={`py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-accent/5 transition-all duration-700 ${
          isVisible(13) ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl text-center">
          <h2 style={{ fontFamily: 'var(--font-display)' }} className="mb-8">Você não precisa continuar fazendo isso sozinha.</h2>
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Existe um caminho gentil, respeitoso e personalizado para noites melhores — para o seu bebê e para você.
          </p>
          <Button className="btn-premium text-lg mb-12">
            Quero o acompanhamento completo <ChevronRight size={20} />
          </Button>
          <p className="text-sm text-foreground/60">
            Vamos começar sua jornada para noites mais leves.
          </p>
        </div>
      </section>

      {/* Add bottom padding for mobile CTA */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
