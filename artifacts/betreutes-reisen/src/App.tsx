import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import { Catalog } from "@/pages/Catalog";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Impressum } from "@/pages/Impressum";
import { Datenschutz } from "@/pages/Datenschutz";
import { Agb } from "@/pages/Agb";
import { LetzteReisen } from "@/pages/LetzteReisen";
import { PasswordGate, usePasswordGate } from "@/components/PasswordGate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reisen" component={Catalog} />
      <Route path="/ueber-uns" component={About} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route path="/agb" component={Agb} />
      <Route path="/letzte-reisen" component={LetzteReisen} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { isAuthenticated, unlock } = usePasswordGate();

  return (
    <TooltipProvider>
      {isAuthenticated ? (
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      ) : (
        <PasswordGate onUnlock={unlock} />
      )}
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
