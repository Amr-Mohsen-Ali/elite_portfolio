import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:amrmohsen5102@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Amr-Mohsen-Ali", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amr--mohsen/", icon: Linkedin },
];

const SKILLS = ["Python", "Machine Learning", "Data Analysis", "Pandas & NumPy"];

const PROJECTS = ["Predictive Model", "Data Analysis Pipeline", "AI Experiments"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Card = ({ as: Tag = "section", title, children }) => (
  <motion.div className="card" variants={cardVariants}>
    <Tag>
      {title ? <h2>{title}</h2> : null}
      {children}
    </Tag>
  </motion.div>
);

export default function App() {
  return (
    <div className="page-shell">
      <main className="content" aria-label="Amr Mohsen portfolio">
        <motion.header className="card hero" initial={{ opacity: 0, y: -28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h1>Amr Mohsen</h1>
          <p className="role">Machine Learning & AI Engineer | Data Specialist</p>
          <p className="intro">Building intelligent systems that transform data into real-world solutions.</p>
        </motion.header>

        <motion.div className="cards-grid" variants={containerVariants} initial="hidden" animate="show">
          <Card title="About Me">
            <p>I specialize in data analysis, machine learning, and AI-driven solutions.</p>
          </Card>

          <Card title="Skills">
            <ul className="list">
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card title="Projects">
            <ul className="list">
              {PROJECTS.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </Card>

          <Card title="Contact">
            <div className="button-row">
              {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
                <a key={label} className="button-link" href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}>
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
