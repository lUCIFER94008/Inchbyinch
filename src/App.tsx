import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Transformations } from './components/Transformations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { MobileCTA } from './components/MobileCTA';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Transformations />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <MobileCTA />
    </div>
  );
}
