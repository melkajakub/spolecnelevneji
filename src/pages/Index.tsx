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
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  <span className="block text-primary mb-2">Společně levněji</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                    První faktura až po úspěšném vyjednávání.
                  </span>
                  <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-1">
                    Pak 300 Kč/rok za dohled.
                  </span>
                </h1>
                
                {/* Úspory z praxe */}
                <Card className="bg-background/50 border-primary/30 max-w-xl mx-auto lg:mx-0">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold text-primary mb-4">📊 Úspory z mé praxe:</h3>
                    <div className="space-y-3 text-foreground">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Špatná distribuční sazba → <strong className="text-primary">úspora 800 Kč/rok</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Plyn 1 700 Kč/MWh → vyjednáno <strong className="text-primary">900 Kč/MWh</strong></span>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Elektřina 3 900 Kč/MWh → <strong className="text-primary">2 400 Kč/MWh</strong></span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Jak to funguje - 6 kroků */}
                <Card className="bg-background/50 border-primary/30 max-w-xl mx-auto lg:mx-0">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold text-primary mb-4">Jak to funguje:</h3>
                    <ol className="space-y-3 text-foreground list-none">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">1.</span>
                        <span>Vyplníte formulář + plná moc <span className="text-muted-foreground text-sm">(jen pro komunikaci)</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">2.</span>
                        <span>Vyjednám férové ceny <strong>U VÁŠHO DODAVATELE</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">3.</span>
                        <span>Pokud se nedohodne → nechám udělat <strong>NABÍDKY KONKURENCE</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">4.</span>
                        <span>Pošlu <strong>POROVNÁNÍ</strong> + dopady vašeho rozhodnutí</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">5.</span>
                        <span>Podepisujete <strong>PŘÍMO S DODAVATELEM</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-primary flex-shrink-0">6.</span>
                        <span>Faktura až <strong>PO ÚSPĚŠNÉM VYJEDNÁNÍ</strong></span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="max-w-xl mx-auto lg:mx-0">
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
                      ZAČÍT
                    </a>
                  </Button>
                </div>

                {/* Záruka */}
                <div style={{ backgroundImage: 'var(--gradient-primary)' }} className="text-primary-foreground p-4 md:p-5 rounded-xl shadow-glow max-w-xl mx-auto lg:mx-0">
                  <p className="text-center text-lg md:text-xl font-bold">
                    🛡️ ZÁRUKA: Nejste spokojeni? Zrušte do 30 dnů — vracíme 100 %.
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
                      <p className="text-foreground italic">"Ušetřil jsem 1 200 Kč ročně v bytě s minimální spotřebou"</p>
                      <p className="text-sm text-muted-foreground mt-1">— Jiří D., Prostějov</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-background/80 border border-border rounded-lg p-4">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground italic">"3 odběrná místa se skvělou cenou a bez starostí"</p>
                      <p className="text-sm text-muted-foreground mt-1">— Petr F., firma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="lg:sticky lg:top-24">
                  <img 
                    src={heroImage} 
                    alt="Úspora energií - moderní dům s fotovoltaickými panely a úsporným osvětlením pro domácnosti" 
                    className="rounded-lg shadow-glow w-full h-auto object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>
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
                  <p className="text-primary font-semibold mb-2">✓ Nejdříve vyjednávám u vašeho stávajícího dodavatele</p>
                  <p className="text-sm text-muted-foreground">
                    Pokud se nedohodne, nechám udělat nabídky konkurence a pošlu vám porovnání s dopady rozhodnutí.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sleduji termíny vašich fixací.",
                    "Vyjednávám férové ceny u vašeho dodavatele.",
                    "Pokud se nedohodne — získám nabídky konkurence.",
                    "Pošlu přehledné porovnání s dopady rozhodnutí.",
                    "Vy rozhodujete a podepisujete přímo s dodavatelem.",
                    "Faktura až po úspěšném vyjednání."
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
            <h3 className="text-xl font-semibold text-center mb-8 text-primary">Jednoduše v 6 krocích</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Vyplníte formulář + plná moc",
                  icon: <Mail className="h-8 w-8" />,
                  description: "Plná moc slouží jen pro komunikaci s dodavateli."
                },
                {
                  step: "2",
                  title: "Vyjednám u vašeho dodavatele",
                  icon: <Shield className="h-8 w-8" />,
                  description: "Snažím se získat férovou cenu přímo u stávajícího dodavatele."
                },
                {
                  step: "3",
                  title: "Nabídky konkurence",
                  icon: <Users className="h-8 w-8" />,
                  description: "Pokud se nedohodne, nechám udělat nabídky od konkurence."
                },
                {
                  step: "4",
                  title: "Porovnání a dopady",
                  icon: <TrendingDown className="h-8 w-8" />,
                  description: "Pošlu vám přehledné porovnání s dopady vašeho rozhodnutí."
                },
                {
                  step: "5",
                  title: "Podepisujete přímo s dodavatelem",
                  icon: <CheckCircle className="h-8 w-8" />,
                  description: "Vždy rozhodujete vy a podepisujete přímo s dodavatelem."
                },
                {
                  step: "6",
                  title: "Faktura až po úspěchu",
                  icon: <Clock className="h-8 w-8" />,
                  description: "První faktura až po úspěšném vyjednání. Pak 300 Kč/rok."
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
                  description: "první faktura až po úspěšném vyjednání • každá další roční faktura jako předplacení dalšího roku • nechcete pokračovat? Stačí přestat platit",
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
                  description: "Nejste spokojeni? Zrušte do 30 dnů — vracíme 100 %."
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
