import { Layout } from "@/components/layout/Layout";
import { useGetTripsSummary } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, ShieldCheck, Map, Users } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const { data: summary, isLoading } = useGetTripsSummary();

  return (
    <Layout>
      <section className="relative overflow-hidden bg-accent/30 py-20 md:py-32 flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6"
            >
              Gemeinsam die Welt entdecken – <br/>
              <span className="text-primary">Sicher, betreut und voller Lebensfreude</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
            >
              Begleitete Reisen für Senioren und Menschen mit Pflegebedarf. Erleben Sie unvergessliche Momente mit der Sicherheit ausgebildeter deutscher Fachkräfte an Ihrer Seite.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/reisen">
                <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-md hover:shadow-lg transition-all font-bold">
                  Reiseangebote ansehen
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full bg-background/80 backdrop-blur border-2 border-primary/20 hover:border-primary">
                  Persönliche Beratung
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/30 z-10" />
          <img src="/hero.png" alt="Älteres Paar lacht im Park mit einer Pflegerin" className="object-cover w-full h-full rounded-l-3xl shadow-2xl" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sie sind in besten Händen</h2>
            <p className="text-lg text-muted-foreground">
              Unsere Reisen sind keine gewöhnlichen Gruppenreisen. Wir bieten Ihnen ein Rundum-Sorglos-Paket, das speziell auf Ihre Bedürfnisse abgestimmt ist.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ausgebildete Fachkräfte</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jede Reise wird von examiniertem deutschem Pflegepersonal begleitet. Wir kümmern uns um Ihre Medikamente, Unterstützung im Alltag und Ihre Sicherheit.
              </p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Persönliche Betreuung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kleine Gruppen und ein hoher Betreuungsschlüssel garantieren, dass wir individuell auf Ihre Wünsche und Bedürfnisse eingehen können.
              </p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Map className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Barrierefreie Routen</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alle Hotels, Ausflüge und Transportmittel sind sorgfältig geprüft und auf Rollstühle sowie Rollatoren ausgerichtet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/20 border-y">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Unsere aktuellen Angebote im Überblick</h2>
          {isLoading ? (
            <div className="animate-pulse flex flex-wrap justify-center gap-8">
              <div className="w-48 h-32 bg-muted rounded-xl"></div>
              <div className="w-48 h-32 bg-muted rounded-xl"></div>
              <div className="w-48 h-32 bg-muted rounded-xl"></div>
            </div>
          ) : summary ? (
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-card border rounded-xl p-6 min-w-[200px] shadow-sm">
                <div className="text-4xl font-extrabold text-primary mb-2">{summary.totalTrips}</div>
                <div className="text-muted-foreground font-medium">Reisen geplant</div>
              </div>
              <div className="bg-card border rounded-xl p-6 min-w-[200px] shadow-sm">
                <div className="text-4xl font-extrabold text-secondary mb-2">{summary.longTrips}</div>
                <div className="text-muted-foreground font-medium">Mehrtägige Reisen</div>
              </div>
              <div className="bg-card border rounded-xl p-6 min-w-[200px] shadow-sm">
                <div className="text-4xl font-extrabold text-accent-foreground mb-2">{summary.shortTrips}</div>
                <div className="text-muted-foreground font-medium">Kurztrips</div>
              </div>
            </div>
          ) : null}
          <div className="mt-12">
             <Link href="/reisen">
               <Button size="lg" className="font-bold h-14 px-8 rounded-full">Alle Reisen entdecken</Button>
             </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
