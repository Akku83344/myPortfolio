import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
Hello! I'm a final year Computer Science and Engineering student at KIIT University, specializing in full stack development using the MERN stack. I am proficient in HTML, CSS, JavaScript, TypeScript, Node.js, Bootstrap, Tailwind CSS, ReactJs, NextJs, Express, MySQL, MongoDB, and tools like Git/GitHub. My passion for coding extends to data structures and algorithms, particularly with C and C++. I am eager to apply my skills in developing efficient and innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated final year Computer Science and Engineering student at KIIT University, specializing in full stack development with expertise in HTML, CSS, JavaScript, TypeScript, Node.js, Bootstrap, Tailwind CSS, ReactJs, NextJs, Express, MySQL, and MongoDB. My journey into web development started with a deep curiosity about technology, evolving into a career where I thrive on learning and adapting to new challenges. Alongside my technical skills, I am passionate about data structures and algorithms, particularly in C and C++, applying them to solve complex problems. Collaborative by nature, I excel in team environments, delivering efficient and user-friendly web applications. Beyond coding, I actively participate in coding contests to sharpen my skills and enjoy hobbies like singing and doodling, which provide a creative balance to my technical pursuits.`;

export const EXPERIENCES = [
  {
    year: "2021- Present",
    college: "KIIT University",
    description: `Btech,CSE`,
    marks: "CGPA-7.9"
  },
  {
    year: "2019 - 2021",
    college: "Future Bhubaneswar School,Bhubaneswar",
    description: "Class XII",
    marks: `Physics,Chemistry,Mathematics`,
  }
];

export const PROJECTS = [
  {
    title: "LMS",
    image: project1,
    description:
      "Designed and developed a comprehensive MERN stack Learning Management System (LMS) featuring scalable architecture, real-time notifications using Socket.io, dynamic email templates with Node.js and EJS, and efficient cache maintenance for optimal performance.",
    technologies: ["Next 13", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "CollaBoard",
    image: project2,
    description:
      "CollaBoard utilizes LiveBlock features to create a real-time collaboration platform enabling users to connect to a shared room and interact through cursor chat comments reactions and drawing tools for collaborative design.",
    technologies: ["Next js", "TypeScript", "Liveblocks"],
  },
  {
    title: "Zomato Clone",
    image: project3,
    description:
      "Crafted a Zomato clone with React.js, featuring a user-centric UI/UX design, and utilized CSS for visually appealing styling,fetches and displays information from the Zomato API.",
    technologies: ["React", "CSS"],
  },
  {
    title: "Sorting Visualizer",
    image: project3,
    description:
      "Developed a sorting visualizer utilizing Next.js, TypeScript, and Tailwind CSS to dynamically demonstrate sorting algorithms such as bubble, insertion, selection, merge, and quick sort.",
    technologies: ["React", "CSS"],
  },
  {
    title: "Is it Fake",
    image: project4,
    description:
      "Developed a logistic regression-based machine learning model for distinguishing between fake and real news, employing thorough data preprocessing techniques.",
    technologies: ["python"],
  },
  {
    title: "Movie Recommendation system",
    image: project4,
    description:
      "Built a movie recommender system that leverages cosine similarity. By pre-processing movie data and identifying key features like genre and director, the system recommends similar movies to those a user enjoys.",
    technologies: ["python"],
  },
];

export const CONTACT = {
  address: "Bhubaneswar,Odisha ",
  phoneNo: "7978285920",
  email: "akku83344@gmail.com",
};
