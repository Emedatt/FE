import React from 'react'
import Hero from './Hero';
import Benefits from './Benefits';
import BenefitsTwo from './BenefitsTwo';
import HowItWorks from './HowItWorks';
import FAQs from './FAQs';
import DownloadApp from './DownloadApp';
import {Footer} from '../../components/Footer';
const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <Benefits />
      <BenefitsTwo />
      <HowItWorks />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default Home