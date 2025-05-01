import React from 'react'
import CategoryNav from './border'
import BlogGrid from './Bloggrid'
import CTASection from './CTASection'
import FaqSection from './FAQ'

const Bloggparent = () => {
  return (
    <>
    <div className='p-4 md:p-10 max-w-7xl mx-auto space-y-8'>
        <div className='flex flex-col gap-6'>
            <CategoryNav/>
            <BlogGrid/>
            <CTASection/>
            <FaqSection/>
        </div>
    </div>
    </>
  )
}

export default Bloggparent