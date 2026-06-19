import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, Award } from "lucide-react";

export function About() {
  return (
    <Layout>
      <div className="bg-accent/20 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Über uns</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir bringen Freude, Sicherheit und Mobilität zurück in Ihr Leben. Erfahren Sie mehr über unsere Mission und das Team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Unsere Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Reisen bedeutet Freiheit, Entdeckung und Lebensfreude. Doch mit zunehmendem Alter oder bei Pflegebedarf wird das Reisen oft zu einer Herausforderung – für die Betroffenen selbst und für ihre Angehörigen.
              </p>
              <p>
                Wir haben <strong>betreutes-reisen.org</strong> gegründet, um genau diese Hürde zu nehmen. Unser Ziel ist es, Ihnen sichere, bestens organisierte und liebevoll begleitete Reiseerlebnisse zu ermöglichen.
              </p>
              <p>
                Wir sind kein gewöhnlicher Reiseveranstalter. Wir sind Pflegefachkräfte aus Leidenschaft, die das Reisen lieben und diese Freude mit Ihnen teilen möchten.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="/team.png" 
              alt="Unser Pflegeteam" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>

        <div className="bg-card border rounded-3xl p-10 md:p-16 shadow-sm mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Echte Empathie</h3>
              <p className="text-muted-foreground">
                Bei uns sind Sie keine Nummer. Wir nehmen uns Zeit für Sie, hören Ihnen zu und gestalten die Reise nach Ihren individuellen Bedürfnissen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kompromisslose Sicherheit</h3>
              <p className="text-muted-foreground">
                Ihre Gesundheit steht an erster Stelle. Vom Medikamentenmanagement bis zur Notfallversorgung – wir sind auf alles vorbereitet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fachliche Expertise</h3>
              <p className="text-muted-foreground">
                Jede Reise wird von staatlich examinierten Pflegefachkräften aus Deutschland begleitet. Professionalität, der Sie vertrauen können.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
