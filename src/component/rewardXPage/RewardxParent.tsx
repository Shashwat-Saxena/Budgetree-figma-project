import React from "react";
import Brands from "../Payouts Page/Brand";
import ContactSection from "../Contact";
import Priority from "@/component/rewardXPage/Priority";
import FaqSection from "../blogcomponent/FAQ";
import DistributeRewards from "./DistributeReward";
import RewardXSection from "./RewardxSection";

const RewardxParent = () => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* <h1 className="text-3xl font-bold text-center text-blue-900">RewardX</h1> */}

      <div className="flex flex-col gap-6">
        <RewardXSection />

        <DistributeRewards />

        <Brands />
        <ContactSection />
        <Priority />
        <FaqSection />
      </div>
    </div>
  );
};

export default RewardxParent;
