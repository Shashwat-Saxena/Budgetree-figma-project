import React from 'react'
// import FinalCTA from '../FinalCTA'
import AboutSection from './AboutSection'
import FaqSection from '../blogcomponent/FAQ'

const AboutParent = () => {
  return (
    <div className='p-4 md:p-10 max-w-7xl mx-auto space-y-8'>
      <div className='flex flex-col gap-6'>
        <AboutSection/>
        <FaqSection/>
        {/* <FinalCTA/> */}
        </div>
    </div>
    
  )
}

export default AboutParent