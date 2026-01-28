export type ProjectType = {
  title: string;
  img: string;
  link: string;
  tech: string[];
  info: string;
  code?: string;
  category?: string;
  features?: string[];
};

export const Projects: Record<string, ProjectType> = {
  project1: {
    title: "Enterprise Interior Design & Project Management System",
    img: "/projects/persft.png",
    link: "https://demo.persft.brvteck.com/",
    category: "Enterprise",
    tech: [
      "Next.js",
      "NestJS",
      "MySQL",
      "Razorpay",
      "TypeScript",
      "REST APIs",
      "Role-Based Access Control",
    ],
    info: "Large-scale enterprise platform for interior design and project management used across admin, vendor, and customer roles. Built admin dashboards and microservices for project tracking, task scheduling, work orders, and payment flows.",
    features: [
      "Next.js admin dashboards for managing users, vendors, projects, workflows, and approvals",
      "NestJS microservices for project tracking, task scheduling, work orders, and product mapping",
      "Razorpay payment integration with booking, partial payments, and order lifecycle handling",
      "Secure REST APIs with role-based access control and data isolation",
      "Production deployment support with bug fixes and feature enhancements in Agile environment",
    ],
  },
  project2: {
    title: "Full-Stack E-Commerce Application",
    img: "/projects/ecommerce.png",
    link: "#",
    category: "E-Commerce",
    tech: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "TypeScript",
    ],
    info: "Complete e-commerce platform with admin, vendor, and customer workflows. Designed MongoDB schemas and implemented JWT-based authentication with protected routes and role-based dashboards.",
    features: [
      "Admin, vendor, and customer workflow management",
      "MongoDB schemas for products, users, orders, vendors, and inventory",
      "JWT-based authentication with protected routes",
      "Role-based dashboards for different user types",
      "Responsive UI with scalable backend order-processing logic",
    ],
  },
  project3: {
    title: "Garage Management Application",
    img: "/projects/garage.png",
    link: "#",
    category: "Business",
    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "JPA/Hibernate",
    ],
    info: "Backend system for vehicle and service management. Developed REST APIs for vehicle tracking, service scheduling, job orders, and billing with relational database design.",
    features: [
      "REST APIs for vehicle, service, job order, and billing management",
      "Relational database design with MySQL",
      "Business logic for service workflows",
      "JPA/Hibernate for data persistence",
    ],
  },
  project4: {
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
  project5: {
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
  project6: {
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
  project7: {
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
  project8: {
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
  "Enterprise",
  "Healthcare",
  "E-Commerce",
  "Business",
  "Food & Beverage",
  "Productivity",
];

export default Projects;
