import { Layout } from "@/components/layout/Layout";

export function Impressum() {
  return (
    <Layout>
      <div className="bg-accent/20 py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Impressum</h1>
          <p className="text-xl text-muted-foreground">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4">Anbieter</h2>
            <address className="not-italic text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-foreground">[Vollständiger Name / Firmenname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] [Ort]</p>
              <p>Deutschland</p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <div className="text-muted-foreground space-y-1">
              <p>Telefon: <span className="text-foreground">[Telefonnummer]</span></p>
              <p>E-Mail: <span className="text-foreground">[E-Mail-Adresse]</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
            <address className="not-italic text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-foreground">[Vor- und Nachname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] [Ort]</p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Handelsregister (falls zutreffend)</h2>
            <div className="text-muted-foreground space-y-1">
              <p>Registergericht: <span className="text-foreground">[Amtsgericht]</span></p>
              <p>Registernummer: <span className="text-foreground">[HRB- oder HRA-Nummer]</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Umsatzsteuer-ID (falls zutreffend)</h2>
            <p className="text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
              <span className="text-foreground">[USt-IdNr.]</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Aufsichtsbehörde (falls zutreffend)</h2>
            <div className="text-muted-foreground space-y-1">
              <p>[Name der zuständigen Aufsichtsbehörde]</p>
              <p>[Adresse der Aufsichtsbehörde]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Streitschlichtung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <p className="text-sm text-muted-foreground border-t pt-6">
            Bitte ersetzen Sie alle Angaben in eckigen Klammern [ ] durch Ihre tatsächlichen Daten.
          </p>
        </div>
      </div>
    </Layout>
  );
}
