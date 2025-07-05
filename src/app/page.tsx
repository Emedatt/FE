import Hero from '../_components/Hero';
import Benefits from '../_components/Benefits';
import BenefitsTwo from '../_components/BenefitsTwo';
import HowItWorks from '@/_components/HowItWorks';
import FAQs from '@/_components/FAQs';
import DownloadApp from '@/_components/DownloadApp';

export default function Home() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Hero />
      <Benefits />
      <BenefitsTwo />
      <HowItWorks />
      <FAQs />
      <DownloadApp />

   
    </div>
  );
}
