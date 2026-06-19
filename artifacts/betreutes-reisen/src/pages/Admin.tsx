import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useListInquiries } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Lock, Loader2, CalendarIcon, Mail, Phone, HeartPulse, User } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // We only fetch when authenticated
  const { data: inquiries, isLoading, isError } = useListInquiries(
    { adminPassword: password },
    { 
      query: { 
        enabled: isAuthenticated,
        retry: false
      } 
    }
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() !== "") {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  // If query returns error after trying to authenticate (likely 401/403)
  if (isAuthenticated && isError) {
    setIsAuthenticated(false);
    setPassword("");
    alert("Falsches Passwort");
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 flex-grow">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <Card className="border-t-4 border-t-primary shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl">Admin-Bereich</CardTitle>
                <CardDescription>
                  Bitte geben Sie das Passwort ein, um die Anfragen einzusehen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Passwort"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={!password}>
                    Einloggen
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-card p-6 rounded-xl border shadow-sm">
              <div>
                <h1 className="text-3xl font-bold">Kundenanfragen</h1>
                <p className="text-muted-foreground mt-1">Übersicht aller eingegangenen Kontaktanfragen</p>
              </div>
              <Button variant="outline" onClick={handleLogout}>Abmelden</Button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
              </div>
            ) : inquiries && inquiries.length > 0 ? (
              <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[150px]">Datum</TableHead>
                        <TableHead>Kontakt</TableHead>
                        <TableHead>Pflegegrad</TableHead>
                        <TableHead>Wunschziel</TableHead>
                        <TableHead className="max-w-[300px]">Nachricht</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inquiries.map((inquiry) => (
                        <TableRow key={inquiry.id} className="hover:bg-muted/30">
                          <TableCell className="align-top font-medium">
                            {format(new Date(inquiry.createdAt), "dd.MM.yyyy", { locale: de })}
                            <div className="text-xs text-muted-foreground">
                              {format(new Date(inquiry.createdAt), "HH:mm", { locale: de })} Uhr
                            </div>
                          </TableCell>
                          <TableCell className="align-top">
                            <div className="font-bold">{inquiry.name}</div>
                            <div className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                              <Mail className="w-3 h-3" />
                              <a href={`mailto:${inquiry.email}`} className="hover:underline hover:text-primary">{inquiry.email}</a>
                            </div>
                            <div className="text-sm flex items-center gap-1 mt-1 text-muted-foreground">
                              <Phone className="w-3 h-3" />
                              <a href={`tel:${inquiry.phone}`} className="hover:underline hover:text-primary">{inquiry.phone}</a>
                            </div>
                          </TableCell>
                          <TableCell className="align-top">
                            {inquiry.careLevel !== "none" ? (
                              <div className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary-foreground px-2.5 py-1 rounded-md text-sm font-semibold border border-secondary/30">
                                <HeartPulse className="w-4 h-4" />
                                Pflegegrad {inquiry.careLevel}
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground px-2.5 py-1 rounded-md text-sm">
                                <User className="w-4 h-4" />
                                Kein Pflegegrad
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="align-top text-muted-foreground">
                            {inquiry.wishDestination || "—"}
                          </TableCell>
                          <TableCell className="align-top">
                            <p className="text-sm line-clamp-3 mb-2">{inquiry.message}</p>
                            {inquiry.limitations && (
                              <div className="text-xs bg-muted/50 p-2 rounded border">
                                <span className="font-semibold block mb-1">Einschränkungen:</span>
                                {inquiry.limitations}
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-xl border border-dashed">
                <p className="text-xl text-muted-foreground">Bisher sind keine Anfragen eingegangen.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
