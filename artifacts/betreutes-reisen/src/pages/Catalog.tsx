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
      <div className="bg-accent/20 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Reisekatalog 2026</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finden Sie die perfekte begleitete Reise für Ihre Bedürfnisse. Alle Reisen werden von qualifizierten Pflegekräften begleitet.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <Tabs value={selectedQuarter} onValueChange={(v) => setSelectedQuarter(v as Filter)}>
          <div className="flex justify-center mb-8">
            <TabsList className="h-14">
              <TabsTrigger value="ALL" className="text-lg px-6 h-12">Alle Reisen</TabsTrigger>
              <TabsTrigger value="Q1" className="text-lg px-6 h-12">Frühjahr (Q1)</TabsTrigger>
              <TabsTrigger value="Q2" className="text-lg px-6 h-12">Sommer (Q2)</TabsTrigger>
              <TabsTrigger value="Q3" className="text-lg px-6 h-12">Herbst (Q3)</TabsTrigger>
              <TabsTrigger value="Q4" className="text-lg px-6 h-12">Winter (Q4)</TabsTrigger>
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
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      data-testid={`card-trip-${trip.id}`}
                      className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary/20"
                    >
                      <div className="relative h-56 bg-muted">
                        <img
                          src={trip.imageUrl}
                          alt={trip.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur font-bold text-sm px-3 py-1">
                            {trip.quarter}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-2">
                          {trip.destination && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {trip.destination}
                            </span>
                          )}
                          {trip.duration && (
                            <span className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4" />
                              {trip.duration}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-xl">{trip.title}</CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-6 line-clamp-3">{trip.description}</p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">Barrierefreiheit & Pflege:</h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.wheelchairAccessible && (
                              <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20 flex gap-1.5 items-center py-1.5 px-3">
                                <Accessibility className="w-4 h-4" /> Rollstuhlgerecht
                              </Badge>
                            )}
                            {trip.walkingAidFriendly && (
                              <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20 flex gap-1.5 items-center py-1.5 px-3">
                                <Footprints className="w-4 h-4" /> Rollatorfreundlich
                              </Badge>
                            )}
                            {trip.highCareNeed && (
                              <Badge variant="outline" className="bg-primary/10 text-primary-foreground border-primary/20 flex gap-1.5 items-center py-1.5 px-3">
                                <HeartPulse className="w-4 h-4" /> Hoher Pflegebedarf
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-end items-center bg-muted/30 pt-6">
                        <Link href={`/kontakt?trip=${trip.id}`}>
                          <Button className="font-bold" data-testid={`button-inquire-${trip.id}`}>
                            Anfragen
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                <p className="text-xl text-muted-foreground">Für diesen Zeitraum sind aktuell keine Reisen verfügbar.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSelectedQuarter("ALL")}>
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
