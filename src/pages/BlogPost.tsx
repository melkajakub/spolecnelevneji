import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Upload } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for ## headers, ### headers, **bold**, and *italic*
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;

      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="text-lg font-semibold text-foreground mt-8 mb-3"
          >
            {trimmed.slice(4)}
          </h3>
        );
      }
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-xl md:text-2xl font-bold text-foreground mt-10 mb-4"
          >
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={i} className="text-muted-foreground leading-relaxed ml-4">
            {renderInline(trimmed.slice(2))}
          </li>
        );
      }
      if (trimmed.match(/^\d+\.\s/)) {
        return (
          <li
            key={i}
            className="text-muted-foreground leading-relaxed ml-4 list-decimal"
          >
            {renderInline(trimmed.replace(/^\d+\.\s/, ""))}
          </li>
        );
      }
      if (trimmed.startsWith("*Poznámka:")) {
        return (
          <p
            key={i}
            className="text-sm text-muted-foreground/70 mt-8 pt-4 border-t border-border italic"
          >
            {trimmed.replace(/^\*/, "").replace(/\*$/, "")}
          </p>
        );
      }

      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-2">
          {renderInline(trimmed)}
        </p>
      );
    });
  };

  const renderInline = (text: string) => {
    // Handle **bold** and *italic*
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={i}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
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
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/#formular"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Poslat vyúčtování
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-12 md:py-20 px-4">
        <article className="container mx-auto max-w-2xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Zpět na blog
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
            {post.title}
          </h1>

          <time className="text-sm text-muted-foreground/60 block mb-10">
            {new Date(post.date).toLocaleDateString("cs-CZ", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>

          <div className="prose-custom">{renderContent(post.content)}</div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-lg bg-secondary text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Nejste si jistí svým vyúčtováním?
            </h3>
            <p className="text-muted-foreground">
              Pokud chcete mít klid, že neplatíte víc, než musíte, rád se na
              vaše vyúčtování podívám. Stačí mi ho nahrát v PDF a já vám napíšu
              svůj pohled.
            </p>
            <Button size="lg" className="text-base" asChild>
              <Link to="/#formular">
                <Upload className="mr-2 h-4 w-4" />
                NAHRÁT VYÚČTOVÁNÍ KE KONTROLE
              </Link>
            </Button>
          </div>
        </article>
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
            <Link
              to="/#formular"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Poslat vyúčtování
            </Link>
          </div>
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

export default BlogPost;
