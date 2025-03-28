import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen bg-base-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          We offer a range of professional services designed to help you achieve
          your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="card bg-base-200 shadow-xl p-6 animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl font-bold mb-4">AI Resume Builder</h3>
            <p>
              Let our AI create a professional, job-specific resume for you in
              minutes.
            </p>
          </div>
          {/* Service 2 */}
          <div className="card bg-base-200 shadow-xl p-6 animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-bold mb-4">Custom Templates</h3>
            <p>
              Choose from a variety of professional resume templates tailored to
              your industry.
            </p>
          </div>
          {/* Service 3 */}
          <div className="card bg-base-200 shadow-xl p-6 animate__animated animate__fadeIn animate__delay-4s">
            <h3 className="text-2xl font-bold mb-4">Job Application Insights</h3>
            <p>
              Get personalized insights on how to optimize your resume for
              specific job roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
