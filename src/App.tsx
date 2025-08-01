import { Switch, Route } from "wouter";
// REMOVIDO: import { queryClient } from "./lib/queryClient";
// REMOVIDO: import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster"; // Mantenido si los toasts son independientes
import { TooltipProvider } from "@/components/ui/tooltip"; // Mantenido si los tooltips son independientes
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    // REMOVIDO: <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
    // REMOVIDO: </QueryClientProvider>
  );
}

export default App;