import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Installation from "./components/Installation";
import TerminalDemo from "./components/TerminalDemo";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="page">
        <Hero />
        <Features />
        <Installation />
        <TerminalDemo />
        <Documentation />
      </main>
      <Footer />
    </>
  );
}

export default App;
