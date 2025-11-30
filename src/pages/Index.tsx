import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, TrendingDown, Users, Mail, Menu, X, AlertTriangle, ExternalLink, Quote } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import heroImage from "@/assets/energy-savings-hero.jpg";

const AIRTABLE_FORM_URL = "https://airtable.com/app5b1mae9Kf5qvLE/shrOyujug320j2coS";

const Index = () => {
  console.log("Index component rendering");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-page">
      {/* Header / Navigation */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png" 
                alt="Společně levněji logo - symbol pro úspory energií a vyjednávání cen" 
                className="h-12 w-auto rounded-full bg-transparent"
                loading="lazy"
                width="48"
                height="48"
              />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Jak to funguje</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">O mně</a>
              <a href="#why-paid" className="text-foreground hover:text-primary transition-colors">Proč je služba placená</a>
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
                  Jak to funguje
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  O mně
                </a>
                <a 
                  href="#why-paid" 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proč je služba placená
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
                
                {/* Key benefits - shortened */}
                <div className="space-y-3 text-lg text-foreground max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Hlídám fixace u odběrných míst</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Vyjednám ceny jako pro nového zákazníka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span><strong className="text-primary">300 Kč/rok = 25 Kč/měsíc</strong></span>
                  </div>
                </div>

                {/* Stačí 1 krok section */}
                <Card className="bg-background/50 border-primary/30 max-w-xl mx-auto lg:mx-0">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold text-primary mb-3">Stačí 1 krok:</h3>
                    <p className="text-foreground mb-4">
                      <strong>1. Vyplň formulář</strong> → vše (včetně plné moci) je uvnitř!
                    </p>
                    <div className="flex items-start gap-2 bg-secondary/10 border border-secondary/30 rounded-lg p-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground">
                        <strong>PLNÁ MOC</strong> = jen pro komunikaci s dodavateli.<br/>
                        NEMŮŽU nic podepisovat, ani uzavírat závazky za Vás!
                      </p>
                    </div>
                    <Button 
                      variant="energy" 
                      size="lg" 
                      className="w-full text-lg py-6 font-bold"
                      asChild
                    >
                      <a 
                        href={AIRTABLE_FORM_URL}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        ZAČÍT ŠETŘIT HNED
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Garance */}
                <div style={{ backgroundImage: 'var(--gradient-primary)' }} className="text-primary-foreground p-4 md:p-5 rounded-xl shadow-glow max-w-xl mx-auto lg:mx-0">
                  <p className="text-center text-lg md:text-xl font-bold">
                    🎯 GARANCE: Vyjednám min. 600 Kč/rok úsporu<br/>
                    nebo PRVNÍ ROK ZDARMA!
                  </p>
                </div>

                {/* GDPR info */}
                <div className="bg-muted/50 border border-border rounded-lg p-4 text-xs text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  <p className="font-semibold text-foreground mb-2">INFORMACE O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ (GDPR)</p>
                  <p>Správce: Jakub Melka, IČO 22516280</p>
                  <p>Účel: správa odběrných míst</p>
                  <p>Příjemci: dodavatelé, Airtable.com</p>
                  <p className="mt-1">
                    <a href="mailto:info@spolecnelevneji.cz" className="text-primary hover:underline">
                      info@spolecnelevneji.cz
                    </a>
                  </p>
                </div>

                {/* Testimonials */}
                <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-start gap-3 bg-background/80 border border-border rounded-lg p-4">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground italic">"Ušetřil jsem 1 200 Kč/rok na domě"</p>
                      <p className="text-sm text-muted-foreground mt-1">— Jiří D., Prostějov</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-background/80 border border-border rounded-lg p-4">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground italic">"3 odběrná místa bez starostí"</p>
                      <p className="text-sm text-muted-foreground mt-1">— Petr F., firma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <img 
                  src={heroImage} 
                  alt="Úspora energií - moderní dům s fotovoltaickými panely a úsporným osvětlením pro domácnosti" 
                  className="rounded-lg shadow-glow w-full h-auto max-h-96 md:max-h-none object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Combined with How it Works */}
        <section id="services" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Co pro vás dělám a jak to funguje</h2>
            
            {/* Main Service Description */}
            <Card className="shadow-soft border-primary/20 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Hlídám a vyjednávám výhodné ceny energií
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-primary font-semibold mb-2">✓ Nejdříve se vždy snažím vyjednat u vašeho stávajícího dodavatele</p>
                  <p className="text-sm text-muted-foreground">
                    Změnu dodavatele navrhuji pouze v případě, kdy se nepodaří dostat rozumnou individuální nabídku od stávajícího dodavatele. 
                    Takto vám ušetříme maximum starostí s papírováním.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sleduji termíny vašich fixací.",
                    "Vyjednávám individuální nabídky primárně u vašeho stávajícího dodavatele.",
                    "Změnu dodavatele navrhuji pouze pokud se nepodaří získat výhodnou individuální nabídku.",
                    "Vždy vám posílám přehlednou kalkulaci e-mailem.",
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

            {/* Process Steps */}
            <h3 className="text-xl font-semibold text-center mb-8 text-primary">Jednoduše ve 4 krocích</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Pošlete nám své údaje",
                  icon: <Mail className="h-8 w-8" />,
                  description: "Vyplníte jednoduchý formulář a následně vás kontaktuji pro případné doplnění informací."
                },
                {
                  step: "2",
                  title: "Zařadím vás do databáze",
                  icon: <Users className="h-8 w-8" />,
                  description: "Vaše údaje uložím do systému a nastavím monitoring termínů fixací."
                },
                {
                  step: "3",
                  title: "Hlídám termíny a oslovuji dodavatele",
                  icon: <Clock className="h-8 w-8" />,
                  description: "Automaticky sleduji termíny fixací a vyjednávám nejlepší ceny."
                },
                {
                  step: "4",
                  title: "Pošlu vám nabídky a přehled úspor",
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

        {/* About */}
        <section id="about" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">O mně</h2>
            <h3 className="text-xl font-semibold mb-6 text-primary">Proč tuto službu dělám?</h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Začal jsem pomáhat rodině a známým vyjednávat výhodnější ceny energií. 
                Viděl jsem, kolik lidí zbytečně přeplácí. Proto jsem se rozhodl 
                tuto službu nabídnout všem domácnostem, které chtějí ušetřit bez starostí.
              </p>
              <p className="text-primary font-semibold">
                Já komunikuji s dodavateli. Vy sami rozhodujete a podepisujete.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Proč si vybrat právě tuto službu?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Jednoduchý a transparentní roční poplatek",
                  description: "Pouze 300 Kč za odběrné místo ročně (25 Kč měsíčně) • Žádné skryté poplatky • Platíte jen když ušetříme",
                  highlight: true
                },
                {
                  title: "Maximální flexibilita",
                  description: "první faktura až po dosažené úspoře • každá další roční faktura jako předplacení dalšího roku • nechcete pokračovat? Stačí přestat platit",
                  highlight: true
                },
                {
                  title: "Minimální papírování",
                  description: "primárně vyjednávám u vašeho stávajícího dodavatele, změnu navrhuji pouze pokud nelze získat výhodnou nabídku"
                },
                {
                  title: "Transparentní komunikace",
                  description: "každé jednání shrnu v přehledném e-mailu"
                },
                {
                  title: "Bez rizika",
                  description: "pokud neušetříme minimálně 600 Kč ročně, první rok máte zdarma"
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

        {/* Why is the service paid */}
        <section id="why-paid" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Proč je služba placená?</h2>
            <Card className="shadow-soft border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Na rozdíl od služeb „zdarma", kde výdělek poradce spočívá hlavně v provizi za přetahování zákazníků od dodavatele k dodavateli, 
                    <strong className="text-primary"> já pracuji výhradně pro vás</strong>. Mojí prioritou je vždy vyjednat nejlepší podmínky 
                    u vašeho stávajícího dodavatele, protože často lze cenu snížit ještě před koncem fixace a bez sankcí.
                  </p>
                  <p>
                    Změnu dodavatele doporučím až tehdy, když stávající dodavatel není ochoten nabídnout rozumnou cenu, 
                    a vždy vám připravím přehledný report s porovnáním obou možností.
                  </p>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mt-6">
                    <p className="text-secondary font-semibold">
                      💡 Když je něco „zdarma", obvykle to znamená, že nejste zákazník, ale produkt – vaše údaje nebo smlouvy jsou obchodovány. 
                      Volím transparentní roční poplatek, abych mohl být nezávislý a hájit vaše zájmy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Registration */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Registrace</h2>
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
                alt="Společně levněji ikona - symbol služby hlídání cen energií" 
                className="h-16 w-16"
                loading="lazy"
                width="64"
                height="64"
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
                © 2024 Společně levněji - Vaše energie pod dohledem
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
