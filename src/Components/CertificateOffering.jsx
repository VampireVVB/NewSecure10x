import React from 'react'

const CertificateOffering = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What are we offering in Certification?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-stone-700 shadow-md rounded-lg p-6">
          {/*<img src="lifetime-access.png" alt="Lifetime Access to the Courses" className="w-24 h-24 mx-auto mb-4" />*/}
          <h3 className="text-2xl font-semibold text-gray-400">Lifetime Access to the Courses</h3>
          <p className="text-gray-100 font-light tracking-wide">Learn Anytime, anywhere, at your own will and at your own pace, as many times as you want. You will have Lifetime Access to the Certified Cyber Warrior course i.e. bundle of 9 amazing courses on hacking and cybersecurity.</p>
        </div>
        <div className="card bg-stone-700 shadow-md rounded-lg p-6">
          {/*<img src="lifetime-membership.png" alt="Lifetime Membership to Community" className="w-24 h-24 mx-auto mb-4" />*/}
          <h3 className="text-xl font-semibold text-gray-400">Lifetime Membership to Community</h3>
          <p className="text-gray-100 font-light tracking-wide">Lifetime Membership to our exclusive support groups, connecting you with cybersecurity professionals and fellow learners. Engage in discussions, ask queries, get support from our team and network with like-minded individuals sharing your passion for cybersecurity.</p>
        </div>
        <div className="card bg-stone-700 shadow-md rounded-lg p-6">
          {/*<img src="lifetime-certificate.png" alt="Lifetime Valid Certificate" className="w-24 h-24 mx-auto mb-4" />*/}
          <h3 className="text-2xl font-semibold text-gray-400">Lifetime Valid Certificate</h3>
          <p className="text-gray-100 font-light tracking-wide">Boost your CV and LinkedIn by 10x with our esteemed Certified Cyber Warrior certificate after course completion. This online, verifiable and shareable certificate comes with Lifetime Validity and can be used to wow prospective employers.</p>
        </div>
      </div>
    </div>
  )
}

export default CertificateOffering
