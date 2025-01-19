import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Contact = async () => {
  return (
    <section id="contact" className="px-6 lg:px-24 py-8  ">
      <h2 className="text-center text-2xl lg:text-3xl font-bold text-green-600 mb-6 bg-green-100 p-3 rounded-md">
        Contact Information
      </h2>

      <div className="flex flex-wrap -mx-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="flex flex-col items-center">
            <Image
              src="/contact.jpg"
              alt="Software Illustration"
              className="rounded-lg"
              width={400}
              height={300}
            />
            <a
              href="mailto:sriramsingarapu2@gmail.com"
              className="w-full bg-gray-800 text-white px-4 py-2 mt-3 rounded flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
            >
              <FaEnvelope /> sriramsingarapu2@gmail.com
            </a>
            <a
              href="tel:+919866521020"
              className="w-full bg-gray-800 text-white px-4 py-2 mt-3 rounded flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
            >
              <MdAddCall /> +919866521020
            </a>
            <a
              href="https://github.com/sriram-singarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-800 text-white px-4 py-2 mt-3 rounded flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sriram-singarapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-800 text-white px-4 py-2 mt-3 rounded flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="border-2  p-6 rounded-lg">
            <h4 className="text-center text-xl font-semibold mb-4">
              Get in Touch
            </h4>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="font-semibold block mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  readOnly
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold block mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  readOnly
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-semibold block mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  readOnly
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-gray-800 text-white px-4 py-2 mt-3 rounded flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
