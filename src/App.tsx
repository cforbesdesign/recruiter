import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { useRoute } from "./hooks/useRoute";

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

  return (
    <>
      <Nav />
      {path === "/contact" ? <Contact /> : <Home />}
    </>
  );
}

export default App;
