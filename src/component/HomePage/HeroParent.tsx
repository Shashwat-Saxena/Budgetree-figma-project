import FaqSection from '../blogcomponent/FAQ';
import ContactSection from '../Contact';

import Hero from '../Hero';
import DynamicSlider from '../LoyalX';
import ImageSlider from '../LoyalX';
import RewardX from '../LoyalX';
import Brands from '../Payouts Page/Brand';
import PriorityBlue from '../PriorityBlue';

import Priority from '../rewardXPage/Priority';
import ScrollingSection from '../Users';
import FeatureGridSection from './FeatureGrid';
import ShowcaseSection from './Showcase';
import ThreeSection from './threebox';

export default function HomePage() {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* <h1 className="text-3xl font-bold text-center text-blue-900">Contact Us</h1> */}

      <div className="flex flex-col gap-6">
        <Hero/>
        <RewardX/>
        {/* <DynamicSlider images={[]}/> */}
        <ShowcaseSection/>
        <ThreeSection/>
        {/* <FinalCTA/> */}
        <FeatureGridSection/>
        {/* <Priority/> */}
        <PriorityBlue />
        <Brands/>
        <ScrollingSection/>
        <FaqSection/>
        <ContactSection/>
        {/* <WhyChooseSection/> */}
      </div>
    </div>
  );
}
