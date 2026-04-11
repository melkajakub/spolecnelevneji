import { useEffect } from "react";
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
          <a
            href="#formular"
            className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Poslat vyúčtování
          </a>
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
              Pomáhám lidem a firmám zorientovat se v jejich vyúčtování za
              elektřinu a plyn. Podívám se na vaše ceny a nezávazně
              je porovnám s aktuální nabídkou na trhu ať máte jistotu, že zbytečně nepřeplácíte.
            </p>

            <p className="text-base md:text-lg text-foreground font-medium">
              Pojďme se společně postarat o to, abyste zbytečně nepřepláceli za
              energie.
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
          <p className="text-sm text-muted-foreground">
            Nepřeplácejme · Jakub Melka · IČO: 22516280 · melka.jakub@gmail.com
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-lg mx-auto leading-relaxed">
            Odesláním formuláře nedochází k uzavření smlouvy ani k zahájení
            zprostředkovatelské činnosti. Jedná se o nezávaznou konzultaci.
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
