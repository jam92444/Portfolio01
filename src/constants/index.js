import project1 from "../assets/projects/chatbi.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/CProject1.webp";
import certificate01 from "../assets/cert_1.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting robust and scalable web applications. I have honed my skills in like  React ,Java Script, Bootstrap, . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-end developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React js, Javascript, Tailwind, Material UI. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and develop more projects.`;

export const EXPERIENCES = [
  {
    image: certificate01,
    year: "16 Dec 2024",
    role: "Software Engineering Job Simulation",
    company: "Accenture.",
    description: `This immersive program has enhancing my problem-solving skills and preparing me for real-world challenges in the software engineering field. I'm grateful for the opportunity to learn from industry experts and to grow as a professional.`,
    technologies: [
      "Cloud Architecture",
      "Security",
      "Programming",
      "Testing",
      "Aglie",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Doctor Appointment Booking App",
    image: project4,
    description:
      "A platform for creating and managing doctor's Appointments, with core features like booking, Payment, Admin Panel, Doctor Panel and user Interface.",
    technologies: [
      "React Js",
      "Tailwind CSS",
      "Express JS",
      "MongoDB",
      "RazorPay",
    ],
    demo: "https://www.linkedin.com/posts/yusuf-jamal-106772293_fullstackproject-developers-mernstack-activity-7283482847250685953-9ODB?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "ChatBi - RealTime Chat Application",
    image: project1,
    description:
      "A real-time chat application built with React.js and Firebase for seamless communication, instant messaging, and efficient data syncing.",
    technologies: ["HTML", "CSS", "React", "Firebase", "Tailwind CSS"],
    demo: "https://chatbi.vercel.app/",
  },
  {
    title: "STYL.myj - Ecommerce Site",
    image: project2,
    description:
      "Build your online store with React JS for fast, responsive, and dynamic e-commerce experiences. Seamless shopping, easy integration.",
    technologies: ["HTML", "CSS", "ReactJs", "Tailwind", "MongoDB"],
    demo: "https://styl-myj.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
    demo: "https://mohamedyusufjamalportfolio.vercel.app/",
  },
];
export const CURRENT_PROJECTS = [
  {
    title: "Car Market App",
    image: project5,
    description:
      "An application for Car Rental,Sale and Shopping , with features such as task Rent Cars,Sell Cars,and Contact Support.",
    technologies: ["React", "Tailwind", "Shadcn", "Clerk", "Framer-motion"],
  },
];

export const CONTACT = {
  address: "South Ukkadam, Coimbatore",
  phoneNo: "+91 88255 12668",
  email: "mdyusufwork@gmail.com",
};
