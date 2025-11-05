import React from 'react';
import { LanguageProvider } from '../../contexts/LanguageContext';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Featured from '../../components/Featured';
import Summary from '../../components/Summary';
import Experience from '../../components/Experience';
import PublicProjects from '../../components/PublicProjects';
import Education from '../../components/Education';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import '../../styles/globals.scss';

const Portfolio: React.FC = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Summary />
        <Experience />
        <PublicProjects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Portfolio;
