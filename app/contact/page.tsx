"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, easeInOut, easeOut } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sriram-singarapu",
      icon: <FaGithub />,
      color: "hover:bg-gray-800",
      description: "View my code repositories",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sriram-singarapu/",
      icon: <FaLinkedin />,
      color: "hover:bg-blue-600",
      description: "Connect professionally",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "sriramsingarapu2@gmail.com",
      href: "mailto:sriramsingarapu2@gmail.com",
      type: "email",
    },
    {
      icon: <MdAddCall />,
      text: "+91 98665 21020",
      href: "tel:+919866521020",
      type: "phone",
    },
    // {
    //   icon: <FaMapMarkerAlt />,
    //   text: "Hyderabad, Telangana, India",
    //   href: "#",
    //   type: "location",
    // },
  ];

  return (
    <section
      id="contact"
      className="px-6 lg:px-24 py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: easeInOut,
            delay: 2,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Section - Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="text-center lg:text-left">
              <motion.div
                className="relative inline-block mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/contact.jpg"
                  alt="Let's connect and collaborate"
                  className="rounded-2xl shadow-2xl"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="group flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl group-hover:shadow-lg transition-shadow">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {item.text}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.type}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Connect With Me
              </h3> */}
              <div className="grid gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center p-4 bg-gray-800 text-white rounded-xl ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="text-2xl mr-4">{link.icon}</div>
                    <div>
                      <p className="font-semibold">{link.name}</p>
                      <p className="text-sm opacity-80">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-600">I'll respond within 24 hours</p>
              </div>

              {/* Status Messages */}
              {submitStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <HiCheckCircle className="text-2xl" />
                  ) : (
                    <HiExclamationCircle className="text-2xl" />
                  )}
                  <p className="font-medium">{statusMessage}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white/50 backdrop-blur-sm"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>* Required fields</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
