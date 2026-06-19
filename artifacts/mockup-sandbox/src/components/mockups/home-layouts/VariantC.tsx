import React from "react";
import { 
  HeartHandshake, 
  Map, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function VariantC() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-zinc-900">
      {/* Navigation - Absolute positioned */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 lg:px-12 flex justify-between items-center text-zinc-900">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <HeartHandshake className="h-6 w-6" />
          <span>betreutes-reisen.org</span>
        </div>
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">Startseite</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Reiseziele</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Über uns</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Kontakt</a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section className="flex flex-col lg:flex-row min-h-[100dvh]">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-[#F5C518] pt-32 pb-16 px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 mb-6">
              Gemeinsam die Welt entdecken – Sicher, betreut und voller Lebensfreude
            </h1>
            <p className="text-lg lg:text-xl text-zinc-800 mb-10 font-medium leading-relaxed">
              Begleitete Reisen für Senioren und Menschen mit Pflegebedarf. Erleben Sie unvergessliche Momente mit der Sicherheit ausgebildeter deutscher Fachkräfte an Ihrer Seite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 h-14 px-8 text-base font-semibold group">
                Reiseangebote ansehen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white h-14 px-8 text-base font-semibold">
                <PhoneCall className="mr-2 h-5 w-5" />
                Persönliche Beratung
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900/10">
              <div>
                <div className="text-4xl font-black text-zinc-900">32</div>
                <div className="text-sm font-semibold text-zinc-800 mt-1 uppercase tracking-wider">Reisen geplant</div>
              </div>
              <div>
                <div className="text-4xl font-black text-zinc-900">8</div>
                <div className="text-sm font-semibold text-zinc-800 mt-1 uppercase tracking-wider">Mehrtägige</div>
              </div>
              <div>
                <div className="text-4xl font-black text-zinc-900">24</div>
                <div className="text-sm font-semibold text-zinc-800 mt-1 uppercase tracking-wider">Kurztrips</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Full Bleed Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
          <img 
            src="/__mockup/images/hero.png" 
            alt="Älteres Paar mit Pflegerin" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Warum mit uns reisen?</h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto">Wir bieten Ihnen nicht nur Reiseziele, sondern ein Rundum-Sorglos-Paket, damit Sie jeden Moment unbeschwert genießen können.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <ShieldCheck className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ausgebildete Fachkräfte</h3>
              <p className="text-zinc-600 leading-relaxed">
                Ihre Reise wird von examiniertem deutschem Pflegepersonal begleitet. Für medizinische und pflegerische Sicherheit ist jederzeit gesorgt.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <HeartHandshake className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Persönliche Betreuung</h3>
              <p className="text-zinc-600 leading-relaxed">
                Wir kümmern uns um Ihre individuellen Bedürfnisse. Von der Gepäckabwicklung bis zur Begleitung bei Ausflügen stehen wir an Ihrer Seite.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Map className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Barrierefreie Routen</h3>
              <p className="text-zinc-600 leading-relaxed">
                Alle Reiseziele, Unterkünfte und Aktivitäten sind sorgfältig ausgewählt und auf Zugänglichkeit und Rollstuhlgerechtigkeit geprüft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <HeartHandshake className="h-6 w-6" />
            <span>betreutes-reisen.org</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Betreutes Reisen. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VariantC;