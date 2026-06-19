import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-xl tracking-tight mb-4 block">betreutes-reisen.org</span>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sicher, betreut und voller Lebensfreude die Welt entdecken. Begleitet von ausgebildeten deutschen Fachkräften aus der Pflege und Betreuung.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground space-y-2 flex flex-col">
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <a href="tel:+49123456789" className="hover:text-primary transition-colors py-2 mt-2 inline-block">Tel: +49 (0) 123 456 789</a>
              <a href="mailto:hallo@betreutes-reisen.org" className="hover:text-primary transition-colors py-2 inline-block">hallo@betreutes-reisen.org</a>
            </address>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2 flex flex-col">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors py-2 block">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors py-2 block">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/agb" className="text-muted-foreground hover:text-primary transition-colors py-2 block">AGB</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} betreutes-reisen.org. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
