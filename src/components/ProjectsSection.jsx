import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "crypto-dashboard",
    description: "A beautiful crypto-DashBoard app using React and Tailwind.",
    image: "./project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://crypto-dashboard-two-brown.vercel.app/",
    githubUrl: "https://github.com/Koushikachar/Crypto-Dashboard",
  },
  {
    id: 2,
    title: "AI Interview Platform",
    description:
      "Developed an intelligent interview system with MERN and Gemini API integration for dynamic question generation and response evaluation.",
    image: "./project2.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "https://interview-prep-ai-five-nu.vercel.app/",
    githubUrl: "https://github.com/Koushikachar/InterviewPrepAi",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "Built a movie app using React and Tailwind CSS with Appwrite as the backend, integrating a public movie API for real-time data.",
    image: "./project3.png",
    tags: ["React", "Tailwind", "appWrite"],
    demoUrl: "https://movie-app-three-omega-33.vercel.app/",
    githubUrl: "https://github.com/Koushikachar/Movie_App",
  },
  {
    id: 4,
    title: "Agency Ai",
    description:
      "Built a responsive frontend called Agency AI using React, Tailwind CSS, and Framer Motion for smooth, modern animations.",
    image: "./project4.png",
    tags: ["React", "Tailwind", "FramerMotion"],
    demoUrl: "https://agent-ai-chi.vercel.app/",
    githubUrl: "https://github.com/Koushikachar/agent_ai",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description:
      "Built a full-stack social media platform using Next.js, React, TypeScript, and PostgreSQL with modern authentication and user interaction features.",
    image: "./project5.png",
    tags: ["React", "Next.js", "Typescript"],
    demoUrl: "https://social-media-platform-kvvv.vercel.app/",
    githubUrl: "https://github.com/Koushikachar/Social-media-platform",
  },
  {
    id: 6,
    title: " Streamify Video Calling",
    description:
      "Built a real-time video calling app using the MERN stack and Stream API, enabling seamless one-on-one communication.",
    image: "./project6.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "https://streamify-video-calling-v07f.onrender.com",
    githubUrl: "https://github.com/Koushikachar/Streamify-video-calling",
  },
];
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/koushikachar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
