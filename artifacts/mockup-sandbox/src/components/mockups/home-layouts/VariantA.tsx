import React from "react";
import { 
  HeartHandshake, 
  ShieldCheck, 
  Map, 
  ArrowRight,
  Menu,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function VariantA() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-amber-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <HeartHandshake className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-semibold tracking-tight">betreutes-reisen.org</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-amber-600">Startseite</a>
            <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Reisen</a>
            <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Über uns</a>
            <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">Kontakt</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Phone className="h-4 w-4" />
              <span>0800 123 456 78</span>
            </div>
          </div>

          <button className="md:hidden p-2 -mr-2 text-neutral-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-24 lg:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6 w-fit mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Saison 2024 jetzt buchbar
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                Gemeinsam die Welt entdecken – <br className="hidden lg:block" />
                <span className="text-amber-500 relative whitespace-nowrap">
                  Sicher, betreut
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <br className="hidden lg:block" /> und voller Lebensfreude
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Begleitete Reisen für Senioren und Menschen mit Pflegebedarf. Erleben Sie unvergessliche Momente mit der Sicherheit ausgebildeter deutscher Fachkräfte an Ihrer Seite.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-medium h-14 px-8 text-base shadow-lg shadow-amber-500/20">
                  Reiseangebote ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-2">
                  Persönliche Beratung
                </Button>
              </div>
            </div>

            {/* Right Column: Image & Stats Panel */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
                <img 
                  src="/__mockup/images/hero.png" 
                  alt="Älteres Paar mit Pflegerin" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Embedded Stats Bar (Overlapping image bottom) */}
              <div className="absolute -bottom-8 lg:-bottom-12 left-4 right-4 lg:-left-12 lg:right-12 bg-white rounded-xl shadow-xl p-6 border border-neutral-100 backdrop-blur-xl">
                <div className="grid grid-cols-3 divide-x divide-neutral-100">
                  <div className="text-center px-2">
                    <div className="text-3xl lg:text-4xl font-bold text-amber-500 mb-1">32</div>
                    <div className="text-xs lg:text-sm font-medium text-neutral-500 uppercase tracking-wider">Reisen<br/>geplant</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-1">8</div>
                    <div className="text-xs lg:text-sm font-medium text-neutral-500 uppercase tracking-wider">Mehrtägige<br/>Reisen</div>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-1">24</div>
                    <div className="text-xs lg:text-sm font-medium text-neutral-500 uppercase tracking-wider">Kurztrips<br/>& Ausflüge</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Features Section - Horizontal Scrolling Row Format */}
      <section className="bg-neutral-900 text-white py-24 mt-8 lg:mt-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Warum mit uns reisen?</h2>
              <p className="text-neutral-400 max-w-xl text-lg">
                Wir kümmern uns um alles, damit Sie sich entspannen und genießen können. 
                Sicherheit und Wohlbefinden stehen bei uns an erster Stelle.
              </p>
            </div>
            <Button variant="link" className="text-amber-400 hover:text-amber-300 p-0 h-auto text-lg font-medium">
              Mehr über unser Konzept <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-amber-500/50 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <ShieldCheck className="h-7 w-7 text-amber-500 group-hover:text-neutral-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Ausgebildete Fachkräfte</h3>
              <p className="text-neutral-400 leading-relaxed">
                Ihre Reise wird von qualifiziertem deutschem Pflegepersonal begleitet. Medizinische Versorgung und Hilfestellungen sind jederzeit gewährleistet.
              </p>
            </div>
            
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-amber-500/50 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <HeartHandshake className="h-7 w-7 text-amber-500 group-hover:text-neutral-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Persönliche Betreuung</h3>
              <p className="text-neutral-400 leading-relaxed">
                Wir legen großen Wert auf kleine Gruppen und ein familiäres Umfeld. Ihre individuellen Bedürfnisse stehen im Mittelpunkt unserer Planung.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-amber-500/50 transition-colors group">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <Map className="h-7 w-7 text-amber-500 group-hover:text-neutral-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Barrierefreie Routen</h3>
              <p className="text-neutral-400 leading-relaxed">
                Alle unsere Reiseziele, Hotels und Ausflüge sind sorgfältig geprüft und vollständig auf die Bedürfnisse von Menschen mit Einschränkungen abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-12 text-sm text-neutral-500">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-neutral-900">
                <HeartHandshake className="h-5 w-5 text-amber-500" />
                <span className="text-lg font-semibold tracking-tight">betreutes-reisen.org</span>
              </div>
              <p className="max-w-xs leading-relaxed">
                Sicher und unbeschwert reisen – für Senioren und Menschen mit Pflegebedarf.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Kontakt</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0800 123 456 78</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@betreutes-reisen.org</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-neutral-900 mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 betreutes-reisen.org. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">fb</span>
              <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">ig</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
