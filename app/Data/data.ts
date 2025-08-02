export type ProjectType = {
  title: string;
  img: string;
  link: string;
  tech: string[];
  info: string;
  code?: string; // Optional property
  category?: string;
  features?: string[];
};

export const Projects: Record<string, ProjectType> = {
  project6: {
    title: "Hospital Information Management System | BRV Technologies",
    img: "/projects/hims.png",
    link: "https://demo.himsapp.ai/",
    category: "Healthcare",
    tech: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "Material-ui",
      "Next Auth JS",
      "REST API Integration",
    ],
    info: "Developed a responsive healthcare platform using React.js and Next.js, leveraging Material UI for a consistent UI, NextAuth.js for secure authentication, and optimizing performance for cross-device compatibility.",
    features: [
      "Reduced page load time by 30% by optimizing React and Next.js front-end architecture",
      "Integrated NextAuth.js for secure authentication, reducing login errors by 90%",
      "Improved accessibility and responsiveness using Material UI and usability testing",
    ],
  },
  project2: {
    title: "Interior Design Platform Integration | BRV Technologies",
    img: "/projects/persft.png",
    link: "https://demo.persft.brvteck.com/",
    category: "Enterprise",
    tech: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "React JS",
      "MongoDB",
      "Material-ui",
      "Next Auth JS",
      "REST API Integration",
    ],
    info: "Integrated an enterprise-level interior design platform with seamless customization, enabling users to modify designs, receive instant cost analysis, and track projects in real-time. Implemented cart functionality and a scheduler for efficient project management.",
    features: [
      "Integrated third-party SDK for real-time interior design customization features",
      "Implemented secure payment gateway integration using Razorpay for transaction processing",
      "Developed administrative dashboard for project management and resource allocation",
      "Designed modular architecture enabling scalable feature additions and efficient API consumption",
    ],
  },
  project1: {
    title: "Next JS Landing Page site | BRV Technologies",
    img: "/projects/kolval.png",
    link: "https://kolval.com/",
    category: "Business",
    tech: ["Next.js", "Tailwind CSS", "React JS", "TypeScript"],
    info: "Developed a highly responsive and SEO-optimized landing page for Kolval, focusing on fast load times and cross-browser compatibility. Leveraged Tailwind CSS for consistent styling and Next.js for server-side rendering to boost performance.",
    features: [
      "SEO-optimized with server-side rendering",
      "Fast load times and cross-browser compatibility",
      "Responsive design with Tailwind CSS",
    ],
  },
  project3: {
    title: "Small scale E-Commerce | BRV Technologies",
    img: "/projects/onemart.png",
    link: "https://sriram-onemart-brvteck.vercel.app/",
    code: "https://github.com/sriram-singarapu/onemart-brvteck",
    category: "E-Commerce",
    tech: ["Next.js", "Tailwind CSS", "React JS", "Context API", "TypeScript"],
    info: "Designed and developed a small-scale e-commerce application with centralized state management using React Context API. Implemented optimized server-side rendering in Next.js to enhance user experience and SEO performance.",
    features: [
      "Centralized state management with Context API",
      "Server-side rendering for better SEO",
      "Responsive design and user-friendly interface",
    ],
  },
  project4: {
    title: "Food Order App",
    link: "https://sriram-singarapu.github.io/react-restaurant/",
    img: "/projects/foodorder.png",
    code: "https://github.com/sriram-singarapu/react-restaurant",
    category: "Food & Beverage",
    tech: ["React JS", "BootStrap", "Context API", "React-dom"],
    info: "Implemented a responsive cart system using React Context API, facilitating centralized management of cart state across components. Integrated modal components using ReactDOM for interactive cart display, enhancing user experience with dynamic overlays for seamless interaction.",
    features: [
      "Responsive cart system with Context API",
      "Interactive modal components",
      "Dynamic overlays for seamless user interaction",
    ],
  },
  project5: {
    title: "React ToDo",
    link: "https://sriram-singarapu.github.io/react-todo/",
    img: "/projects/todo.png",
    code: "https://github.com/sriram-singarapu/react-todo",
    category: "Productivity",
    tech: ["Tailwind CSS", "React JS"],
    info: "A dynamic Todo application with task management features using React useState hook for state management. Implementing create, read, update, and delete (CRUD) operations ensures comprehensive task management.",
    features: [
      "Full CRUD operations for task management",
      "State management with React hooks",
      "Clean and intuitive user interface",
    ],
  },
};

export const categories = [
  "All",
  "Healthcare",
  "Enterprise",
  "Business",
  "E-Commerce",
  "Food & Beverage",
  "Productivity",
];

export default Projects;
