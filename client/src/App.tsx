import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import DemoEvent2025 from "@/pages/DemoEvent2025";
import DemoEvent2026 from "@/pages/DemoEvent2026";
import DemoHome from "@/pages/DemoHome";
import DemoIntern from "@/pages/DemoIntern";
import Join from "@/pages/Join";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        {/* トップ＝福岡国際交流プラットフォーム（DemoHome）。配下にAward・実行委員会募集。一般公開（ゲートなし） */}
        <Route path={"/"} component={DemoHome} />
        <Route path={"/demo"} component={DemoHome} />
        <Route path={"/demo/event-2025"} component={DemoEvent2025} />
        <Route path={"/demo/event-2026"} component={DemoEvent2026} />
        <Route path={"/demo/intern"} component={DemoIntern} />
        {/* 運営メンバー募集LP（旧 smf-hours /join をプラットフォームに統合） */}
        <Route path={"/join"} component={Join} />
        <Route path={"/demo/:rest*"} component={NotFound} />
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
