import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cs } from "date-fns/locale";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: undefined as Date | undefined,
    email: "",
    message: "",
    files: [] as File[],
    consent: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.birthDate || !formData.email) {
      toast({
        title: "Chyba",
        description: "Vyplňte prosím jméno, datum narození a e-mail.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Chyba",
        description: "Musíte souhlasit se zpracováním osobních údajů.",
        variant: "destructive",
      });
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('birthDate', formData.birthDate ? format(formData.birthDate, 'dd.MM.yyyy') : '');
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      // Add files (currently only first file due to email limitations)
      if (formData.files.length > 0) {
        formDataToSend.append('file', formData.files[0]);
      }

      const response = await fetch('https://cctflcnhlfjtmlmywbcp.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdGZsY25obGZqdG1sbXl3YmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNDE3NDIsImV4cCI6MjA3MTgxNzc0Mn0.ZFP6YVPutkeHWUx60hTpDYBGAj0_CBz0KwPk5AnK2uI',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjdGZsY25obGZqdG1sbXl3YmNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyNDE3NDIsImV4cCI6MjA3MTgxNzc0Mn0.ZFP6YVPutkeHWUx60hTpDYBGAj0_CBz0KwPk5AnK2uI'
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const raw = await response.text();
        let serverMsg = 'Nepodařilo se odeslat zprávu';
        try {
          const data = JSON.parse(raw);
          serverMsg = data.error || serverMsg;
        } catch {}
        throw new Error(serverMsg);
      }

      toast({
        title: "Zpráva odeslána!",
        description: "Děkuji za zájem. Brzy vás budeme kontaktovat.",
      });
      
      setFormData({ name: "", birthDate: undefined, email: "", message: "", files: [], consent: false });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Chyba při odesílání",
        description: error instanceof Error ? error.message : "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFormData({
      ...formData,
      files: [...formData.files, ...newFiles]
    });
    // Reset input to allow selecting same file again
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      files: formData.files.filter((_, i) => i !== index)
    });
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked
    });
  };

  return (
    <Card className="max-w-lg mx-auto shadow-soft bg-gradient-card border-primary/10">{/* přidal jsem gradient pozadí */}
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          Máte zájem o hlídání cen energií? Napište nám a začneme!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Jméno</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Datum narození</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.birthDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.birthDate ? format(formData.birthDate, "d. MMMM yyyy", { locale: cs }) : <span>Vyberte datum</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-background z-50" align="start">
                <Calendar
                  mode="single"
                  selected={formData.birthDate}
                  onSelect={(date) => setFormData({ ...formData, birthDate: date })}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  locale={cs}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="focus:ring-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Zpráva</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Příloha (volitelně)</Label>
            <div className="text-sm text-muted-foreground mb-2">
              <p>💡 <strong>Tip:</strong> Přiložte své poslední vyúčtování energií - výrazně to urychlí proces!</p>
              <p className="text-xs mt-1">Podporované formáty: PDF, JPG, PNG (max. 10MB každý)</p>
              <p className="text-xs mt-1 text-amber-600">
                📧 <strong>Velké soubory?</strong> Pokud máte přílohy větší než 10MB, pošlete je prosím přímo na 
                <a href="mailto:info@spolecnelevneji.cz" className="text-primary hover:underline ml-1">
                  info@spolecnelevneji.cz
                </a>
              </p>
            </div>
            <Input
              id="files"
              name="files"
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
              className="focus:ring-primary file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
            {formData.files.length > 0 && (
              <div className="space-y-2 mt-2">
                <p className="text-sm font-medium text-muted-foreground">Vybrané soubory:</p>
                {formData.files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                    <span className="text-sm">
                      {file.name} ({Math.round(file.size / 1024)} KB)
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      Odebrat
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleConsentChange}
                className="mt-1"
              />
              <Label
                htmlFor="consent"
                className="text-sm leading-relaxed cursor-pointer"
              >
                Souhlasím se zpracováním osobních údajů podle 
                <a href="https://gdpr.cz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">GDPR</a>
                . Vaše údaje použijeme pouze pro účely této služby.
              </Label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            variant="energy" 
            className="w-full" 
            disabled={!formData.consent}
          >
            Odeslat
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
