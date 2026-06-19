import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, CalendarDays, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fotos: { src: string; caption: string; rotation: number }[] = [
  {
    src: "/trip-beach.png",
    caption: "\"Endlich wieder Meer!\" – Hildegard (74)",
    rotation: -2,
  },
  {
    src: "/hero.jpg",
    caption: "Werner hat alle Weißweinkenntnisse der Gruppe in den Schatten gestellt.",
    rotation: 1.5,
  },
  {
    src: "/trip-spa.png",
    caption: "Irmgards Lieblingsplatz für die nächsten 10 Tage.",
    rotation: -1,
  },
  {
    src: "/trip-beach.png",
    caption: "\"Ich hab mein Rollstuhl-Führerschein für den Strandweg gemacht!\"",
    rotation: 2,
  },
  {
    src: "/trip-alps.png",
    caption: "Sonnenbrand trotz SPF 50 – wir nennen ihn jetzt \"den Portugiesen\".",
    rotation: -1.5,
  },
  {
    src: "/hero.jpg",
    caption: "Sonnenuntergang am letzten Abend. Keiner wollte nach Hause.",
    rotation: 1,
  },
];

const momente: { emoji: string; text: string; autor: string }[] = [
  {
    emoji: "🦀",
    text: "Als Fritz beim Abendessen den Hummer auseinandernehmen wollte und die halbe Gruppe bespritzt hat — Lachanfall bis Mitternacht.",
    autor: "— Irmgard S., Köln",
  },
  {
    emoji: "🎵",
    text: "Hildegard hat spontan eine portugiesische Fado-Sängerin zum Mitsingen animiert. Die Sängerin war begeistert.",
    autor: "— Werner K., Hamburg",
  },
  {
    emoji: "🌊",
    text: "Anneliese hat zum ersten Mal seit 12 Jahren ihre Füße im Atlantik. Sie hat geweint. Wir alle.",
    autor: "— Pflegerin Maria",
  },
  {
    emoji: "🚌",
    text: "Busfahrer António hat uns jeden Morgen mit \"Bom dia, meine deutschen Freunde!\" begrüßt. Am letzten Tag brachte er selbstgebackene Pastéis de Nata mit.",
    autor: "— Gerhard T., Berlin",
  },
];

const stimmen: { name: string; ort: string; text: string }[] = [
  {
    name: "Hildegard M.",
    ort: "München",
    text: "Ich hätte nie gedacht, dass ich mit meinem Rollstuhl noch einmal das Meer sehen würde. Die Pflegerin war wie eine gute Freundin – immer da, wenn ich sie brauchte, aber nie aufdringlich.",
  },
  {
    name: "Werner K.",
    ort: "Hamburg",
    text: "Die Algarve mit Pflegegrad 3 – das klang für mich utopisch. Aber das Team hat alles so unkompliziert gemacht, dass ich nur genießen musste. Im Oktober bin ich wieder dabei.",
  },
  {
    name: "Irmgard & Fritz S.",
    ort: "Köln",
    text: "Wir sind jetzt seit 48 Jahren verheiratet und das war unser schönster Urlaub bisher. Punkt.",
  },
];

function Polaroid({
  src,
  caption,
  rotation,
  delay,
}: {
  src: string;
  caption: string;
  rotation: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotation - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
      style={{ rotate: `${rotation}deg` }}
      className="bg-white p-3 pb-10 shadow-xl cursor-default relative"
    >
      <div className="overflow-hidden w-full aspect-[4/3] bg-amber-50">
        <img src={src} alt={caption} className="w-full h-full object-cover" />
      </div>
      <p className="mt-3 text-center text-sm font-serif italic text-amber-900/70 leading-snug px-1">
        {caption}
      </p>
    </motion.div>
  );
}

export function LetzteReisen() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src="/trip-beach.png"
          alt="Algarve Portugal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-amber-900/50 to-amber-950/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-amber-400 text-amber-950 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              <MapPin className="w-4 h-4" /> Algarve, Portugal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3 drop-shadow-lg">
              Unsere letzte Reise
            </h1>
            <div className="flex items-center justify-center gap-6 text-amber-200 text-sm">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" /> September 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" /> 9 Gäste, 3 Pflegekräfte
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Einleitung */}
      <section className="bg-amber-50 border-b border-amber-100 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl font-serif italic text-amber-900/80 leading-relaxed">
            „Zehn Tage Sonne, Meer und das Lachen von Menschen, die sich vorher nicht kannten —
            und danach nicht mehr voneinander lassen wollten."
          </p>
          <p className="mt-3 text-amber-700 text-sm font-semibold tracking-wide">
            — Pflegerin Maria, Reisebegleiterin
          </p>
        </div>
      </section>

      {/* Aktueller Erfahrungsbericht */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto md:mx-0 max-w-sm w-full"
            >
              <div className="bg-white p-3 pb-12 shadow-xl rotate-[-2deg]">
                <img
                  src="/fanny-giraffe.jpg"
                  alt="Leiterin Fanny übt mit einem Kind die Giraffe"
                  className="w-full aspect-[3/4] object-cover"
                />
                <p className="mt-4 text-center text-sm font-serif italic text-amber-900/70 leading-snug px-2">
                  Heute üben wir die Giraffe :-)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-5">
                Aktuell
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-5 leading-tight">
                Gute Laune bei jedem Wetter
              </h2>
              <p className="text-lg text-amber-900/80 leading-relaxed font-serif italic mb-6">
                „Leiterin Fanny ist auch bei schlechterem Wetter immer mit guten
                Ideen dabei: Heute üben wir die Giraffe :-)"
              </p>
              <p className="text-sm font-semibold text-amber-600">
                — Ein Moment aus unserem Reisealltag
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Foto-Album */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-amber-950 text-center mb-3">
            Das Album
          </h2>
          <p className="text-center text-amber-900/60 mb-14 text-lg">
            Schnappschüsse aus zehn unvergesslichen Tagen.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {fotos.map((f, i) => (
              <Polaroid
                key={i}
                src={f.src}
                caption={f.caption}
                rotation={f.rotation}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Momente */}
      <section className="bg-amber-50 border-y border-amber-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-amber-950 text-center mb-3">
            Die Momente, die bleiben
          </h2>
          <p className="text-center text-amber-900/60 mb-14 text-lg">
            Für die Höhepunkte gibt es keine schönen Fotos — aber Geschichten, die wir noch lange erzählen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {momente.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 flex flex-col gap-4"
              >
                <span className="text-4xl">{m.emoji}</span>
                <p className="text-amber-900/80 leading-relaxed text-base">{m.text}</p>
                <p className="text-sm font-semibold text-amber-600 mt-auto">{m.autor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gäste-Stimmen */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-amber-950 text-center mb-3">
            Was die Gäste sagen
          </h2>
          <p className="text-center text-amber-900/60 mb-14 text-lg">
            In ihren eigenen Worten.
          </p>
          <div className="space-y-6">
            {stimmen.map((s, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-amber-950 font-bold text-lg">
                  {s.name.charAt(0)}
                </div>
                <p className="text-lg font-serif italic text-amber-900/80 leading-relaxed mb-4">
                  „{s.text}"
                </p>
                <footer className="flex items-center gap-2">
                  <span className="font-bold text-amber-950 text-sm">{s.name}</span>
                  <span className="text-amber-900/40 text-sm">aus {s.ort}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-950 mb-4">
            Die nächste Reise wartet auf Sie
          </h2>
          <p className="text-amber-800 text-lg leading-relaxed mb-8">
            Werden Sie Teil der nächsten Gruppe. Neue Ziele, neue Geschichten, neue Freundschaften.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reisen">
              <Button
                size="lg"
                className="bg-amber-950 hover:bg-amber-900 text-white font-bold text-lg px-8 h-14 rounded-full shadow-md"
              >
                Alle Reiseangebote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-950 text-amber-950 hover:bg-amber-500 font-semibold text-lg px-8 h-14 rounded-full"
              >
                Persönliche Beratung
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
