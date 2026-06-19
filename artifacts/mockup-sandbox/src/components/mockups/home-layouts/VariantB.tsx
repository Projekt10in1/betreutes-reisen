import React from "react";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ShieldCheck, Map, ChevronRight } from "lucide-react";

export function VariantB() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 text-white">
        <div className="text-2xl font-bold tracking-tight">betreutes-reisen.org</div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-amber-300 transition-colors">Reiseangebote</a>
          <a href="#" className="hover:text-amber-300 transition-colors">Über uns</a>
          <a href="#" className="hover:text-amber-300 transition-colors">Kontakt</a>
        </div>
        <Button className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold border-none hidden md:inline-flex rounded-full px-6">
          Beratung anfragen
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero.png" 
            alt="Älteres Paar mit Pflegerin" 
            className="w-full h-full object-cover"
          />
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/60 via-amber-900/50 to-amber-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6 drop-shadow-lg">
            Gemeinsam die Welt entdecken <br className="hidden md:block"/> 
            <span className="text-amber-300 font-light italic">Sicher, betreut und voller Lebensfreude</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-50/90 max-w-2xl mb-10 leading-relaxed font-light drop-shadow">
            Begleitete Reisen für Senioren und Menschen mit Pflegebedarf. Erleben Sie unvergessliche Momente mit der Sicherheit ausgebildeter deutscher Fachkräfte an Ihrer Seite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-lg px-8 h-14 rounded-full shadow-lg">
              Reiseangebote ansehen <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white font-semibold text-lg px-8 h-14 rounded-full bg-white/10 backdrop-blur-sm border-2">
              Persönliche Beratung
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-amber-50 py-16 px-6 md:px-12 border-b border-amber-100 relative z-20 -mt-8 mx-4 md:mx-12 rounded-2xl shadow-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-amber-200">
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">Ausgebildete Fachkräfte</h3>
            <p className="text-amber-900/70 leading-relaxed">Ständige Begleitung durch qualifiziertes, deutsches Pflegepersonal auf allen Reisen.</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">Persönliche Betreuung</h3>
            <p className="text-amber-900/70 leading-relaxed">Individuelle Unterstützung und Pflege nach Ihren persönlichen Bedürfnissen.</p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <Map className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">Barrierefreie Routen</h3>
            <p className="text-amber-900/70 leading-relaxed">Sorgfältig ausgewählte und geprüfte Reiseziele für maximale Zugänglichkeit.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Ihre nächste Reise wartet</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Wählen Sie aus unserem vielfältigen Angebot an betreuten Reisen. Ob ein kurzer Ausflug oder eine längere Erholungsreise – wir haben das passende Angebot für Sie.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="text-center group">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">32</div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">Reisen geplant</div>
            </div>
            <div className="hidden md:block w-px h-32 bg-slate-200"></div>
            <div className="text-center group">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">8</div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">Mehrtägige Reisen</div>
            </div>
            <div className="hidden md:block w-px h-32 bg-slate-200"></div>
            <div className="text-center group">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">24</div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">Kurztrips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white tracking-tight">betreutes-reisen.org</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-amber-400 transition-colors">AGB</a>
          </div>
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Betreutes Reisen. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
