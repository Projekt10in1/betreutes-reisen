import { Layout } from "@/components/layout/Layout";

export function Datenschutz() {
  return (
    <Layout>
      <div className="bg-amber-50 py-16 border-b border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">Datenschutzerklärung</h1>
          <p className="text-xl text-amber-900/70">Informationen gemäß Art. 13 DSGVO</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl bg-slate-50 min-h-screen">
        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Verantwortliche Stelle</h2>
            <address className="not-italic text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-foreground">[Vollständiger Name / Firmenname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] [Ort]</p>
              <p>Telefon: [Telefonnummer]</p>
              <p>E-Mail: [E-Mail-Adresse]</p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Erhobene Daten und Zweck der Verarbeitung</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen. Im Rahmen des Kontaktformulars erheben wir folgende Daten:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Name und Kontaktdaten (E-Mail-Adresse, Telefonnummer)</li>
              <li>Pflegegrad (besondere Kategorie personenbezogener Daten gem. Art. 9 DSGVO)</li>
              <li>Körperliche Einschränkungen und besondere Bedürfnisse (besondere Kategorie gem. Art. 9 DSGVO)</li>
              <li>Wunschreiseziel</li>
              <li>Ihre Nachricht an uns</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground">Rechtsgrundlage:</strong> Die Verarbeitung Ihrer allgemeinen Kontaktdaten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Die Verarbeitung Ihrer Gesundheitsdaten (Pflegegrad, Einschränkungen) erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Empfänger der Daten</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ihre Anfragen werden über den Dienst <strong className="text-foreground">[Name des Formulardienstes, z.B. Web3Forms]</strong> übermittelt. Dabei werden Ihre Daten an Server des Anbieters übertragen. Weitere Informationen zum Datenschutz des Anbieters finden Sie unter: <span className="text-foreground">[Link zur Datenschutzerklärung des Anbieters]</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Eine Weitergabe Ihrer Daten an Dritte erfolgt ansonsten nicht, es sei denn, wir sind gesetzlich dazu verpflichtet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Speicherdauer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Abschluss der Bearbeitung werden Ihre Daten gelöscht, sofern kein berechtigtes Interesse an einer weiteren Speicherung besteht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Widerruf Ihrer Einwilligung</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sie können Ihre Einwilligung zur Verarbeitung Ihrer Gesundheitsdaten jederzeit mit Wirkung für die Zukunft widerrufen. Senden Sie dazu eine E-Mail an:{" "}
              <a
                href="mailto:[E-Mail-Adresse]"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                [E-Mail-Adresse]
              </a>
              . Der Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Ihre Rechte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:[E-Mail-Adresse]"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                [E-Mail-Adresse]
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für <span className="text-foreground">[Bundesland]</span> ist:
            </p>
            <address className="not-italic text-muted-foreground leading-relaxed mt-4 space-y-1">
              <p className="font-semibold text-foreground">[Name der Aufsichtsbehörde]</p>
              <p>[Adresse der Aufsichtsbehörde]</p>
              <p>[Website der Aufsichtsbehörde]</p>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Hosting und technische Infrastruktur</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Website wird gehostet bei <strong className="text-foreground">[Name des Hosting-Anbieters, z.B. Vercel Inc.]</strong>. Dabei können technische Zugriffsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) temporär in Server-Logs gespeichert werden. Weitere Informationen finden Sie in der Datenschutzerklärung des Hosting-Anbieters: <span className="text-foreground">[Link]</span>.
            </p>
          </section>

          <p className="text-sm text-muted-foreground border-t pt-6">
            Bitte ersetzen Sie alle Angaben in eckigen Klammern [ ] durch Ihre tatsächlichen Daten. Diese Datenschutzerklärung ist ein Platzhalter und ersetzt keine rechtliche Beratung.
          </p>
        </div>
      </div>
    </Layout>
  );
}
