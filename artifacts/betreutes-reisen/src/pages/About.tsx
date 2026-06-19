import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, Award } from "lucide-react";

export function About() {
  return (
    <Layout>
      <div className="bg-amber-50 py-16 border-b border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">Über uns</h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto leading-relaxed">
            Wir bringen Freude, Sicherheit und Mobilität zurück in Ihr Leben. Erfahren Sie mehr über unsere Mission und das Team.
          </p>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-6">Unsere Mission</h2>
              <div className="space-y-5 text-lg text-amber-900/70 leading-relaxed">
                <p>
                  Reisen bedeutet Freiheit, Entdeckung und Lebensfreude. Doch mit zunehmendem Alter oder bei Pflegebedarf wird das Reisen oft zu einer Herausforderung – für die Betroffenen selbst und für ihre Angehörigen.
                </p>
                <p>
                  Wir haben <strong className="text-amber-950">betreutes-reisen.org</strong> gegründet, um genau diese Hürde zu nehmen. Unser Ziel ist es, Ihnen sichere, bestens organisierte und liebevoll begleitete Reiseerlebnisse zu ermöglichen.
                </p>
                <p>
                  Wir sind kein gewöhnlicher Reiseveranstalter. Wir sind Pflegefachkräfte aus Leidenschaft, die das Reisen lieben und diese Freude mit Ihnen teilen möchten.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-amber-200/40 transform translate-x-4 translate-y-4 rounded-2xl" />
              <img
                src="/team.png"
                alt="Unser Pflegeteam"
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-y border-amber-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-950 mb-14">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-200">
                <Heart className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-950 mb-4">Echte Empathie</h3>
              <p className="text-amber-900/70 leading-relaxed">
                Bei uns sind Sie keine Nummer. Wir nehmen uns Zeit für Sie, hören Ihnen zu und gestalten die Reise nach Ihren individuellen Bedürfnissen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-200">
                <Shield className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-950 mb-4">Kompromisslose Sicherheit</h3>
              <p className="text-amber-900/70 leading-relaxed">
                Ihre Gesundheit steht an erster Stelle. Vom Medikamentenmanagement bis zur Notfallversorgung – wir sind auf alles vorbereitet.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-200">
                <Award className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-amber-950 mb-4">Fachliche Expertise</h3>
              <p className="text-amber-900/70 leading-relaxed">
                Jede Reise wird von staatlich examinierten Pflegefachkräften aus Deutschland begleitet. Professionalität, der Sie vertrauen können.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
