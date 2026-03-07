import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import LocalArea from './components/LocalArea';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <FAQ />
      <LocalArea />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
