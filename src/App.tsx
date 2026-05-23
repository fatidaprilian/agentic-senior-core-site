import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import TerminalDemo from './components/TerminalDemo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Installation />
        <TerminalDemo />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
