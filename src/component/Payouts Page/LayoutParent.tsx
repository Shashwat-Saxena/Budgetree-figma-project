// import ContactSection from "../Contact";
// import Brands from "../Brands";
// import ContactUs from "../contactUs/ContactUs";
import Brands from "@/component/Payouts Page/Brand";
import ContactSection from "./Contacts";
import EngagementPlatform from "./EngagmentPlatform";
import HeroSection from "./HeroSection";
import RewardsRedemptionSection from "./RewardsRedemptionSection";
import ScalingFeatures from "./ScalingFeatures";
import SecuritySection from "./SecuritySection";
import PriorityBlue from "../PriorityBlue";

export default function LayoutPage() {
  return (
    <>
      <div className="p-4 md:p-7 max-w-7xl mx-auto space-y-3">
        {/* <h1 className="text-3xl font-bold text-center text-blue-900"></h1> */}

        <div className="flex flex-col gap-1">
          {/* <ContactSection/> */}
          <HeroSection />
          <EngagementPlatform />
          <RewardsRedemptionSection />
          <ScalingFeatures />
          <PriorityBlue/>
          {/* <SecuritySection /> */}
          
          <Brands />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
