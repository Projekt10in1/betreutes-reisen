import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, MapPin, CalendarDays, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Erfahrungsbericht {
  id: number;
  name: string;
  ort: string;
  reiseziel: string;
  reiseart: string;
  datum: string;
  bewertung: number;
  zitat: string;
  foto: string;
  reiseFoto: string;
}

const berichte: Erfahrungsbericht[] = [
  {
    id: 1,
    name: "Hildegard M.",
    ort: "München",
    reiseziel: "Algarve, Portugal",
    reiseart: "Mehrtägige Reise",
    datum: "März 2026",
    bewertung: 5,
    zitat: "Ich hätte nie gedacht, dass ich mit meinem Rollstuhl noch einmal das Meer sehen würde. Die Pflegerinnen waren wie gute Freundinnen – immer da, wenn ich sie brauchte, aber nie aufdringlich. Eine unvergessliche Woche.",
    foto: "/hero.png",
    reiseFoto: "/trip-beach.png",
  },
  {
    id: 2,
    name: "Werner K.",
    ort: "Hamburg",
    reiseziel: "Salzkammergut, Österreich",
    reiseart: "Mehrtägige Reise",
    datum: "Februar 2026",
    bewertung: 5,
    zitat: "Als Pflegegrad-3-Patient war ich anfangs skeptisch, ob eine Reise überhaupt möglich ist. Das Team hat mich eines Besseren belehrt. Die Medikamente wurden pünktlich gegeben, alles war barrierefrei. Ich komme nächstes Jahr wieder!",
    foto: "/hero.png",
    reiseFoto: "/trip-alps.png",
  },
  {
    id: 3,
    name: "Irmgard und Fritz S.",
    ort: "Köln",
    reiseziel: "Wiesbaden – Tagesausflug",
    reiseart: "Tagesausflug",
    datum: "Januar 2026",
    bewertung: 5,
    zitat: "Mein Mann und ich haben den Ausflug nach Wiesbaden in vollen Zügen genossen. Die kleine Gruppe war angenehm, und die Reisebegleiterin kannte jeden beim Namen. So macht Reisen Freude!",
    foto: "/hero.png",
    reiseFoto: "/trip-spa.png",
  },
  {
    id: 4,
    name: "Anneliese B.",
    ort: "Stuttgart",
    reiseziel: "Toskana, Italien",
    reiseart: "Mehrtägige Reise",
    datum: "Dezember 2025",
    bewertung: 5,
    zitat: "Die Toskana im Herbst – traumhaft. Ich leide an Demenz im Frühstadium und war unsicher, ob das für mich infrage kommt. Das Team hat mich so liebevoll begleitet, dass ich mich zu keiner Minute überfordert gefühlt habe.",
    foto: "/hero.png",
    reiseFoto: "/trip-beach.png",
  },
  {
    id: 5,
    name: "Gerhard T.",
    ort: "Berlin",
    reiseziel: "Heidelberg – Halbtagesausflug",
    reiseart: "Halbtagesausflug",
    datum: "November 2025",
    bewertung: 5,
    zitat: "Nach meinem Schlaganfall dachte ich, die Welt sei auf mein Zimmer geschrumpft. Der Ausflug nach Heidelberg war ein erster großer Schritt zurück ins Leben. Herzlichen Dank an das ganze Team.",
    foto: "/hero.png",
    reiseFoto: "/trip-alps.png",
  },
  {
    id: 6,
    name: "Elfriede N.",
    ort: "Düsseldorf",
    reiseziel: "Gran Canaria, Spanien",
    reiseart: "Mehrtägige Reise",
    datum: "Oktober 2025",
    bewertung: 5,
    zitat: "Zehn Tage Sonne, Meer und beste Betreuung. Als meine Tochter hörte, wie gut organisiert alles war, hat sie sofort für mich das nächste Jahr gebucht. Diese Reise schenkt mir Kraft für den Alltag.",
    foto: "/hero.png",
    reiseFoto: "/trip-spa.png",
  },
];

function Sterne({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < n ? "fill-amber-400 text-amber-400" : "text-amber-200"}`}
        />
      ))}
    </div>
  );
}

export function LetzteReisen() {
  return (
    <Layout>
      <div className="bg-amber-50 py-16 border-b border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">
            Letzte Reisen &amp; Erfahrungen
          </h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto leading-relaxed">
            Was unsere Gäste erlebt und mitgenommen haben – erzählt in ihren eigenen Worten.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {berichte.map((b, index) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-amber-100 hover:border-amber-300 flex flex-col"
              >
                <div className="relative h-52 bg-amber-50">
                  <img
                    src={b.reiseFoto}
                    alt={b.reiseziel}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-white font-semibold text-base drop-shadow flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-300" />
                        {b.reiseziel}
                      </span>
                    </div>
                    <span className="bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1.5 rounded-full">
                      {b.reiseart}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Sterne n={b.bewertung} />
                    <span className="text-sm text-amber-900/50 flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4" />
                      {b.datum}
                    </span>
                  </div>

                  <div className="relative flex-grow mb-6">
                    <Quote className="absolute -top-1 -left-1 w-8 h-8 text-amber-200" />
                    <p className="text-amber-900/80 leading-relaxed italic pl-6 pt-1">
                      {b.zitat}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-amber-100">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-base shrink-0">
                      {b.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-amber-950 text-sm">{b.name}</p>
                      <p className="text-amber-900/50 text-xs">{b.ort}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-amber-50 border-t border-amber-100 py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-serif font-bold text-amber-950 mb-4">
            Ihre Reise wartet
          </h2>
          <p className="text-amber-900/70 text-lg leading-relaxed mb-8">
            Werden Sie Teil unserer Reisegemeinschaft. Wir freuen uns darauf, auch Ihnen ein unvergessliches Erlebnis zu schenken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reisen">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold text-lg px-8 h-14 rounded-full shadow-md"
              >
                Reiseangebote ansehen
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-300 text-amber-900 hover:bg-amber-100 font-semibold text-lg px-8 h-14 rounded-full"
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
