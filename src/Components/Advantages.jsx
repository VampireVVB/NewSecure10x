import React from "react";

const AdvantagesSection = () => {
  return (
    <div className="advantages-section pt-20">
      <h2 className="text-3xl font-bold text-center mb-8">WHY US?</h2>
      <div className="advantages-comparison flex justify-center lg:gap-20 max-md:gap-4 max-md:flex-col">
        <div className="challenges shadow-lg p-6 border-slate-400 border-4 rounded-xl md:w-[45%] lg:max-w-[30%]">
          <h3 className="text-xl font-semibold text-center mb-4">
            Challenges You Face
          </h3>
          <ul className="space-y-3">
            {[
              "Lack of Technical Background",
              "Not Having Mentor",
              "Lack of Support",
              "Where to Start First",
              "Time Constraints",
              "Limited Networking",
              "Uncertain Career Path",
              "Special Degree Requirements",
              "Have Skills But No Job",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="solutions shadow-lg p-6 border-slate-400 border-4 rounded-xl md:w-[45%] lg:max-w-[30%]">
          <h3 className="text-xl font-semibold text-center mb-4">
            Solutions We Provide
          </h3>
          <ul className="space-y-3">
            {[
              "No Technical Background Needed",
              "Experienced Mentorship",
              "Special Support Groups",
              "Complete Roadmap",
              "Learn Anytime",
              "Networking Opportunities",
              "Career Guidance",
              "No Special Degree Required",
              "Job Guarantee",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 001.414 0L14 9.414l-1.707-1.707-3.586 3.586-1.707-1.707L4 11.586 8.707 16.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
