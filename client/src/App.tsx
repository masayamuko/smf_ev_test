import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import DemoAccessGate from "@/components/DemoAccessGate";
import DemoEvent2025 from "@/pages/DemoEvent2025";
import DemoEvent2026 from "@/pages/DemoEvent2026";
import DemoHome from "@/pages/DemoHome";
import DemoIntern from "@/pages/DemoIntern";
import NotFound from "@/pages/NotFound";
import UnderConstruction from "@/pages/UnderConstruction";
import { ReactNode } from "react";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

type ProtectedDemoPageProps = {
  children: ReactNode;
};

function ProtectedDemoPage({ children }: ProtectedDemoPageProps) {
  return <DemoAccessGate>{children}</DemoAccessGate>;
}

function Router() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path={"/"} component={DemoHome} />
        <Route path={"/event-2025"} component={DemoEvent2025} />

        <Route path={"/event-2026"} component={UnderConstruction} />
        <Route path={"/event-2026/test"}>
          {() => (
            <ProtectedDemoPage>
              <DemoEvent2026 />
            </ProtectedDemoPage>
          )}
        </Route>

        <Route path={"/intern"} component={UnderConstruction} />
        <Route path={"/intern/test"}>
          {() => (
            <ProtectedDemoPage>
              <DemoIntern />
            </ProtectedDemoPage>
          )}
        </Route>
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
