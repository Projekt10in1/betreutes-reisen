import { useState, useEffect } from "react";
import { Heart, HandHelping, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "br_preview_auth";
const PREVIEW_PASSWORD = "reisen2026";

export function usePasswordGate() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  const unlock = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAuthenticated(true);
  };

  return { isAuthenticated, unlock };
}

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PREVIEW_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword("");
    }
  };

  useEffect(() => {
    if (error) {
      const t = setTimeout(() => setError(false), 3000);
      return () => clearTimeout(t);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hintergrund-Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-yellow-200 to-lime-200" />

      {/* Dekorative Kreise */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-400/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-lime-300/40 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-yellow-300/20 blur-2xl" />

      {/* Karte */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={shaking
          ? { x: [-8, 8, -6, 6, -3, 3, 0], opacity: 1, scale: 1 }
          : { opacity: 1, y: 0, scale: 1, x: 0 }
        }
        transition={{ duration: shaking ? 0.4 : 0.5 }}
        className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md mx-4 flex flex-col items-center text-center"
      >
        {/* Logo */}
        <div className="relative w-16 h-16 flex items-center justify-center bg-amber-400 rounded-full shadow-md mb-6">
          <Heart className="absolute w-7 h-7 top-3.5" />
          <HandHelping className="absolute w-5 h-5 bottom-2.5 right-2.5 text-amber-950/70" />
        </div>

        <h1 className="text-2xl font-serif font-bold text-amber-950 mb-2 leading-snug">
          betreutes-reisen.org
        </h1>
        <p className="text-lime-700 font-semibold text-sm uppercase tracking-widest mb-6">
          Demnächst für Sie erreichbar
        </p>

        <div className="w-12 h-px bg-amber-200 mb-6" />

        <p className="text-amber-900/70 text-base leading-relaxed mb-8">
          Hier entsteht <strong className="text-amber-950">betreutes-reisen.org</strong> – eine neue Art zu reisen, sicher und begleitet. Bitte geben Sie das Passwort ein, um die Vorschau zu sehen.
        </p>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              className="pl-10 pr-12 h-13 text-base border-amber-200 focus-visible:ring-amber-400 rounded-xl bg-amber-50/50"
              autoFocus
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-600 transition-colors"
              aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm"
              >
                Das Passwort ist leider nicht korrekt. Bitte versuchen Sie es erneut.
              </motion.p>
            )}
          </AnimatePresence>

          <Button
            type="submit"
            size="lg"
            className="w-full h-13 text-base font-bold bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl shadow-md"
            disabled={password.length === 0}
          >
            Vorschau öffnen
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
