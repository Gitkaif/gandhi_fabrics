import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import BorderAnimationButton from "../components/BorderAnimationButton";
import GradientText from "../components/nurui/gradient-text";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-2 sm:py-16 sm:px-4 md:py-20 md:px-8 bg-gradient-to-br from-white via-blue-50 to-gray-100 rounded-none sm:rounded-3xl">
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 tracking-tight">
          <GradientText
            colors={["#3ca2fa", "#6366f1", "#3b82f6", "#6366f1"]}
            animationSpeed={2.5}
            showBorder={false}
            className="inline-block"
          >
            Get In Touch
          </GradientText>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Have questions about our products or services? We'd love to hear from you.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 md:flex-row">
        {/* Contact Information */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-5 xs:p-6 sm:p-8 flex flex-col justify-center  w-full md:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-blue-900 tracking-wide">Contact Information</h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl shadow-md flex items-center justify-center min-w-[44px]">
                <FiMapPin className="text-blue-600 text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Our Location</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Gandhi enterprises Savita banquets hall Sainath Rd, near Malad Subway, opposite laminet plus, Malad, Vijaykar Wadi Industrial, Vijaykar Wadi, Malad West, Mumbai, Maharashtra 400064
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl shadow-md flex items-center justify-center min-w-[44px]">
                <FiPhone className="text-blue-600 text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Phone</h4>
                <p className="text-gray-600 text-sm sm:text-base">Ankit Gandhi&nbsp;&nbsp; <span className="font-medium text-blue-700">+91 99206 97658</span></p>
                <p className="text-gray-600 text-sm sm:text-base">Sanjay Gandhi&nbsp;&nbsp; <span className="font-medium text-blue-700">+91 99300 98077</span></p>
                <p className="text-gray-600 text-sm sm:text-base">Vaibhav Gandhi&nbsp;&nbsp; <span className="font-medium text-blue-700">+91 92208 18101</span></p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 sm:p-4 rounded-xl shadow-md flex items-center justify-center min-w-[44px]">
                <FiMail className="text-blue-600 text-xl sm:text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Email</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  <a href="mailto:gandhi.enterprises27@gmail.com" className="hover:underline text-blue-700 font-medium break-all">
                    gandhi.enterprises27@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/90 rounded-2xl p-5 xs:p-6 sm:p-8 w-full md:w-1/2">
          <form className="space-y-6 sm:space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-blue-50/40 text-gray-900 text-base transition"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-blue-50/40 text-gray-900 text-base transition"
                placeholder="your.email@example.com"
                autoComplete="off"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-semibold text-gray-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-blue-50/40 text-gray-900 text-base transition resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="pt-1 sm:pt-2">
              <BorderAnimationButton
                type="submit"
                text="Send Message"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
