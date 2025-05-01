import FaqSection from '../blogcomponent/FAQ';
import Form from '@/component/Contact';
import Address from './GetStart';
import SupportInfo from './OurOffice';

export default function ContactUsPage() {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-8">
      {/* <h1 className="text-3xl font-bold text-center text-blue-900">Contact Us</h1> */}

      <div className="flex flex-col gap-6">
        <Form />
        <SupportInfo />
        <Address />
        <FaqSection/>
      </div>
    </div>
  );
}
