import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-base-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          We'd love to hear from you. Please fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        <form className="max-w-lg mx-auto bg-base-200 p-8 rounded-lg shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full py-3 mt-6">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
