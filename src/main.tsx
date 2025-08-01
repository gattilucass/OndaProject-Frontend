import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// REMOVIDO: import { queryClient } from "./lib/queryClient";
// REMOVIDO: import { QueryClientProvider } from "@tanstack/react-query";
// REMOVIDO: import { Toaster } from "@/components/ui/toaster"; // Removido o movido si no hay necesidad de toasts con QueryClientProvider
// REMOVIDO: import { TooltipProvider } from "@/components/ui/tooltip"; // Mantener si TooltipProvider es necesario independientemente de toasts

createRoot(document.getElementById("root")!).render(<App />);