import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
import { useRoute } from "./hooks/useRoute";
import { useTheme } from "./hooks/useTheme";

function Home() {
  useEffect(() => {
    document.title = "Craig Forbes — Design Lead";
  }, []);

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Footer />
    </>
  );
}

function App() {
  const path = useRoute();
  const { theme, toggle } = useTheme();

  return (
    <>
      <Nav />
      {path === "/contact" ? <Contact /> : <Home />}
      <ThemeToggle theme={theme} onToggle={toggle} />
    </>
  );
}

export default App;
