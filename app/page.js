'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Founder from '../components/Founder';
import Manifesto from '../components/Manifesto';
import InvestmentThesis from '../components/InvestmentThesis';
import Portfolio from '../components/Portfolio';
import Apply from '../components/Apply';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Founder />
      <Manifesto />
      <InvestmentThesis />
      <Portfolio />
      <Apply />
    </main>
  );
}
