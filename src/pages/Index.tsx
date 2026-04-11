import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mqegvjjq";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [gdprChecked, setGdprChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdprChecked) {
      toast({
        title: "Souhlas je povinný",
        description: "Pro odeslání formuláře je nutné souhlasit se zpracováním osobních údajů.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        toast({
          title: "Odesláno!",
          description: "Děkujeme, brzy se vám ozveme.",
        });
      } else {
        throw new Error("Odeslání se nezdařilo");
      }
    } catch {
      toast({
        title: "Chyba",
        description: "Nepodařilo se odeslat. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Form */}
        <section id="formular" className="py-20 md:py-24 px-4">
          <div className="container mx-auto max-w-lg space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pošlete mi své vyúčtování
              </h2>
              <p className="text-muted-foreground">
                Stačí vyplnit základní údaje a přiložit
                vyúčtování. Ozvu se vám s nezávazným posouzením.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Děkuji za odeslání!
                </h3>
                <p className="text-muted-foreground">
                  Vaše vyúčtování jsem přijal. Ozvu se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Jméno
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jan Novák"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jan@email.cz"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Telefon
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+420 123 456 789"
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="text-foreground">
                    Vyúčtování (fotka nebo PDF)
                  </Label>
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/40 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    {fileName ? (
                      <p className="text-sm text-foreground font-medium">
                        {fileName}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Klikněte nebo přetáhněte soubor
                      </p>
                    )}
                    <input
                      ref={fileInputRef}
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*,.pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                {/* GDPR Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="gdpr"
                    checked={gdprChecked}
                    onCheckedChange={(checked) =>
                      setGdprChecked(checked === true)
                    }
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="gdpr"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Souhlasím se zpracováním osobních údajů za účelem
                    vypracování nezávazného posouzení vyúčtování.
                  </Label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !gdprChecked}
                  className="w-full py-6 text-base font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Odesílám…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Poslat vyúčtování ke kontrole
                    </>
                  )}
                </Button>
              </form>
            )}
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
