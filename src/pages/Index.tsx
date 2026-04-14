import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Nepřeplácejme už dál zbytečně za energie.
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

            <p className="text-base md:text-lg text-foreground font-medium">
              Pojďme se společně postarat o to, aby vaše rodina, firma nebo obec
              už dál zbytečně nepřeplácela za energie.
            </p>

            <Button
              variant="default"
              size="lg"
              className="text-base px-8 py-6"
              asChild
            >
              <a href="#formular">
                <Send className="mr-2 h-4 w-4" />
                Poslat vyúčtování ke kontrole
              </a>
            </Button>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto max-w-2xl px-4">
          <hr className="border-border" />
        </div>

        {/* Tally Form */}
        <section id="formular" className="py-20 md:py-24 px-4">
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
