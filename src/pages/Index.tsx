import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, TrendingDown, Users, Mail, Menu, X } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "@/assets/energy-savings-hero.jpg";

const Index = () => {
  console.log("Index component rendering");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-page">{/* změnil jsem pozadí z gradient-subtle na gradient-page */}
      {/* Header / Navigation */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png" 
                alt="Společně levněji logo" 
                className="h-12 w-auto rounded-full bg-transparent"
              />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Služby</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Jak to funguje</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">O nás</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
              <nav className="container mx-auto px-4 py-4 space-y-2">
                <a 
                  href="#services" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Služby
                </a>
                <a 
                  href="#how-it-works" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jak to funguje
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  O nás
                </a>
                <a 
                  href="#contact" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  <span className="block text-primary mb-2">Společně levněji</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                    Vaše energie pod dohledem
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ušetřete na energiích bez složitého papírování.
                  <strong className="text-primary block mt-2">Primárně vyjednáváme u vašeho stávajícího dodavatele</strong> 
                  <span className="block">Změnu navrhujeme pouze pokud se nepodaří dostat rozumnou a férovou individuální nabídku.</span>
                </p>
                
                {/* Price highlight */}
                <div style={{ backgroundImage: 'var(--gradient-primary)' }} className="text-primary-foreground p-4 md:p-6 rounded-xl shadow-glow max-w-md mx-auto lg:mx-0">
                  <div className="text-center">
                    <p className="text-base md:text-lg font-medium mb-2">Náš poplatek:</p>
                    <p className="text-3xl md:text-4xl font-bold mb-1">600 Kč</p>
                    <p className="text-base md:text-lg opacity-90">ročně/odběrné místo (50 Kč měsíčně)</p>
                    <p className="text-xs md:text-sm opacity-75 mt-3 border-t border-white/20 pt-3">
                      💡 První faktura až po dosažené úspoře<br/>
                      🔄 Každá další roční faktura jako předplacení dalšího roku<br/>
                      ✋ Nechcete pokračovat? Stačí přestat platit<br/>
                      <strong className="opacity-100">🎯 Nenajdeme úsporu? První rok ZDARMA!</strong>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    onClick={scrollToContact} 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-8 py-3"
                    style={{ backgroundImage: 'var(--gradient-hero)' }}
                  >
                    Chci ušetřit
                  </Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <img 
                  src={heroImage} 
                  alt="Úspora energií - moderní dům s solárními panely" 
                  className="rounded-lg shadow-glow w-full h-auto max-h-96 md:max-h-none object-cover"
                />
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
                <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-primary font-semibold mb-2">✓ Nejdříve se vždy snažíme vyjednat u vašeho stávajícího dodavatele</p>
                  <p className="text-sm text-muted-foreground">
                    Změnu dodavatele navrhujeme pouze v případě, kdy se nepodaří dostat rozumnou a férovou individuální nabídku od stávajícího dodavatele. 
                    Takto vám ušetříme maximum starostí s papírováním.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sledujeme termíny vašich fixací.",
                    "Vyjednáváme individuální nabídky primárně u vašeho stávajícího dodavatele.",
                    "Změnu dodavatele navrhujeme pouze pokud se nepodaří získat férovou individuální nabídku.",
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
                  description: "Vyplníte jednoduchý formulář a kontaktujeme vás pro případné doplnění informací."
                },
                {
                  step: "2",
                  title: "Zařadíme vás do databáze",
                  icon: <Users className="h-8 w-8" />,
                  description: "Vaše údaje uložíme do systému a nastavíme monitoring termínů fixací."
                },
                {
                  step: "3",
                  title: "Hlídáme termíny a oslovujeme dodavatele",
                  icon: <Clock className="h-8 w-8" />,
                  description: "Automaticky sledujeme termíny fixací a vyjednáváme férové ceny."
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
                    <div style={{ backgroundImage: 'var(--gradient-primary)' }} className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground mb-4">
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
                  description: "Pouze 600 Kč za odběrné místo ročně (50 Kč měsíčně) • Žádné skryté poplatky • Platíte jen když ušetříme",
                  highlight: true
                },
                {
                  title: "Maximální flexibilita",
                  description: "první faktura až po dosažené úspoře • každá další roční faktura jako předplacení dalšího roku • nechcete pokračovat? Stačí přestat platit",
                  highlight: true
                },
                {
                  title: "Minimální papírování",
                  description: "primárně vyjednáváme u vašeho stávajícího dodavatele, změnu navrhujeme pouze pokud nelze získat férovou nabídku"
                },
                {
                  title: "Transparentní komunikace",
                  description: "každé jednání shrneme v přehledném e-mailu"
                },
                {
                  title: "Bez rizika",
                  description: "pokud nenajdeme minimálně 1 200 Kč roční úspory, první rok máte zdarma"
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
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/lovable-uploads/efaeae31-0aa8-4a27-bae2-0bc5d0274196.png" 
                alt="Společně levněji symbol" 
                className="h-16 w-16"
              />
              <h3 className="text-2xl font-bold">Společně levněji</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-primary-glow">Kontaktní údaje</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Jakub Melka</strong></p>
                  <p>IČO: 22516280</p>
                  <p>Nejsem plátcem DPH dle § 6 zákona č. 235/2004 Sb., o DPH</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-primary-glow">Spojení</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Tel:</strong> +420 734 106 233<br/>
                    <span className="text-xs opacity-90">(volejte prosím po 15. hodině, nebo o víkendu)</span>
                  </p>
                  <p><strong>E-mail:</strong> info@spolecnelevneji.cz</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-glow">
              <p className="text-primary-glow text-sm leading-relaxed">
                Nedovolte svému dodavateli energií tiše zneužívat to, že se neorientujete 
                v nepřehledných fakturách a nabídkách. Vyjednáme za vás férové ceny a ušetříme vám starosti.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;