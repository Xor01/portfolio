"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiTypescript,
  SiFastapi,
  SiPrisma,
  SiPostgresql,
  SiPytorch,
  SiBootstrap,
  SiHeroku,
  SiDigitalocean,
  SiLinux,
  SiAngular,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Home() {
  const [showKaustCert, setShowKaustCert] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0f12] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f12]/80 backdrop-blur-md border-b border-[#00ffd5]/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#00ffd5] font-mono">
            {" "}
            {"</Xor01>"}
          </div>{" "}
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-[#00ffd5] transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[#00ffd5] transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-[#00ffd5] transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-[#00ffd5] transition-colors"
            >
              Contact
            </a>
          </nav>
          <a
            download
            href="/Mohammed Alabdulmuhsin.pdf"
            className="px-4 py-2 border border-[#00ffd5] text-[#00ffd5] rounded hover:bg-[#00ffd5]/10 transition-colors"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-[#00ffd5] mb-2">
              Hi, I&apos;m Mohammed Alabdulmuhsin
            </p>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Software Engineer
              <br />
              <span className="text-[#00ffd5]">Innovator</span>
              <br />
              AI Engineer
            </h1>
          </div>
          <div className="flex gap-6 mb-12">
            <a
              href="https://github.com/xor01"
              target="_blank"
              className="text-2xl hover:text-[#00ffd5] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/xor01"
              target="_blank"
              className="text-2xl hover:text-[#00ffd5] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/xor01a"
              target="_blank"
              className="text-2xl hover:text-[#00ffd5] transition-colors"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-20 px-6 border-t border-[#00ffd5]/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#00ffd5]">Projects</h2>
          <div className="space-y-8">
            {[
              {
                id: 1,
                title: "Tgarob - Career Guidance Platform",
                date: "July 2025 - Present",
                category: "Full Stack / AI",
                description:
                  "Career guidance and learning platform using Next.js, React 18, TypeScript, and Tailwind CSS. Features adaptive track-selection tests, AI-powered job simulation chat, user-generated major experience posts with admin moderation, expert consultations, and paid courses. Integrated Clerk for authentication and PostgreSQL with Prisma ORM.",
                link: "https://tgarob.xor01.com",
              },
              {
                id: 2,
                title: "Adeeb - Arabic Blogging Platform",
                date: "April 2025 - June 2025",
                category: "Full Stack",
                description:
                  "Modern Arabic blogging platform using Next.js App Router. Implemented user authentication (Clerk), rich text editing (TipTap), media uploads (AWS S3 via DigitalOcean Spaces), and content interaction. Developed admin dashboard for managing users, posts, and content moderation. Built with TypeScript, React, Next.js, Prisma, PostgreSQL, and containerized with Docker.",
                link: "https://adeeb.xor01.com",
              },
              {
                id: 3,
                title: "Falatha - IoT Baby Monitoring System",
                date: "September 2024 - May 2025",
                category: "IoT / AI",
                description:
                  "Comprehensive IoT baby monitoring solution combining embedded hardware, backend AI services, and cross-platform mobile app. ESP32 sensor module capturing vital signs and environment data, integrated with FastAPI backend performing deep learning cry analysis using CNN model. Flutter mobile app featuring real-time health tracking, sleep monitoring, and cry pattern analysis.",
                link: "https://faltha.web.app",
              },
              {
                id: 4,
                title: "Warfa-Check - Medical Interaction Checker",
                date: "July 2024 - August 2024",
                category: "AI / ML",
                description:
                  "Multilingual Flask-based web app to detect interactions between Warfarin and user-inputted foods, herbs, or medications via text, image, or voice. Integrated fine-tuned OpenAI's GPT-4o for image analysis, Whisper model for voice transcription. Built with Bootstrap 5, deployed using Gunicorn on Heroku. Published in PLOS Digital Health journal.",
                link: "https://warfa-check.xor01.com/",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="border-l-2 border-[#00ffd5]/20 pl-6 hover:border-[#00ffd5] transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <span className="text-sm text-gray-500">
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold group-hover:text-[#00ffd5] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      {project.date}
                    </span>
                    <span className="text-sm px-3 py-1 bg-[#00ffd5]/10 text-[#00ffd5] rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffd5] hover:underline inline-flex items-center gap-2"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-20 px-6 border-t border-[#00ffd5]/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#00ffd5]">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                id: 1,
                company: "Alareeb Information & Communication Company",
                role: "Co-op Trainee Frontend Engineer",
                period: "June 2025 - Present",
                description:
                  "Full-time co-op training position as Frontend Engineer, working on production-level Angular applications.",
              },
              {
                id: 2,
                company: "Muqallam",
                role: "Full Stack Engineer",
                period: "August 2024 - October 2025",
                description:
                  "Muqallam is a startup simplifying content creation in the advertising sector through generative AI. Developed the landing page using Tailwind CSS, designed and implemented database schema, created social media posting functionality through API integration and webhooks. Built user dashboard and implemented analytics features.",
              },
            ].map((exp) => (
              <div
                key={exp.id}
                className="border-l-2 border-[#00ffd5]/20 pl-6 hover:border-[#00ffd5] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-[#00ffd5] mb-2">{exp.role}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Volunteering</h3>
            <div className="space-y-6">
              {[
                {
                  id: 1,
                  organization:
                    "Takamol Center for Orphan Care and Development",
                  role: "Technical Assistant",
                  period: "July 2024 - August 2024",
                  description:
                    "Taught high school students web programming basics using HTML, CSS, Bootstrap, and JavaScript, helping them create their own websites.",
                },
                {
                  id: 2,
                  organization: "Adeeb Club",
                  role: "Technical Manager",
                  period: "August 2024 - August 2025",
                  location: "KFU",
                  description:
                    "Creating and deploying activity websites for the club, building a system to manage member achievements and volunteering hours.",
                },
                {
                  id: 3,
                  organization:
                    "Artificial Intelligence and Programming (AIP) Club",
                  role: "AI team | Web Dev Team member",
                  period: "August 2024 - August 2025",
                  location: "KFU",
                  description:
                    "Active member contributing to AI and web development initiatives.",
                },
              ].map((vol) => (
                <div
                  key={vol.id}
                  className="border-l-2 border-[#00ffd5]/20 pl-4 hover:border-[#00ffd5] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="font-bold text-lg">{vol.organization}</h4>
                    <span className="text-sm text-gray-500">{vol.period}</span>
                  </div>
                  <p className="text-[#00ffd5] text-sm mb-1">
                    {vol.role} {vol.location && `• ${vol.location}`}
                  </p>
                  {vol.description && (
                    <p className="text-gray-400 text-sm">{vol.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 border-t border-[#00ffd5]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#00ffd5]">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-[#00ffd5]/30">
                <img
                  src="/profile.png"
                  alt="Mohammed Alabdulmuhsin"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Fresh Computer Science graduate and full-stack software engineer
                with a strong foundation in building scalable, user-focused web
                applications using React, Angular, Python Flask, and modern UI
                systems like Tailwind and Shadcn. I have delivered
                production-ready solutions for real users, including AI-powered
                tools, and content automation platforms, always prioritizing
                clean architecture, maintainability, and performance. My
                experience spans frontend clean UI, backend logic, ORM-based
                data modeling, thoughtful API integrations, and deployment to
                production environments. Beyond technical execution, I bring
                experience in workshops, mentoring, and collaborating with
                cross-functional teams to transform ideas into maintainable
                digital products. As a fresh graduate, I am intentionally
                positioning myself for environments that value long-term
                engineering thinking, and scalable systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4 mb-8">
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">
                    August 2020 - December 2025
                  </p>
                  <h4 className="font-bold">King Faisal University</h4>
                  <p className="text-gray-400">
                    Bachelor - Computer Science and Information Technology
                  </p>
                  <p className="text-[#00ffd5] text-sm mt-1">GPA: 4.30/5</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">March 2025</p>
                  <h4 className="font-bold">
                    Advanced Training of the KAUST Academy Artificial
                    Intelligence specialization
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">KAUST Academy</p>
                  <button
                    onClick={() => setShowKaustCert(!showKaustCert)}
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    {showKaustCert
                      ? "Hide Certificate ↑"
                      : "View Certificate →"}
                  </button>
                  {showKaustCert && (
                    <img
                      src="/kaust.png"
                      alt="KAUST Academy Certificate"
                      className="mt-3 max-w-full h-auto rounded border border-[#00ffd5]/20"
                    />
                  )}
                </div>
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">December 2024</p>
                  <h4 className="font-bold">
                    Mathematics for Machine Learning and Data Science
                  </h4>
                  <p className="text-gray-400 text-sm">DeepLearning.AI</p>
                  <a
                    href="https://coursera.org/share/22f7ec35b607231b628c3a5c4bde7603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">December 2024</p>
                  <h4 className="font-bold">
                    Improving Deep Neural Networks: Hyperparameter Tuning,
                    Regularization and Optimization
                  </h4>
                  <p className="text-gray-400 text-sm">DeepLearning.AI</p>
                  <a
                    href="https://coursera.org/share/7e3c58968dd096c2a4253511f9d17122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">March 2024</p>
                  <h4 className="font-bold">
                    Developing AI Applications with Python and Flask
                  </h4>
                  <p className="text-gray-400 text-sm">IBM</p>
                  <a
                    href="https://coursera.org/verify/YEHQJLLF92V6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">February 2024</p>
                  <h4 className="font-bold">Machine Learning with Python</h4>
                  <p className="text-gray-400 text-sm">IBM</p>
                  <a
                    href="https://coursera.org/verify/DW5DATXEA3LX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
                <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                  <p className="text-sm text-gray-500">June 2021</p>
                  <h4 className="font-bold">
                    The Complete 2021 PHP Full Stack Web Developer Bootcamp
                  </h4>
                  <p className="text-gray-400 text-sm">Udemy</p>
                  <a
                    href="http://ude.my/UC-367d039b-6061-478e-8b90-974c84463837"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffd5] text-sm hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-8">Publications</h3>
              <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                <p className="text-sm text-gray-500">March 24, 2025</p>
                <h4 className="font-bold">
                  Development of an Artificial Intelligence-Enhanced Warfarin
                  Interaction Checker Platform
                </h4>
                <p className="text-gray-400 text-sm">PLOS Digital Health</p>
                <a
                  href="https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0000756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffd5] text-sm hover:underline"
                >
                  Read Publication →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "HTML/CSS", icon: SiReact },
                { name: "JavaScript/TypeScript", icon: SiTypescript },
                { name: "React.js", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Angular", icon: SiAngular },
                { name: "Python", icon: SiPython },
                { name: "Flask", icon: SiFlask },
                { name: "FastAPI", icon: SiFastapi },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "Prisma", icon: SiPrisma },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MySQL", icon: SiMysql },
                { name: "Git", icon: SiGit },
                { name: "Docker", icon: SiDocker },
                { name: "AWS", icon: FaAws },
                { name: "DigitalOcean", icon: SiDigitalocean },
                { name: "Linux", icon: SiLinux },
                { name: "PyTorch", icon: SiPytorch },
                { name: "TensorFlow", icon: SiTensorflow },
                { name: "Bootstrap", icon: SiBootstrap },
                { name: "Heroku", icon: SiHeroku },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-[#00ffd5]/5 border border-[#00ffd5]/20 rounded hover:bg-[#00ffd5]/10 transition-colors"
                >
                  <skill.icon className="text-[#00ffd5]" />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Team Player",
                "Adaptability",
                "Fast Learning",
                "Excellent Verbal Communication",
                "Agile/Scrum",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-[#00ffd5]/5 border border-[#00ffd5]/20 rounded hover:bg-[#00ffd5]/10 transition-colors"
                >
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">
              Extra Curriculum Activities
            </h3>
            <div className="border-l-2 border-[#00ffd5]/20 pl-4">
              <p className="text-sm text-gray-500">9-10 February 2025</p>
              <h4 className="font-bold">JavaScript Bootcamp</h4>
              <p className="text-gray-400 text-sm mb-2">
                In affiliation with AIP club and CODE Lab KFU
              </p>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                <li>
                  Designed and delivered a 3-day intensive JavaScript bootcamp
                  covering beginner, intermediate, and advanced topics
                </li>
                <li>
                  Taught core JavaScript concepts, including ES6+ features,
                  asynchronous programming, and API integration
                </li>
                <li>
                  Led hands-on coding sessions and guided participants in
                  building real-world projects
                </li>
                <li>
                  Helped attendees improve their problem-solving skills and gain
                  practical experience
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Languages</h3>
            <div className="flex gap-6">
              <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                <h4 className="font-bold">Arabic</h4>
                <p className="text-gray-400 text-sm">Native</p>
              </div>
              <div className="border-l-2 border-[#00ffd5]/20 pl-4">
                <h4 className="font-bold">English</h4>
                <p className="text-gray-400 text-sm">
                  Professional Proficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 border-t border-[#00ffd5]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#00ffd5]">Contact</h2>
          <div className="max-w-2xl">
            <p className="text-gray-400 mb-8">Want to get in contact?</p>
            <div className="text-center py-12">
              <p className="text-gray-400 mb-6">Reach me directly at:</p>
              <a
                href="mailto:m.abdulmuhsin@outlook.com"
                className="inline-block px-8 py-3 bg-[#00ffd5] text-[#0b0f12] font-bold rounded hover:bg-[#00ffd5]/90 transition-colors text-lg"
              >
                m.abdulmuhsin@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-[#00ffd5]/10 text-center text-gray-500 text-sm">
        <p>© 2025 Mohammed Alabdulmuhsin. All rights reserved.</p>
      </footer>
    </main>
  );
}
