import { Layout } from "@/components/layout/Layout";
import { Link } from "wouter";

export function Agb() {
  return (
    <Layout>
      <div className="bg-amber-50 py-16 border-b border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-4">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-xl text-amber-900/70">Gültig für alle Reiseangebote und Dienstleistungen von betreutes-reisen.org</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 1 Geltungsbereich und Anbieter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
            </p>
            <address className="not-italic text-muted-foreground mt-3 space-y-1 ml-4 border-l-2 border-primary/30 pl-4">
              <p className="font-semibold text-foreground">[Vollständiger Name / Firmenname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] [Ort]</p>
              <p>E-Mail: [E-Mail-Adresse]</p>
            </address>
            <p className="text-muted-foreground leading-relaxed mt-4">
              (nachfolgend „Anbieter") und den Kunden, die Reiseangebote oder Begleitdienstleistungen in Anspruch nehmen (nachfolgend „Reisende"). Abweichende Bedingungen des Kunden haben keine Gültigkeit, es sei denn, der Anbieter stimmt diesen ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 2 Leistungsgegenstand</h2>
            <p className="text-muted-foreground leading-relaxed">
              Der Anbieter vermittelt und organisiert begleitete Reisen und Tagesausflüge für Senioren, Menschen mit Pflegebedarf und Menschen mit Einschränkungen. Die Begleitung erfolgt durch ausgebildete Fachkräfte aus der Pflege und Betreuung. Der genaue Leistungsumfang (Ziel, Dauer, enthaltene Leistungen, Preis) wird in der jeweiligen Reisebeschreibung und im individuellen Angebot festgelegt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 3 Vertragsschluss und Buchungsablauf</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Die Anfrage über das Kontaktformular auf dieser Website stellt noch kein verbindliches Angebot dar, sondern eine unverbindliche Anfrage (Kennenlern-Anfrage).
              </li>
              <li>
                Nach Eingang der Anfrage nimmt der Anbieter persönlich Kontakt auf, um die individuellen Bedürfnisse und Wünsche zu besprechen.
              </li>
              <li>
                Ein verbindlicher Vertrag kommt erst durch die schriftliche Buchungsbestätigung des Anbieters zustande.
              </li>
              <li>
                Mit der Buchungsbestätigung erhält der Reisende alle relevanten Informationen zu Leistungen, Preis und Zahlungsmodalitäten.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Die auf der Website angegebenen Preise sind Richtpreise (ab-Preise) und können je nach Reisedatum, Gruppengröße und individuellem Betreuungsaufwand variieren. Der verbindliche Preis wird im individuellen Angebot festgelegt.
              </li>
              <li>
                Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer.
              </li>
              <li>
                Zahlungsmodalitäten (Anzahlung, Restzahlung, Fälligkeiten) werden im individuellen Angebot festgelegt und bei Buchungsbestätigung mitgeteilt.
              </li>
              <li>
                Bei Nichtzahlung fälliger Beträge behält sich der Anbieter das Recht vor, die gebuchte Leistung zu stornieren.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 5 Rücktritt und Stornierung durch den Reisenden</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Der Reisende kann jederzeit vor Antritt der Reise zurücktreten. Für den Fall des Rücktritts gelten folgende Stornierungsgebühren (bezogen auf den Gesamtpreis der gebuchten Leistung):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-muted-foreground border border-border rounded-xl overflow-hidden">
                <thead className="bg-muted/50 text-foreground font-semibold">
                  <tr>
                    <th className="text-left p-4 border-b border-border">Zeitpunkt des Rücktritts</th>
                    <th className="text-left p-4 border-b border-border">Stornierungsgebühr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/30">
                    <td className="p-4">Mehr als [X] Tage vor Reisebeginn</td>
                    <td className="p-4">Kostenfrei</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4">[X] bis [Y] Tage vor Reisebeginn</td>
                    <td className="p-4">[Z] % des Reisepreises</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4">Weniger als [Y] Tage vor Reisebeginn</td>
                    <td className="p-4">[Z] % des Reisepreises</td>
                  </tr>
                  <tr className="hover:bg-muted/30">
                    <td className="p-4">Am Reisetag / Nichtantritt</td>
                    <td className="p-4">[Z] % des Reisepreises</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Der Stornierung muss schriftlich (per E-Mail an [E-Mail-Adresse]) erfolgen. Es wird empfohlen, eine Reiserücktrittsversicherung abzuschließen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 6 Änderungen und Rücktritt durch den Anbieter</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Der Anbieter behält sich vor, Reiseleistungen bei außergewöhnlichen Umständen (z.B. höhere Gewalt, behördliche Anordnungen, unzureichende Buchungszahlen) zu ändern oder abzusagen. In diesem Fall werden bereits bezahlte Beträge vollständig erstattet.
              </li>
              <li>
                Geringfügige Änderungen des Reiseprogramms (z.B. Austausch eines Ausflugsziels durch ein gleichwertiges), die erst nach Buchung notwendig werden, berechtigen nicht zum Rücktritt ohne Stornogebühren.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 7 Pflichten des Reisenden</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Der Reisende ist verpflichtet, alle gesundheitsrelevanten Informationen, die für die Reisebegleitung und Sicherheit wichtig sind, vollständig und wahrheitsgemäß anzugeben.
              </li>
              <li>
                Erforderliche Reisedokumente (Personalausweis, Reisepass) sind selbst zu beschaffen und mitzuführen.
              </li>
              <li>
                Der Reisende ist verpflichtet, Mängel unverzüglich dem Reiseleiter oder dem Anbieter zu melden, um eine Abhilfe zu ermöglichen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 8 Haftung</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Der Anbieter haftet für die sorgfältige Auswahl und Überwachung der eingesetzten Begleitpersonen und Dienstleister.
              </li>
              <li>
                Die Haftung des Anbieters für Schäden, die nicht auf Körperverletzung beruhen, ist auf den dreifachen Reisepreis begrenzt, sofern ein Schaden weder vorsätzlich noch grob fahrlässig herbeigeführt wurde.
              </li>
              <li>
                Für Schäden, die durch Dritte (z.B. Hoteliers, Transportunternehmen) verursacht werden, haftet der Anbieter nur im Rahmen seiner Sorgfaltspflicht bei der Auswahl.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 9 Datenschutz</h2>
            <p className="text-muted-foreground leading-relaxed">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-primary underline underline-offset-2 hover:text-primary/80">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 10 Anwendbares Recht und Gerichtsstand</h2>
            <ol className="text-muted-foreground leading-relaxed space-y-3 list-decimal list-inside ml-2">
              <li>
                Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
              </li>
              <li>
                Gerichtsstand für Kaufleute und juristische Personen des öffentlichen Rechts ist [Ort des Anbieters]. Im Übrigen gelten die gesetzlichen Regelungen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">§ 11 Salvatorische Klausel</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden, so bleibt davon die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          </section>

          <p className="text-sm text-muted-foreground border-t pt-6">
            Stand: [Monat Jahr] — Bitte ersetzen Sie alle Angaben in eckigen Klammern [ ] durch Ihre tatsächlichen Daten. Diese AGB sind ein Platzhalter und ersetzen keine rechtliche Beratung.
          </p>
        </div>
      </div>
    </Layout>
  );
}
