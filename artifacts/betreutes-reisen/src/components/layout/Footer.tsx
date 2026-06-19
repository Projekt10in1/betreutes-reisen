import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-bold text-xl tracking-tight text-white mb-4 block font-serif">
              betreutes-reisen.org
            </span>
            <p className="text-slate-400 leading-relaxed">
              Sicher, betreut und voller Lebensfreude die Welt entdecken. Begleitet von ausgebildeten deutschen Fachkräften aus der Pflege und Betreuung.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wider">Kontakt</h3>
            <address className="not-italic text-slate-400 space-y-2 flex flex-col">
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <a href="tel:+49123456789" className="hover:text-amber-400 transition-colors py-1 inline-block">Tel: +49 (0) 123 456 789</a>
              <a href="mailto:hallo@betreutes-reisen.org" className="hover:text-amber-400 transition-colors py-1 inline-block">hallo@betreutes-reisen.org</a>
            </address>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4 text-white uppercase tracking-wider">Rechtliches</h3>
            <ul className="space-y-1 flex flex-col">
              <li>
                <Link href="/letzte-reisen" className="text-slate-400 hover:text-amber-400 transition-colors py-1 block">Erfahrungsberichte</Link>
              </li>
              <li>
                <Link href="/impressum" className="text-slate-400 hover:text-amber-400 transition-colors py-1 block">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-slate-400 hover:text-amber-400 transition-colors py-1 block">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link href="/agb" className="text-slate-400 hover:text-amber-400 transition-colors py-1 block">AGB</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-600">
          <p>&copy; {new Date().getFullYear()} betreutes-reisen.org. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
