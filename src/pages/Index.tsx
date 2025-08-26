import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, TrendingDown, Users, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "@/assets/energy-savings-hero.jpg";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header / Navigation */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Společně levněji</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Služby</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Jak to funguje</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">O nás</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Společně levněji – Vaše energie pod dohledem
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ušetřete na energiích bez složitého papírování.
                  Vyjednáme za vás férové ceny energií a pohlídáme, abyste zbytečně nepřepláceli.
                  Tento servis vás stojí jen <span className="text-secondary font-semibold">500 Kč ročně</span> za odběrné místo.
                </p>
                <Button onClick={scrollToContact} variant="hero" size="lg" className="text-lg">
                  Chci ušetřit
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Úspora energií - moderní dům s solárními panely" 
                  className="rounded-lg shadow-glow w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-soft">
                  <p className="font-semibold">Jen 500 Kč/rok</p>
                  <p className="text-sm">za odběrné místo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Co pro vás děláme</h2>
            <Card className="shadow-soft border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Hlídáme a vyjednáváme férové ceny energií
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Sledujeme termíny vašich fixací.",
                    "Vyjednáváme individuální nabídky přímo s dodavateli energií.",
                    "Pokud je to výhodné, doporučíme změnu dodavatele.",
                    "Vždy vám posíláme přehlednou kalkulaci e-mailem.",
                    "Vy rozhodujete a podepisujete nabídky přímo s dodavatelem."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Jak to funguje</h2>
            <h3 className="text-xl font-semibold text-center mb-8 text-primary">Jednoduše ve 4 krocích</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Pošlete nám své údaje",
                  icon: <Mail className="h-8 w-8" />,
                  description: "Vyplníte jednoduchý formulář s vašimi údaji o odběru energií."
                },
                {
                  step: "2",
                  title: "Zařadíme vás do databáze",
                  icon: <Users className="h-8 w-8" />,
                  description: "Vaše údaje bezpečně uložíme a připravíme monitoring."
                },
                {
                  step: "3",
                  title: "Hlídáme termíny a oslovujeme dodavatele",
                  icon: <Clock className="h-8 w-8" />,
                  description: "Automaticky sledujeme termíny fixací a vyjednáváme nejlepší ceny."
                },
                {
                  step: "4",
                  title: "Pošleme vám nabídky a přehled úspor",
                  icon: <TrendingDown className="h-8 w-8" />,
                  description: "Dostanete přehledné srovnání a kalkulace úspor e-mailem."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
                      {item.icon}
                    </div>
                    <div className="text-4xl font-bold text-secondary mb-2">{item.step}</div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Proč si vybrat právě nás?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Jednoduchý a férový roční poplatek",
                  description: "500 Kč za odběrné místo",
                  highlight: true
                },
                {
                  title: "Žádné složité smlouvy",
                  description: "jen hlídání a vyjednávání ve váš prospěch"
                },
                {
                  title: "Transparentní komunikace",
                  description: "každé jednání shrneme v přehledném e-mailu"
                },
                {
                  title: "Bez rizika",
                  description: "pokud nenajdeme minimálně 1 000 Kč roční úspory, první rok máte zdarma",
                  highlight: true
                }
              ].map((item, index) => (
                <Card key={index} className={`shadow-soft ${item.highlight ? 'border-secondary shadow-energy' : ''}`}>
                  <CardHeader>
                    <CardTitle className={item.highlight ? 'text-secondary' : 'text-primary'}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">O nás</h2>
            <h3 className="text-xl font-semibold mb-6 text-primary">Proč tuto službu děláme?</h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Začali jsme pomáhat rodině a známým vyjednávat férové ceny energií. 
                Viděli jsme, kolik lidí zbytečně přeplácí. Proto jsme se rozhodli 
                tuto službu nabídnout všem domácnostem, které chtějí ušetřit bez starostí.
              </p>
              <p className="text-primary font-semibold">
                Komunikujeme jen s dodavateli. Vy sami rozhodujete a podepisujete.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Kontakt</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Společně levněji – Vaše energie pod dohledem</h3>
            <div className="space-y-2">
              <p>E-mail: info@spolecnelevneji.cz</p>
              <p>IČ: 12345678 | Nejsem plátcem DPH dle § 6 zákona č. 235/2004 Sb., o DPH</p>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-glow">
              <p className="text-primary-glow">
                Nedovolte svému dodavateli energií tiše zneužívat to, že se neorientujete 
                v nepřehledných fakturách a nabídkách.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;