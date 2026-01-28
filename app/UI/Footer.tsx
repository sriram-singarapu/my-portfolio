"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sriram-singarapu",
      icon: <FaGithub />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sriram-singarapu/",
      icon: <FaLinkedin />,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      href: "https://x.com/_I_am_sr_",
      icon: <FaTwitter />,
      color: "hover:text-cyan-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Personal Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/photo1.jpg"
                  alt="Sri Ram Singarapu"
                  height={80}
                  width={80}
                  className="rounded-full aspect-square object-cover border-2 border-blue-600/50 shadow-lg"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Sri Ram Singarapu</h2>
                <p className="text-blue-600 font-medium">Full Stack Engineer</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md mb-6">
              Building high-performance, scalable web applications with modern technologies.
              Passionate about creating exceptional user experiences and solving complex technical challenges.
            </p>
            <a
              href="mailto:sriramsingarapu2@gmail.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              <IoIosMail className="text-xl" />
              <span>sriramsingarapu2@gmail.com</span>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg text-gray-900 mb-6">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-effect rounded-xl text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:border-blue-600/50 hover:shadow-lg`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-gray-600 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            © {currentYear} Sri Ram Singarapu. Built with{" "}
            <FaHeart className="text-red-500 animate-pulse" /> using Next.js
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-effect rounded-xl text-blue-600 hover:bg-blue-50 hover:border-blue-600/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HiArrowUp className="text-xl group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
