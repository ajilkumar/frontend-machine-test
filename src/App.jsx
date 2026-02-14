import './App.css'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesStrip from './components/ServicesStrip';
import InfoSection from './components/InfoSection';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import ClientLogos from './components/ClientLogos';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ServicesStrip />
      <hr />
      <InfoSection />
      <Features />
      <CallToAction />
      <ClientLogos />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
