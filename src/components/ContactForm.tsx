import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export const ContactForm = () => {
  return (
    <Card className="max-w-lg mx-auto shadow-soft bg-gradient-card border-primary/10">
      <CardHeader>
        <CardTitle className="text-center text-foreground">
          Máte zájem o hlídání cen energií?
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-muted-foreground">
          Vyplňte registrační formulář a my se postaráme o zbytek.
        </p>
        <Button 
          variant="energy" 
          size="lg"
          className="w-full"
          asChild
        >
          <a 
            href="https://airtable.com/app5b1mae9Kf5qvLE/shrOyujug320j2coS" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Vyplnit přihlášku
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
