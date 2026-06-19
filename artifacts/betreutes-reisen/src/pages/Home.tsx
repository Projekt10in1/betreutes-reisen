import { Layout } from "@/components/layout/Layout";
import { tripsSummary } from "@/data/trips";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HeartHandshake, ShieldCheck, Map, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  return (
    <Layout>
      {/* Hero – Vollbild-Hintergrund */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Person im Rollstuhl am Strand beim Sonnenuntergang mit Betreuerin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/60 via-amber-900/50 to-amber-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6 drop-shadow-lg"
          >
            Gemeinsam die Welt entdecken{" "}
            <br className="hidden md:block" />
            <span className="text-amber-300 font-light italic">
              Sicher, betreut und voller Lebensfreude
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-amber-50/90 max-w-2xl mb-10 leading-relaxed font-light drop-shadow"
          >
            Begleitete Reisen für Senioren und Menschen mit Pflegebedarf.
            Erleben Sie unvergessliche Momente mit der Sicherheit ausgebildeter
            deutscher Fachkräfte an Ihrer Seite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/reisen">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-lg px-8 h-14 rounded-full shadow-lg"
                data-testid="button-view-trips"
              >
                Reiseangebote ansehen
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20 hover:text-white font-semibold text-lg px-8 h-14 rounded-full bg-white/10 backdrop-blur-sm border-2"
                data-testid="button-contact"
              >
                Persönliche Beratung
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust-Streifen – schwebend über dem Hero */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="bg-amber-50 py-16 px-6 md:px-12 border-b border-amber-100 relative z-20 -mt-10 mx-4 md:mx-16 rounded-2xl shadow-xl"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-amber-200">
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">
              Ausgebildete Fachkräfte
            </h3>
            <p className="text-amber-900/70 leading-relaxed">
              Ständige Begleitung durch qualifiziertes, deutsches Pflegepersonal
              auf allen Reisen.
            </p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">
              Persönliche Betreuung
            </h3>
            <p className="text-amber-900/70 leading-relaxed">
              Individuelle Unterstützung und Pflege nach Ihren persönlichen
              Bedürfnissen.
            </p>
          </div>
          <div className="flex flex-col items-center pt-8 md:pt-0 px-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-amber-500 shadow-sm border border-amber-100">
              <Map className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-amber-950 font-serif">
              Barrierefreie Routen
            </h3>
            <p className="text-amber-900/70 leading-relaxed">
              Sorgfältig ausgewählte und geprüfte Reiseziele für maximale
              Zugänglichkeit.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Reisen-Statistiken */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Ihre nächste Reise wartet
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Wählen Sie aus unserem vielfältigen Angebot an betreuten Reisen.
              Ob ein kurzer Ausflug oder eine längere Erholungsreise – wir haben
              das passende Angebot für Sie.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24"
          >
            <div className="text-center group" data-testid="stat-total-trips">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                {tripsSummary.totalTrips}
              </div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">
                Reisen geplant
              </div>
            </div>
            <div className="hidden md:block w-px h-32 bg-slate-200" />
            <div className="text-center group" data-testid="stat-long-trips">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                {tripsSummary.longTrips}
              </div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">
                Mehrtägige Reisen
              </div>
            </div>
            <div className="hidden md:block w-px h-32 bg-slate-200" />
            <div className="text-center group" data-testid="stat-short-trips">
              <div className="text-7xl md:text-8xl font-serif font-bold text-amber-400 mb-4 group-hover:scale-105 transition-transform">
                {tripsSummary.shortTrips}
              </div>
              <div className="text-sm uppercase tracking-widest font-bold text-slate-800">
                Kurztrips
              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/reisen">
              <Button
                size="lg"
                className="font-bold h-14 px-10 rounded-full bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-md"
                data-testid="button-discover-trips"
              >
                Alle Reisen entdecken
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
