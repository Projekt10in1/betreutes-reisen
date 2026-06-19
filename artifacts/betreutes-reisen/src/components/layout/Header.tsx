import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, HandHelping } from "lucide-react";

export function Header() {
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    const saved = localStorage.getItem("app-font-size");
    if (saved) {
      const size = parseInt(saved, 10);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
  }, []);

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    localStorage.setItem("app-font-size", newSize.toString());
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-md p-1">
          <div className="relative w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="absolute w-5 h-5 top-2.5" />
            <HandHelping className="absolute w-4 h-4 bottom-2 right-2 text-white/80" />
          </div>
          <span className="font-bold text-xl tracking-tight">betreutes-reisen.org</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">Startseite</Link>
          <Link href="/reisen" className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">Reisen 2026</Link>
          <Link href="/letzte-reisen" className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">letzte Reisen</Link>
          <Link href="/ueber-uns" className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">Über uns</Link>
          <Link href="/kontakt" className="text-base font-medium hover:text-primary transition-colors py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">Kontakt</Link>
        </nav>

        <div className="flex items-center gap-2" aria-label="Schriftgröße anpassen">
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeFontSize(-2)}
            aria-label="Schrift verkleinern"
            className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-lg font-bold"
          >
            A-
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeFontSize(2)}
            aria-label="Schrift vergrößern"
            className="w-12 h-12 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-lg font-bold"
          >
            A+
          </Button>
        </div>
      </div>
    </header>
  );
}
