import React from 'react'
import HomeRewardX from './HomeRewardX'
import HomeLoyalX from './HomeLoyalX'
import FinalHome from './HomeHero'
import HomeUPI from './HomeUPIRewards'
import Siripay from './Siripay'
import ShowcaseSection from '../HomePage/Showcase'
import ThreeSection from '../HomePage/threebox'
import FeatureGridSection from '../HomePage/FeatureGrid'
import PriorityBlue from '../PriorityBlue'
import Brands from '../Payouts Page/Brand'
import FaqSection from '../blogcomponent/FAQ'
import ContactSection from '../Contact'
import HomePayouts from './HomePayouts'
import HomeBillPayment from './HomeBillPayment'

const FinalHomeSection = () => {
  return (
    <>
    <FinalHome/>
     <HomeRewardX/>
     <HomeLoyalX/>
     <HomeUPI/>
     <HomePayouts/>
     <HomeBillPayment/>
     <Siripay/>
     <ShowcaseSection/>
     <ThreeSection/>
     <FeatureGridSection/>
     <PriorityBlue/>
     <Brands/>
     <FaqSection/>
     <ContactSection/>
    </>
   

  )
}

export default FinalHomeSection