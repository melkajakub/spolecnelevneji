import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, TrendingDown, Users, Mail, Menu, X, Quote } from "lucide-react";
import heroImage from "@/assets/energy-savings-hero.jpg";

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
              <a href="#about" className="text-foreground hover:text-primary transition-colors">O mně</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Jak to funguje</a>
              <a href="#why-paid" className="text-foreground hover:text-primary transition-colors">Proč je služba placená</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Registrace</a>
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
                <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>O mně</a>
                <a href="#services" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Jak to funguje</a>
                <a href="#why-paid" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Proč je služba placená</a>
                <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Registrace</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <img 
              src={heroImage} 
              alt="Úspora energií - moderní dům s fotovoltaickými panely a úsporným osvětlením pro domácnosti" 
              className="w-full h-full object-cover"
              width="1920"
              height="500"
            />
          </div>
          
          <div className="py-12 md:py-16 px-4">
            <div className="container mx-auto max-w-3xl space-y-6 md:space-y-8 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                <span className="block text-primary mb-2">Společně levněji</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                Cena za aktivní dohled je <strong className="text-primary">300 Kč/rok</strong>. První faktura přijde až po prvním úspěšném vyjednání férové nabídky, se kterou budete spokojeni.
              </p>

              {/* CTA */}
              <div className="max-w-xl mx-auto">
                <Button 
                  variant="energy" 
                  size="lg" 
                  className="w-full text-lg py-6 font-bold"
                  asChild
                >
                  <a href="#contact">
                    ZAČÍT
                  </a>
                </Button>
              </div>

              {/* Záruka */}
              <div style={{ backgroundImage: 'var(--gradient-primary)' }} className="text-primary-foreground p-4 md:p-5 rounded-xl shadow-glow max-w-xl mx-auto">
                <p className="text-center text-lg md:text-xl font-bold">
                  🛡️ ZÁRUKA: Nejste spokojeni? Zrušte do 30 dnů — vracíme 100 %.
                </p>
              </div>

              {/* Testimonials */}
              <div className="space-y-3 max-w-xl mx-auto">
                <div className="flex items-start gap-3 bg-background/80 border border-border rounded-lg p-4 text-left">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground italic">"Ušetřil jsem 1 200 Kč ročně v bytě s minimální spotřebou"</p>
                    <p className="text-sm text-muted-foreground mt-1">— Jiří D., Prostějov</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-background/80 border border-border rounded-lg p-4 text-left">
                  <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground italic">"3 odběrná místa se skvělou cenou a bez starostí"</p>
                    <p className="text-sm text-muted-foreground mt-1">— Petr F., firma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O mně */}
        <section id="about" className="py-16 md:py-20 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Ahoj, jsem Jakub</h2>
            <Card className="shadow-soft border-primary/20">
              <CardContent className="p-6 md:p-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Štve mě, kolik lidí zbytečně přeplácí za energie jen proto, že se o to aktivně nestarají. Pojďme se o vaše odběrná místa starat společně, ať můžete energie odebírat levněji.
                </p>
                <p>
                  Sám jsem to zažil: automatická nabídka před koncem fixace, žádná kontrola → klidně tisíce korun ročně navíc. Začal jsem to hlídat pro sebe, rodinu a kamarády – a ukázalo se, že se dá ušetřit často i bez změny dodavatele.
                </p>
                <p className="font-semibold text-foreground">Proto teď dělám totéž pro vás:</p>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>sleduji vaše ceny dlouhodobě, abyste měli co nejméně starostí a zbytečně nepřepláceli</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>vyjednávám zavčas férovější podmínky (snažím se hlavně u stávajícího dodavatele)</span>
                  </li>
                </ul>
                <p>
                  Bez provizí od dodavatelů, abych nebyl závislý na neustálých změnách dodavatelů u svých zákazníků.
                </p>
                <p className="text-foreground font-medium">
                  Pokud vás to taky štve, napište, rád se podívám na vaši aktuální situaci.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section - Combined with How it Works */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Co pro vás dělám a jak to funguje</h2>
            
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
                     Pokud nenabídne férovou cenu, nechám udělat nabídky konkurence a pošlu vám objektivní porovnání.
                   </p>
                 </div>
                 <ul className="space-y-4">
                   {[
                     "Sleduji termíny vašich fixací.",
                     "Vyjednávám férové ceny u vašeho dodavatele.",
                     "Pokud nenabídne férovou cenu — získám nabídky konkurence.",
                     "Pošlu objektivní porovnání nabídek a vy se rozhodnete.",
                     "Vy rozhodujete a podepisujete přímo s dodavatelem.",
                     "První faktura až po úspěšném vyjednání.",
                     "Jednou ročně faktura za aktivní dohled nad vaším odběrným místem — individuální nabídky vyžaduji dlouho před koncem fixace."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-center mb-8 text-primary">Jednoduše v 7 krocích</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Vyplníte formulář + plná moc", icon: <Mail className="h-8 w-8" />, description: "Plná moc slouží jen pro komunikaci s dodavateli." },
                { step: "2", title: "Vyjednám u vašeho dodavatele", icon: <Shield className="h-8 w-8" />, description: "Snažím se získat férovou cenu přímo u stávajícího dodavatele." },
                { step: "3", title: "Nabídky konkurence", icon: <Users className="h-8 w-8" />, description: "Pokud nenabídne férovou cenu, nechám udělat nabídky od konkurence." },
                { step: "4", title: "Objektivní porovnání", icon: <TrendingDown className="h-8 w-8" />, description: "Pošlu vám objektivní porovnání nabídek a vy se rozhodnete, jakou cestou se vydáte." },
                { step: "5", title: "Podepisujete přímo s dodavatelem", icon: <CheckCircle className="h-8 w-8" />, description: "Vždy rozhodujete vy a podepisujete přímo s dodavatelem." },
                { step: "6", title: "První faktura po úspěchu", icon: <Clock className="h-8 w-8" />, description: "První faktura až po úspěšném vyjednání." },
                { step: "7", title: "Aktivní dohled", icon: <Shield className="h-8 w-8" />, description: "Jednou ročně faktura za aktivní dohled nad vaším odběrným místem. Individuální nabídky vyžaduji dlouho před koncem fixace, pokud je cena na trhu lepší. 300 Kč/rok." }
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

        {/* Extrémní případy */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <Card className="border-primary/30 shadow-soft">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">📊 Extrémní případy, na které jsem narazil</h2>
                <div className="space-y-4 text-foreground text-lg">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Špatná distribuční sazba → <span className="text-primary font-bold">úspora 7 000 Kč/rok</span></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Plyn 1 700 Kč/MWh → <span className="text-primary font-bold">vyjednáno 900 Kč/MWh</span></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>Elektřina 3 900 Kč/MWh → <span className="text-primary font-bold">vyjednáno 2 400 Kč/MWh</span></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why is the service paid */}
        <section id="why-paid" className="py-20 px-4">
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

        {/* Registration - Embedded Airtable Form */}
        <section id="contact" className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Registrace</h2>
            <div 
              className="rounded-xl overflow-hidden border border-border shadow-soft relative w-full"
              style={{ paddingBottom: '150%', touchAction: 'pan-y' }}
            >
              <iframe 
                className="airtable-embed absolute top-0 left-0 w-full h-full"
                src="https://airtable.com/embed/app5b1mae9Kf5qvLE/pags0wOUy5GkNsh0S/form" 
                frameBorder="0"
                style={{ background: 'transparent', border: 'none', touchAction: 'pan-y' }}
                title="Registrační formulář Společně levněji"
                loading="lazy"
              />
            </div>
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
            
            <div className="mt-8 pt-8 border-t border-primary-glow text-center space-y-2">
              <p className="text-xs opacity-80">
                <a href="https://drive.google.com/file/d/162d_9Dja-M3RDoG4MH6JuKzHsJ_mV2ke/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Zásady ochrany osobních údajů (GDPR)
                </a>
              </p>
              <p className="text-primary-glow text-sm">
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