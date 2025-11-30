import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle } from "lucide-react";

export const ContactForm = () => {
  return (
    <Card className="max-w-2xl mx-auto shadow-glow bg-gradient-card border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-2xl md:text-3xl text-foreground">
          Máte zájem o hlídání cen energií?
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6 px-6 md:px-10 pb-8">
        <p className="text-lg text-muted-foreground">
          Vyplňte registrační formulář a my se postaráme o zbytek.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-left py-4">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground">Registrace zabere jen pár minut</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground">Platíte až po úspoře</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-foreground">Bez závazků</span>
          </div>
        </div>

        <Button 
          variant="energy" 
          size="lg"
          className="w-full text-lg py-6 font-bold"
          asChild
        >
          <a 
            href="https://airtable.com/app5b1mae9Kf5qvLE/shrOyujug320j2coS" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            ZAČÍT ŠETŘIT HNED
          </a>
        </Button>
        
        <p className="text-xs text-muted-foreground pt-2">
          Po vyplnění vás budeme kontaktovat pro doplnění případných údajů.
        </p>
      </CardContent>
    </Card>
  );
};
