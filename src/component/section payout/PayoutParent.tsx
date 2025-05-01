import React from 'react'
import PayoutSection from './PayoutSection'
import BlockSection from './BlockSection'
import Brands from '../Payouts Page/Brand'
import ContactSection from '../Payouts Page/Contacts'
import Priority from '../rewardXPage/Priority'
import FaqSection from '../blogcomponent/FAQ'

const PayoutParent = () => {
  return (
    <>
     <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
          {/* <h1 className="text-3xl font-bold text-center text-blue-900">Payout Section</h1> */}
    
          <div className="flex flex-col gap-6">
            <PayoutSection/>
            <BlockSection/>
            <Brands/>
            <ContactSection/>
            <Priority/>
            <FaqSection/>
          </div>
        </div>
    </>
  )
}

export default PayoutParent