import { Layout } from "@/components/layout/Layout";
import { useListTrips } from "@workspace/api-client-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Accessibility, Footprints, HeartPulse, Loader2, Euro } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Catalog() {
  const [selectedQuarter, setSelectedQuarter] = useState<ListTripsQuarter | "ALL">("ALL");

  const { data: trips, isLoading } = useListTrips(
    selectedQuarter === "ALL" ? {} : { quarter: selectedQuarter }
  );

  return (
    <Layout>
      <div className="bg-accent/20 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Reisekatalog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finden Sie die perfekte begleitete Reise für Ihre Bedürfnisse. Alle Reisen werden von qualifizierten Pflegekräften begleitet.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="ALL" value={selectedQuarter} onValueChange={(v) => setSelectedQuarter(v as any)}>
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
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
              </div>
            ) : trips && trips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trips.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary/20">
                      <div className="relative h-56 bg-muted">
                        <img 
                          src={trip.imageUrl || "/trip-alps.png"} 
                          alt={trip.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/trip-beach.png";
                          }}
                        />
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur font-bold text-sm px-3 py-1">
                            {trip.quarter}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex gap-2 text-sm text-muted-foreground">
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
                        </div>
                        <CardTitle className="text-2xl">{trip.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                          {trip.description}
                        </p>
                        
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
                      <CardFooter className="flex justify-between items-center bg-muted/30 pt-6">
                        <div className="flex items-center font-bold text-xl">
                          {trip.price ? (
                            <>
                              <Euro className="w-5 h-5 mr-1" />
                              {trip.price}
                            </>
                          ) : "Auf Anfrage"}
                        </div>
                        <Link href={`/kontakt?trip=${trip.id}`}>
                          <Button className="font-bold">Anfragen</Button>
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
