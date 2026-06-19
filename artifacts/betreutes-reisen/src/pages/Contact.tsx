import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, CheckCircle2, PhoneCall } from "lucide-react";
import { Link } from "wouter";

// ---------------------------------------------------------------------------
// Formular-Endpoint
// ---------------------------------------------------------------------------
// Setzen Sie VITE_FORM_ENDPOINT in Ihrer .env-Datei (oder in den Umgebungsvariablen
// Ihres Hosting-Anbieters) auf die URL Ihres Formular-Dienstes.
//
// Beispiel für Web3Forms:
//   VITE_FORM_ENDPOINT=https://api.web3forms.com/submit
//   VITE_WEB3FORMS_KEY=<Ihr_Access_Key>
//
// Der POST-Body wird als JSON gesendet. Für Web3Forms muss zusätzlich ein
// "access_key"-Feld im Body enthalten sein (siehe onSubmit unten).
// ---------------------------------------------------------------------------
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().min(5, "Bitte geben Sie eine Telefonnummer an."),
  careLevel: z.string(),
  limitations: z.string().optional(),
  wishDestination: z.string().optional(),
  message: z.string().min(10, "Bitte hinterlassen Sie eine kurze Nachricht."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Bitte stimmen Sie der Datenschutzeinwilligung zu, um die Anfrage absenden zu können." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const careLevelLabels: Record<string, string> = {
  none: "Kein Pflegegrad",
  "1": "Pflegegrad 1",
  "2": "Pflegegrad 2",
  "3": "Pflegegrad 3",
  "4": "Pflegegrad 4",
  "5": "Pflegegrad 5",
};

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      careLevel: "none",
      limitations: "",
      wishDestination: "",
      message: "",
      consent: undefined,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    const endpoint = FORM_ENDPOINT;

    if (!endpoint) {
      // Kein Endpoint konfiguriert – Formular trotzdem als erfolgreich markieren
      // (für lokale Entwicklung ohne Backend)
      console.warn(
        "[Kontaktformular] VITE_FORM_ENDPOINT ist nicht gesetzt. " +
        "Bitte setzen Sie die Umgebungsvariable, um Anfragen tatsächlich zu versenden.",
      );
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: Record<string, string> = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        careLevel: careLevelLabels[values.careLevel] ?? values.careLevel,
        limitations: values.limitations ?? "",
        wishDestination: values.wishDestination ?? "",
        message: values.message,
      };

      // Optionaler Web3Forms Access Key (falls VITE_WEB3FORMS_KEY gesetzt ist)
      const web3Key = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
      if (web3Key) {
        payload["access_key"] = web3Key;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setSubmitError(
        "Leider konnte Ihre Anfrage nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="bg-accent/20 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kennenlern-Anfrage</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir freuen uns darauf, Sie kennenzulernen. Teilen Sie uns Ihre Wünsche mit, und wir melden uns persönlich bei Ihnen.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {isSuccess ? (
          <Card className="border-secondary border-2 bg-secondary/5">
            <CardContent className="pt-10 pb-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-4" data-testid="text-success-heading">
                Vielen Dank für Ihre Anfrage!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ihre Nachricht ist sicher bei uns eingetroffen. Eine unserer Pflegefachkräfte wird sich in den nächsten Tagen persönlich telefonisch bei Ihnen melden, um Ihre Reise-Wünsche und Bedürfnisse in Ruhe zu besprechen.
              </p>
              <Button
                onClick={() => { setIsSuccess(false); form.reset(); }}
                variant="outline"
                size="lg"
                data-testid="button-another-inquiry"
              >
                Weitere Anfrage senden
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-4 mb-8 p-4 bg-muted/50 rounded-xl">
              <PhoneCall className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-bold text-lg">Persönliches Gespräch</h3>
                <p className="text-muted-foreground">Wir rufen Sie gerne an, um alle Details zu klären. Ganz unverbindlich.</p>
              </div>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm" role="alert">
                {submitError}
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Vollständiger Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 text-base"
                            placeholder="Max Mustermann"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Telefonnummer</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 text-base"
                            type="tel"
                            placeholder="Für unseren Rückruf"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">E-Mail-Adresse</FormLabel>
                      <FormControl>
                        <Input
                          className="h-14 text-base"
                          type="email"
                          placeholder="max@beispiel.de"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="careLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Pflegegrad</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 text-base" data-testid="select-care-level">
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">Kein Pflegegrad</SelectItem>
                            <SelectItem value="1">Pflegegrad 1</SelectItem>
                            <SelectItem value="2">Pflegegrad 2</SelectItem>
                            <SelectItem value="3">Pflegegrad 3</SelectItem>
                            <SelectItem value="4">Pflegegrad 4</SelectItem>
                            <SelectItem value="5">Pflegegrad 5</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="wishDestination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Wunschziel (optional)</FormLabel>
                        <FormControl>
                          <Input
                            className="h-14 text-base"
                            placeholder="z.B. Ostsee, Alpen..."
                            data-testid="input-destination"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="limitations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Körperliche Einschränkungen / Besondere Bedürfnisse (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[100px] text-base resize-y"
                          placeholder="z.B. Rollstuhlnutzer, spezielle Diät, Demenz..."
                          data-testid="textarea-limitations"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Ihre Nachricht</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[150px] text-base resize-y"
                          placeholder="Wie können wir Ihnen helfen?"
                          data-testid="textarea-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-5">
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            id="consent"
                            checked={field.value === true}
                            onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                            className="mt-1 h-5 w-5 shrink-0"
                            data-testid="checkbox-consent"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="consent"
                          className="text-sm leading-relaxed font-normal cursor-pointer"
                        >
                          Ich willige ein, dass meine Angaben (einschließlich meiner Gesundheitsdaten wie Pflegegrad und Einschränkungen) zur Bearbeitung meiner Anfrage verarbeitet werden. Hinweis: Sie können diese Einwilligung jederzeit für die Zukunft per E-Mail widerrufen. Weitere Informationen finden Sie in unserer{" "}
                          <Link
                            href="/datenschutz"
                            className="text-primary underline underline-offset-2 hover:text-primary/80"
                          >
                            Datenschutzerklärung
                          </Link>
                          .
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anfrage unverbindlich absenden"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </Layout>
  );
}
