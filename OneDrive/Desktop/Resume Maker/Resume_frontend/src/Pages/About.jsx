import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          We are dedicated to helping professionals create stunning resumes with
          AI-powered technology. Our mission is to make job applications easier
          and more effective.
        </p>
      </div>
    </section>
  );
};

export default About;
