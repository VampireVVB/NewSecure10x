import React from "react";

function WhyLearn() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="additional-benefits-cards py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Why to Learn Hacking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Plentiful Job Openings",
              description:
                "Cyber Security to hit 3.5 million unfilled jobs by 2025",
            },
            {
              title: "Job Security",
              description:
                "Technology is growing faster and threat from hackers is increasing",
            },
            {
              title: "No Special Degree",
              description:
                "Employers like Google, Apple, EY, and IBM are now hiring workers without college degrees",
            },
            {
              title: "Faster Emerging Market",
              description:
                "It's one of the fastest growing markets projected at 37% from 2014 to 2024",
            },
            {
              title: "Awesome Salary",
              description:
                "As of June 14, 2023, the average annual pay for a Cyber Security Consultant in the United States is $172,050 a year",
            },
            {
              title: "Unique Skills",
              description:
                "In companies, you will always get the advantage of having great skills",
            },
          ].map((item, index) => (
            <div key={index} className="card p-4 shadow-md rounded-lg">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 001.414 0L14 9.414l-1.707-1.707-3.586 3.586-1.707-1.707L4 11.586 8.707 16.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-300/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-7">
        <div className="card bg-neutral-700 shadow-md rounded-lg p-6">
          {/*<img src="unfilled-jobs.png" alt="Unfilled Jobs" className="w-24 h-24 mx-auto mb-4" />*/}
          <h3 className="text-3xl font-bold">35 Lakh</h3>
          <p className="text-gray-400 tracking-wide text-lg">Unfilled Jobs</p>
          <span className="text-sm text-gray-200 font-light tracking-wider">
            Cyber Security to hit 3.5 million unfilled jobs by 2025
          </span>
        </div>

        <div className="card bg-neutral-700 shadow-md rounded-lg p-6">
          {/* Replace with your image */}
          <h3 className="text-3xl font-bold">$172k</h3>
          <p className="text-gray-400 tracking-wide text-lg ">Average Salary</p>
          <span className="text-sm text-gray-200 font-light tracking-wider">
            Average annual pay for a Cyber Security Consultant in the USA
          </span>
        </div>

        <div className="card bg-neutral-700 shadow-md rounded-lg p-6">
          {/*<img src="growth-rate.png" alt="Growth Rate" className="w-24 h-24 mx-auto mb-4" />*/}
          <h3 className="text-3xl font-bold">37%</h3>
          <p className="text-gray-400 tracking-wide text-lg">Growth Rate</p>
          <span className="text-sm text-gray-200 font-light tracking-wider">
            One of the fastest-growing markets projected at 37% from 2023 to
            2031
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyLearn;
