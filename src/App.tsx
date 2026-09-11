import { useState, useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { Nav } from "./components/Nav";
import { NavAlt } from "./components/NavAlt";
import { Contact } from "./components/Contact";
import { Everything } from "./components/Everything";
import { Home } from "./components/Home";
import { GoogleAgenticAssistant } from "./components/GoogleAgenticAssistant";
import { GoogleAgenticAssistantAlt } from "./components/GoogleAgenticAssistantAlt";
import { Fitbit } from "./components/Fitbit";
import { Baltimore } from "./components/Baltimore";
import { PasswordProtected } from "./components/PasswordProtected";
import { useRoute } from "./hooks/useRoute";
import { useUnlocked } from "./hooks/useUnlock";

const PROTECTED_PATHS = ["/work/google-agentic-assistant", "/work/fitbit"];

function page(path: string) {
  switch (path) {
    case "/contact":
      return <Contact />;
    case "/work/google-agentic-assistant":
      return <GoogleAgenticAssistant />;
    case "/work/google-agentic-assistant-alt":
      return <GoogleAgenticAssistantAlt />;
    case "/work/fitbit":
      return <Fitbit />;
    case "/work/baltimore-magazine":
      return <Baltimore />;
    case "/everything.html":
      return <Everything />;
    default:
      return <Home />;
  }
}

function PageTransition({ path, children }: { path: string; children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [path]);

  return (
    <div
      key={path}
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function App() {
  const path = useRoute();
  const unlocked = useUnlocked();
  const isLocked = PROTECTED_PATHS.includes(path) && !unlocked;

  return (
    <>
      <div className="xs:hidden">
        <Nav />
      </div>
      <div className="hidden xs:block">
        <NavAlt />
      </div>
      <PageTransition path={path}>
        {isLocked ? <PasswordProtected /> : page(path)}
      </PageTransition>
    </>
  );
}

export default App;
