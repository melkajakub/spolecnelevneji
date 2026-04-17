import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, Mail, ShieldCheck, FileCheck } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    if (typeof (window as any).Tally !== "undefined") {
      (window as any).Tally.loadEmbeds();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = () => {
        if (typeof (window as any).Tally !== "undefined") {
          (window as any).Tally.loadEmbeds();
        }
      };
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
              alt="Nepřeplácejme logo"
              className="h-10 w-auto rounded-full"
              width="40"
              height="40"
            />
            <span className="font-semibold text-foreground text-lg hidden sm:inline">
              Nepřeplácejme
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Blog
            </Link>
            <a
              href="#formular"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Poslat vyúčtování
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-2xl text-center space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed tracking-tight">
              Nepřeplácejme zbytečně za energie.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Pomáhám domácnostem, firmám i obcím zorientovat se v jejich
              vyúčtování za elektřinu a plyn. Podívám se na vaše aktuální
              náklady a nezávazně posoudím, zda jsou vaše ceny dlouhodobě
              férové.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Nekontroluji jen cenu samotné energie (silovou složku). Zaměřuji
              se i na regulovanou část vyúčtování – prověřím, zda zbytečně
              nepřeplácíte kvůli nevhodně zvolené distribuční sazbě nebo příliš
              vysokému rezervovanému příkonu (jističi).
            </p>

            <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
              Pojďme se společně postarat o to, aby vaše rodina, firma nebo obec
              už dál zbytečně nepřeplácela za energie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="#formular">
                  <Send className="mr-2 h-4 w-4" />
                  Prověřit fakturu zdarma
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <Link to="/blog">
                  Více o projektu Nepřeplácejme
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Pillars */}
        <section className="py-16 md:py-20 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Pilíře spolupráce
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Komunikace e-mailem
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Žádný nátlak po telefonu. Vše máte v poště, v klidu a písemně.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Energetický dohled
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hlídám vaše odběrná místa jako svá vlastní. Termíny i pohyby trhu.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Férové posouzení
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pokud už máte skvělou cenu, narovinu vám doporučím u dodavatele zůstat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Aktuálně z projektu
            </h2>
            <div className="rounded-lg border border-border bg-[hsl(220_30%_98%)] p-6 md:p-10 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Jak pracuji a co ode mě můžete čekat
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Většina lidí má energetické poradce spojené s nekonečnými telefonáty
                a neustálým tlakem na podpis nové smlouvy. V projektu Nepřeplácejme
                na to jdu jinak. Chci, abyste věděli, na čem jste, hned od prvního
                kontaktu.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/blog">Přečíst celý příběh</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tally Form */}
        <section id="formular" className="py-20 md:py-24 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-lg space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pošlete mi své vyúčtování
              </h2>
              <p className="text-muted-foreground">
                Stačí vyplnit základní údaje a přiložit vyúčtování. Ozvu se vám
                s nezávazným posouzením.
              </p>
            </div>

            <iframe
              data-tally-src="https://tally.so/embed/KYJ8zD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="648"
              frameBorder="0"
              title="Pošlete mi své vyúčtování"
              style={{ border: "none" }}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-3">
          <div className="flex justify-center gap-6 mb-4">
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="#formular"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Poslat vyúčtování
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Nepřeplácejme · Jakub Melka · IČO: 22516280 ·{" "}
            <a href="mailto:info@nepreplacejme.cz" className="hover:text-foreground transition-colors">
              info@nepreplacejme.cz
            </a>
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-lg mx-auto leading-relaxed">
            Odesláním formuláře nedochází k uzavření smlouvy ani k zahájení
            zprostředkovatelské činnosti. Jedná se o nezávaznou konzultaci.
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-lg mx-auto leading-relaxed mt-3">
            Analýzu faktur a zprostředkování služeb provádí Jakub Melka jako
            obchodní zástupce společnosti IKAS GROUP s.r.o. (zapsané v registru
            zprostředkovatelů Energetického regulačního úřadu pod číslem
            742543078).
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
