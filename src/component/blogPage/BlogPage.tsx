'use client'
import Image from 'next/image'
import GetStarted from '../contactUs/GetStart'
// import BlogGrid from '../blogcomponent/Bloggrid'
// import ContactUs from '../contactUs/ContactUs'
import ContactSection from '../Contact'
import BlogRelated from './RelatedBlog'
import image from '@/Image/stack-four-rows-coins 1.svg'
// import newsletterImg from '@/public/newsletter-img.jpg' // apna image path update kar lena

export default function NewsletterCard() {
  return (

    <>
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
    <section className="bg-gradient-to-r from-[#1D2B64] to-[#7f9cf5] text-white px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="bg-white text-blue-600 font-medium px-3 py-1 rounded-full">Finance</span>
            <span>3 min read</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Budgetree’s February <br />
            Newsletter: Big. <br />
            Things. Ahead.
          </h2>

          <p className="font-medium">Monica Reddy</p>
          <p className="text-sm text-gray-200">Author</p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src={image}
            alt="Newsletter Image"
            width={500}
            height={300}
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </section>

    {/* ---------------------------------------- */}
    <div className='max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed'>
    <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">
          PRIVACY POLICY AND PERSONAL DATA
        </h2>
        <p>
          This Privacy Policy and the Personal Data text is prepared to inform
          the users about the terms and conditions regarding the use of the data
          and the way the data is processed, which will be obtained and/or
          obtained during the use of the website www.budgetree.in (Site) managed
          and operated by Ruul, to provide communication between Freelancer and
          the Customer (Member / Members).
        </p>
        <p>
          Ruul adopts this Privacy Policy and Personal Data text on the
          confidentiality of the information that the Members share on the Site
          and the confidentiality, use and other relevant issues of the
          information processed during the visit of the Site as a visitor.
        </p>
        <p>
          Ruul attaches importance to the confidentiality of the data and takes
          care to be transparent on the storage of information. This Privacy
          Policy and Personal Data text includes: what kind of data is
          collected, how it is used, to whom it is shared if necessary, what are
          your rights about your personal data, and how such rights might be
          exercised.
        </p>
        <p>
          This Privacy Policy and Personal Data text is an integral part of the
          User Agreement.
        </p>
        <p>
          Each visitor/member confirming the Privacy Policy and Personal Data
          text, with Budgetree or persons who provide service through Ruul or
          contact Ruul through the following situations, within the following
          restrictions, explicitly gives permission and approval in processing,
          storage indefinitely/within the legal period/membership period or the
          period declared/will be declared by Budgetree, analyzing,
          classification, updating, and transfer to third party business
          partners and/or consultants in order to provide Budgetree services of
          personal and/or non-personal data.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">
          PERSONAL DATA PROCESSING AND PURPOSE OF THE PROCESSING
        </h2>
        <p>
          The information collected by Ruul might be used in various ways in
          order to optimize and improve the services of Ruul and improve the
          service provided to users through database enrichment.
        </p>
        <p>
          Ruul may use this information for website management, security,
          promotional activities, research and analysis. No information will be
          disclosed to the public. However, it is also possible for us to use
          your information or to share it with third parties providing that
          relevant information is anonymized.
        </p>
        <p>
          Ruul is obliged to take the necessary technical and administrative
          measures for providing appropriate level of security, in order to
          ensure the maintenance of personal data and protect against unlawful
          processing activities and access to personal data by taking the utmost
          care to store your information.
        </p>
        <p>
          Ruul does not have any obligation except to inform the concerned
          person and the relevant administrative authorities; in case of
          obtaining, alteration or deletion of your information by means of
          unauthorized entry, distribution, replacement of your data stored by
          Ruul.
        </p>
        <p>
          Every time you visit the site, your IP address, operating system,
          browser (type, version, etc), connect time, time information and
          similar information are automatically saved; such information obtained
          without your permission may be used by Ruul, associated with your
          personal information or anonymously on the condition it is not shared
          with third parties.
        </p>
        <p>
          All information obtained from you in order to make you benefit from
          the services offered by Ruul is protected in accordance with our
          obligations under relevant legislation regarding the protection of the
          personal data.
        </p>
        <p>
          Ruul grants limited access to its employees and business partners -
          particularly third-party partners - who need access to relevant
          information in the scope of legal obligations or Ruul system
          requirements.
        </p>
      </section>
    </div>
    

      <GetStarted/>
      {/* <BlogGrid/> */}
      <BlogRelated/>
      <ContactSection/>
      {/* <ContactUs/> */}
      
    </div>
   
    </>
    
  )
}
