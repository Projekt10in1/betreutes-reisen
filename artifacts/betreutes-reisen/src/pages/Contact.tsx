import { Layout } from "@/components/layout/Layout";
import { useCreateInquiry } from "@workspace/api-client-react";
import { InquiryInputCareLevel } from "@workspace/api-client-react/src/generated/api.schemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen an."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().min(5, "Bitte geben Sie eine Telefonnummer an."),
  careLevel: z.string(),
  limitations: z.string().optional(),
  wishDestination: z.string().optional(),
  message: z.string().min(10, "Bitte hinterlassen Sie eine kurze Nachricht."),
});

export function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const createInquiry = useCreateInquiry();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      careLevel: "none",
      limitations: "",
      wishDestination: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Need to cast the careLevel correctly
    let parsedCareLevel: any = values.careLevel;
    if (values.careLevel !== "none") {
      parsedCareLevel = parseInt(values.careLevel, 10);
    }

    createInquiry.mutate(
      {
        data: {
          ...values,
          careLevel: parsedCareLevel,
        },
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Fehler beim Senden",
            description: "Leider konnte Ihre Anfrage nicht gesendet werden. Bitte versuchen Sie es später erneut.",
          });
        },
      }
    );
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
              <h2 className="text-3xl font-bold mb-4">Vielen Dank für Ihre Anfrage!</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ihre Nachricht ist sicher bei uns eingetroffen. Eine unserer Pflegefachkräfte wird sich in den nächsten Tagen persönlich telefonisch bei Ihnen melden, um Ihre Reise-Wünsche und Bedürfnisse in Ruhe zu besprechen.
              </p>
              <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg">
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
                          <Input className="h-14 text-base" placeholder="Max Mustermann" {...field} />
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
                          <Input className="h-14 text-base" type="tel" placeholder="Für unseren Rückruf" {...field} />
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
                      <FormLabel className="text-base">E-Mail Adresse</FormLabel>
                      <FormControl>
                        <Input className="h-14 text-base" type="email" placeholder="max@beispiel.de" {...field} />
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
                            <SelectTrigger className="h-14 text-base">
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
                          <Input className="h-14 text-base" placeholder="z.B. Ostsee, Alpen..." {...field} />
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
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold"
                  disabled={createInquiry.isPending}
                >
                  {createInquiry.isPending ? (
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
