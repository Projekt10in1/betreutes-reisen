import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { trips, type Quarter } from "@/data/trips";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Accessibility, Footprints, HeartPulse } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

type Filter = Quarter | "ALL";

export function Catalog() {
  const [selectedQuarter, setSelectedQuarter] = useState<Filter>("ALL");

  const filtered = useMemo(
    () => selectedQuarter === "ALL" ? trips : trips.filter((t) => t.quarter === selectedQuarter),
    [selectedQuarter],
  );

  return (
    <Layout>
      <div className="bg-amber-50 py-16 border-b border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">
            Reisekatalog 2026
          </h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto leading-relaxed">
            Finden Sie die perfekte begleitete Reise für Ihre Bedürfnisse. Alle Reisen werden von qualifizierten Pflegekräften begleitet.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 bg-slate-50 min-h-screen">
        <Tabs value={selectedQuarter} onValueChange={(v) => setSelectedQuarter(v as Filter)}>
          <div className="flex justify-center mb-10">
            <TabsList className="h-14 bg-amber-100/60 rounded-full px-2">
              <TabsTrigger value="ALL" className="text-base px-5 h-10 rounded-full data-[state=active]:bg-amber-400 data-[state=active]:text-amber-950 data-[state=active]:font-bold">Alle Reisen</TabsTrigger>
              <TabsTrigger value="Q1" className="text-base px-5 h-10 rounded-full data-[state=active]:bg-amber-400 data-[state=active]:text-amber-950 data-[state=active]:font-bold">Frühjahr (Q1)</TabsTrigger>
              <TabsTrigger value="Q2" className="text-base px-5 h-10 rounded-full data-[state=active]:bg-amber-400 data-[state=active]:text-amber-950 data-[state=active]:font-bold">Sommer (Q2)</TabsTrigger>
              <TabsTrigger value="Q3" className="text-base px-5 h-10 rounded-full data-[state=active]:bg-amber-400 data-[state=active]:text-amber-950 data-[state=active]:font-bold">Herbst (Q3)</TabsTrigger>
              <TabsTrigger value="Q4" className="text-base px-5 h-10 rounded-full data-[state=active]:bg-amber-400 data-[state=active]:text-amber-950 data-[state=active]:font-bold">Winter (Q4)</TabsTrigger>
            </TabsList>
          </div>

          <div className="min-h-[400px]">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Card
                      data-testid={`card-trip-${trip.id}`}
                      className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all border border-amber-100 hover:border-amber-300 bg-white rounded-2xl"
                    >
                      <div className="relative h-56 bg-amber-50">
                        <img
                          src={trip.imageUrl}
                          alt={trip.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-amber-400 text-amber-950 font-bold text-sm px-3 py-1 border-0">
                            {trip.quarter}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex gap-4 text-sm text-amber-900/60 mb-2">
                          {trip.destination && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-amber-500" />
                              {trip.destination}
                            </span>
                          )}
                          {trip.duration && (
                            <span className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4 text-amber-500" />
                              {trip.duration}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-xl font-serif text-amber-950">{trip.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <p className="text-amber-900/70 mb-6 line-clamp-3 leading-relaxed">{trip.description}</p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-amber-950">Barrierefreiheit &amp; Pflege:</h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.wheelchairAccessible && (
                              <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200 flex gap-1.5 items-center py-1.5 px-3">
                                <Accessibility className="w-4 h-4" /> Rollstuhlgerecht
                              </Badge>
                            )}
                            {trip.walkingAidFriendly && (
                              <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200 flex gap-1.5 items-center py-1.5 px-3">
                                <Footprints className="w-4 h-4" /> Rollatorfreundlich
                              </Badge>
                            )}
                            {trip.highCareNeed && (
                              <Badge variant="outline" className="bg-amber-100 text-amber-900 border-amber-300 flex gap-1.5 items-center py-1.5 px-3">
                                <HeartPulse className="w-4 h-4" /> Hoher Pflegebedarf
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-end items-center bg-amber-50/60 pt-6 border-t border-amber-100">
                        <Link href={`/kontakt?trip=${trip.id}`}>
                          <Button
                            className="font-bold bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full px-6"
                            data-testid={`button-inquire-${trip.id}`}
                          >
                            Anfragen
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-amber-50 rounded-2xl border border-amber-200 border-dashed">
                <p className="text-xl text-amber-900/60">Für diesen Zeitraum sind aktuell keine Reisen verfügbar.</p>
                <Button
                  variant="outline"
                  className="mt-4 border-amber-300 text-amber-900 hover:bg-amber-100"
                  onClick={() => setSelectedQuarter("ALL")}
                >
                  Alle Reisen anzeigen
                </Button>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}
