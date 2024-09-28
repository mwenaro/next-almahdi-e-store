// components/ContactInfo.tsx
// import { FiPhoneCall, FiMail } from 'react-icons/fi'

export const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <FaPho className="text-red-500 text-2xl mr-2" />
          <h3 className="font-bold text-lg">Call To Us</h3>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p className="text-gray-500">Phone: +880161122222</p>
      </div>

      <div>
        <div className="flex items-center mb-2">
          <FiMail className="text-red-500 text-2xl mr-2" />
          <h3 className="font-bold text-lg">Write To Us</h3>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p className="text-gray-500">Email: customer@exclusive.com</p>
        <p className="text-gray-500">support@exclusive.com</p>
      </div>
    </div>
  )
}
