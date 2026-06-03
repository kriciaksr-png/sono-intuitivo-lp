import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Heart, Moon, Users, Zap, CheckCircle2, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Soft Luxury Minimalism
 * - Gradients: Bege → Rosa → Roxo suave
 * - Tipografia: Playfair Display (headlines), corpo limpo
 * - Imagens: Editorial, emocional, autêntico
 * - Paleta: Bege, Rosa, Roxo, Branco
 * - Profundidade: Overlays, layering, sombras suaves
 */

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 31,
    seconds: 42,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="min-h-screen bg-white">
      {/* STICKY HEADER - Urgency */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 border-b border-rose-200 py-3 px-4 text-center">
        <p className="text-sm font-medium text-slate-700">
          ✨ Vagas limitadas para manter acompanhamento próximo • Oferta especial para as primeiras 5 mamães
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/kricia-hero-mother-baby-UP3LGAbPGxptb5jfo9tkUX.webp')",
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-50/40 to-purple-100/60" />

        {/* Content */}
        <div className="relative z-10 container max-w-2xl mx-auto px-4 py-20 text-center">
          {/* Decorative element */}
          <div className="inline-block mb-6 text-rose-300">
            <Moon className="w-8 h-8" />
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            O acompanhamento completo para o sono do seu bebê
          </h1>

          <p className="text-xl text-slate-700 mb-8 font-light leading-relaxed">
            Gentil. Personalizado. Com você em cada etapa — sem precisar resolver isso sozinha.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-12 text-sm text-slate-600">
            <Users className="w-4 h-4 text-rose-400" />
            <span>✨ Centenas de famílias acompanhadas</span>
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://pay.hotmart.com/G104765645W?off=ho7iqbpt" target="_blank" rel="noopener noreferrer">
              Quero começar →
            </a>
          </Button>

          {/* Countdown */}
          <div className="mt-12 flex justify-center gap-4">
            <div className="bg-white/60 backdrop-blur rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-slate-900">{formatTime(timeLeft.hours)}</div>
              <div className="text-xs text-slate-600">Horas</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-slate-900">{formatTime(timeLeft.minutes)}</div>
              <div className="text-xs text-slate-600">Minutos</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-lg px-4 py-3 text-center">
              <div className="text-2xl font-bold text-slate-900">{formatTime(timeLeft.seconds)}</div>
              <div className="text-xs text-slate-600">Segundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Eu sou a Kricia, sua consultora do sono...
              </h2>

              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mãe de gêmeos, especialista em sono infantil com formação reconhecida. Vivendo na Austrália, acompanhei centenas de famílias em sua jornada para noites melhores.
              </p>

              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mas antes disso, eu estava exatamente onde você está agora.
              </p>

              <p className="text-lg text-slate-700 mb-4 leading-relaxed font-medium text-rose-700">
                Gêmeos que não dormiam. Noites sem fim. Pesquisa desesperada às 2 da manhã. Culpa. Exaustão. A sensação de estar sozinha naquilo.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                Até que descobri que o problema não era eu — era que ninguém tinha criado um plano realmente adaptado ao meu bebê, à minha realidade, aos meus valores.
              </p>

              {/* Credentials */}
              <div className="mt-8 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                  <span>Mãe de gêmeos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                  <span>Especialização em sono infantil</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                  <span>Centenas de famílias acompanhadas</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className="rounded-2xl h-96 bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/kricia-founder-portrait-oHNx4aCrjzddTDNzj6mg4o.webp')",
              }}
            />
          </div>
        </div>
      </section>

      {/* PAIN POINTS - EXHAUSTION */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div
                className="rounded-2xl h-96 bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/kricia-exhaustion-moment-QscGYuowwRhoNFPkvCcDhH.webp')",
                }}
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Você está exausta.
              </h2>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Noites sem dormir. Dias inteiros em piloto automático. Aquele cansaço que penetra os ossos e não sai nem com café.
              </p>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Você tenta tudo. Lê artigos. Segue dicas. Mas nada funciona. E aí vem a culpa — aquela voz que sussurra que você está fazendo algo errado.
              </p>

              <p className="text-lg text-slate-700 font-medium text-rose-700">
                Mas aqui está a verdade: você não está fazendo nada errado. Seu bebê só precisa de um plano que funcione para ele.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS - VALIDATION */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Não é porque você falhou.
              </h2>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Você não é uma mãe ruim. Seu bebê não é "difícil" demais. Não há nada de errado com você ou com ele.
              </p>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                O que falta é um plano que realmente entenda o seu bebê. Sua idade. Seu temperamento. Suas necessidades específicas.
              </p>

              <p className="text-lg text-slate-700 font-medium text-rose-700">
                Porque sono infantil não é ciência de foguete — é ciência do seu bebê.
              </p>
            </div>

            {/* Image */}
            <div>
              <div
                className="rounded-2xl h-96 bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/kricia-rested-moment-doWv2j8yUyuBWTduGRCK2J.webp')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* METHOD - THE APPROACH */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Um método gentil, mas com direção.
            </h2>
            <p className="text-xl text-slate-700 font-light">
              Sono infantil não precisa ser rígido nem baseado em deixar chorar.
            </p>
          </div>

          {/* The 4 Pillars */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🧠",
                title: "Desenvolvimento Infantil",
                desc: "Entender o que seu bebê realmente precisa em cada fase",
              },
              {
                icon: "🌙",
                title: "Ciência do Sono",
                desc: "Baseado em pesquisa e evidências, não em achismos",
              },
              {
                icon: "👶",
                title: "Observação do Temperamento",
                desc: "Respeitando a personalidade única do seu bebê",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Realidade da Família",
                desc: "Adaptado à sua rotina, valores e estilo de vida",
              },
            ].map((pillar, i) => (
              <Card
                key={i}
                className="p-6 bg-white/70 backdrop-blur border-rose-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-slate-700">{pillar.desc}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg text-slate-700 font-light">
            Tudo aplicado ao seu bebê — e não a um modelo pronto da internet.
          </p>
        </div>
      </section>

      {/* FUTURE PACING */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div
                className="rounded-2xl h-96 bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663251665657/eQg5u4P987cKzDfMCQYeRd/kricia-rested-moment-doWv2j8yUyuBWTduGRCK2J.webp')",
                }}
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                Imagina finalmente voltar a respirar.
              </h2>

              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>✨ Acordar sem sentir que passou a noite inteira sobrevivendo.</p>
                <p>✨ Ter clareza sobre o que fazer.</p>
                <p>✨ Parar de pesquisar desesperadamente às 2 da manhã.</p>
                <p>✨ Conseguir entender os sinais do seu bebê.</p>
                <p>✨ Dormir melhor.</p>
                <p>✨ Se sentir mais presente.</p>
                <p className="font-medium text-rose-700">
                  ✨ Mais leve. Mais segura. E, principalmente, não estar mais sozinha nesse processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 text-center mb-16">
            O que você recebe
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Plano 100% Personalizado",
                desc: "Criado especificamente para o seu bebê e sua família",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "4 Encontros ao Vivo em Grupo",
                desc: "Semanais com Kricia para tirar dúvidas e ajustes",
              },
              {
                icon: <Moon className="w-6 h-6" />,
                title: "Acesso à Plataforma Completa",
                desc: "Aulas, estratégias e materiais por 1 ano",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Suporte Contínuo",
                desc: "Dentro da plataforma durante o período da mentoria",
              },
            ].map((benefit, i) => (
              <Card
                key={i}
                className="p-6 bg-white border-rose-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-rose-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-700">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHOM / NOT FOR WHOM */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 text-center mb-16">
            Para quem é (e para quem não é)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FOR WHOM */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Para quem é
              </h3>
              <ul className="space-y-4">
                {[
                  "Mães que querem um método gentil e respeitoso",
                  "Bebês de 0 a 36 meses",
                  "Famílias que buscam personalização real",
                  "Quem quer entender o bebê, não apenas 'resolver'",
                  "Quem valoriza suporte contínuo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT FOR WHOM */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                Não é para
              </h3>
              <ul className="space-y-4">
                {[
                  "Quem busca soluções rápidas e mágicas",
                  "Quem quer deixar o bebê chorar até dormir",
                  "Quem não está disposto a fazer ajustes",
                  "Quem precisa de resultado em 3 dias",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 text-center mb-16">
            O que as famílias dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marina",
                before: "Bebê acordava 6 vezes por noite",
                after: "Agora dorme 7 horas seguidas",
                quote: "Finalmente respiro. Sou uma mãe melhor.",
              },
              {
                name: "Juliana",
                before: "Completamente exausta",
                after: "Recuperei minha energia",
                quote: "Entendi meu bebê de verdade pela primeira vez.",
              },
              {
                name: "Carolina",
                before: "Dependência total do colo",
                after: "Dorme sozinha e tranquila",
                quote: "Não é mágica, é método. E funciona.",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-white border-rose-200">
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold">Antes:</span> {testimonial.before}
                  </p>
                  <p className="text-sm text-green-600 mb-3">
                    <span className="font-semibold">Depois:</span> {testimonial.after}
                  </p>
                </div>
                <p className="text-slate-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-slate-900">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 text-center mb-16">
            Perguntas frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Funciona para bebê que mama no peito?",
                a: "Sim! O método funciona para qualquer tipo de alimentação. Adaptamos as estratégias para a realidade do seu bebê.",
              },
              {
                q: "E se meu bebê acorda muitas vezes?",
                a: "Esse é exatamente o tipo de desafio que o método resolve. Vamos entender por que está acontecendo e criar um plano específico.",
              },
              {
                q: "Serve para recém-nascido?",
                a: "Sim, mas com adaptações. Recém-nascidos têm necessidades diferentes. Trabalhamos com bebês a partir de 0 meses.",
              },
              {
                q: "Já tentei de tudo, ainda vale?",
                a: "Vale muito! Muitas mães chegam exaustas de ter tentado tudo. O método é justamente para quem precisa de algo diferente.",
              },
              {
                q: "Tenho gêmeos, funciona?",
                a: "Funciona! Kricia é mãe de gêmeos e entende os desafios únicos. O plano é personalizado para cada bebê.",
              },
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-gradient-to-r from-rose-50 to-purple-50 border-rose-200">
                <div className="flex items-start gap-4">
                  <ChevronDown className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                    <p className="text-slate-700">{item.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 text-center mb-4">
            O acompanhamento completo para noites mais leves
          </h2>
          <p className="text-center text-slate-700 mb-12">
            Vagas limitadas para manter acompanhamento próximo
          </p>

          <Card className="p-8 bg-white border-rose-300 shadow-lg">
            <div className="text-center mb-8">
              <div className="text-lg text-slate-700 mb-2">12 x de <span className="text-2xl font-bold text-slate-900">R$ 30,72</span> *</div>
              <div className="text-sm text-slate-600 mb-3">Ou <span className="text-3xl font-bold text-slate-900">R$ 297,00</span> à vista</div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Plano de sono 100% personalizado",
                "Acesso à plataforma por 1 ano",
                "4 encontros ao vivo em grupo",
                "Suporte contínuo na plataforma",
                "Acesso ao Curso Prático Sono Intuitivo",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-full py-6 text-lg font-medium mb-4"
            >
              <a href="https://pay.hotmart.com/G104765645W?off=ho7iqbpt" target="_blank" rel="noopener noreferrer">
                Quero o acompanhamento completo →
              </a>
            </Button>

            <p className="text-center text-sm text-slate-600">
              Garantia de 7 dias. Se não gostar, devolvemos seu dinheiro.
            </p>
          </Card>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
            Você não precisa continuar fazendo isso sozinha.
          </h2>

          <p className="text-xl text-slate-700 mb-12 font-light">
            Existe um caminho gentil, respeitoso e personalizado para noites melhores — para o seu bebê e para você.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://pay.hotmart.com/G104765645W?off=ho7iqbpt" target="_blank" rel="noopener noreferrer">
              Começar agora →
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-sm text-slate-400">
          © 2026 Mentoria Sono Intuitivo. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
