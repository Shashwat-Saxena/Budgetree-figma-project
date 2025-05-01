


import FaqSection from "@/component/blogcomponent/FAQ";
import ContactSection from "@/component/Contact";
import FinalHomeSection from "@/component/FinalHomepage/FinalHome";
import FinalHome from "@/component/FinalHomepage/HomeHero";
import HomeLoyalX from "@/component/FinalHomepage/HomeLoyalX";
import HomeRewardX from "@/component/FinalHomepage/HomeRewardX";
import HomeUPI from "@/component/FinalHomepage/HomeUPIRewards";
import Siripay from "@/component/FinalHomepage/Siripay";
import FeatureGridSection from "@/component/HomePage/FeatureGrid";
// import HomePage from "@/component/HomePage/HeroParent";
import ShowcaseSection from "@/component/HomePage/Showcase";
import ThreeSection from "@/component/HomePage/threebox";
import Brands from "@/component/Payouts Page/Brand";
import PriorityBlue from "@/component/PriorityBlue";


export default function Home() {
  return (
    <main className="bg-white text-gray-900 position-fixed">
      <FinalHomeSection/>
      {/* <HomePage/> */}
      {/* <FinalHome/>
      <HomeRewardX />
      <HomeLoyalX/>
      <HomeUPI/>
      <Siripay/>
      <ShowcaseSection/>
      <ThreeSection/>
      <FeatureGridSection/>
      <PriorityBlue/>
      <Brands/>
      <FaqSection/>
      <ContactSection/> */}
     
    </main>
  );
}
