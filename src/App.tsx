import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Orbit, Sparkles, Terminal, Triangle } from "lucide-react";
import "./styles.css";

type SkillNode = {
  id: string;
  label: string;
  kicker: string;
  detail: string;
  x: number;
  y: number;
  state: "active" | "exploring";
  accent: string;
};

type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  stack: string[];
  status: string;
  href: string;
  tone: "lime" | "violet";
};

const GITHUB = "https://github.com/rushitthumar42-pixel";
const skills: SkillNode[] = [
  { id: "algorithms", label: "C++ + algorithms", kicker: "ACTIVE FOUNDATION", detail: "Building problem-solving depth through data structures, algorithms, and implementation discipline.", x: 19, y: 24, state: "active", accent: "#56d9ff" },
  { id: "python", label: "Python + automation", kicker: "ACTIVE FOUNDATION", detail: "Using Python as a practical language for experiments, automation, and data-oriented workflows.", x: 78, y: 22, state: "active", accent: "#56d9ff" },
  { id: "architecture", label: "Software architecture", kicker: "IN PRACTICE", detail: "Learning to turn ideas into maintainable, testable software with a clear path from interface to implementation.", x: 16, y: 72, state: "exploring", accent: "#6c8cff" },
  { id: "intelligence", label: "Artificial intelligence", kicker: "EXPLORATION VECTOR", detail: "Exploring how intelligent systems are designed, evaluated, and made useful beyond the notebook.", x: 82, y: 70, state: "exploring", accent: "#6c8cff" },
  { id: "data", label: "Data science", kicker: "EXPLORATION VECTOR", detail: "Following the signal from raw data to meaningful patterns, decisions, and software.", x: 50, y: 10, state: "exploring", accent: "#6c8cff" },
  { id: "opensource", label: "Open source", kicker: "NORTH STAR", detail: "Reading real codebases, contributing thoughtfully, and learning in public.", x: 50, y: 89, state: "exploring", accent: "#6c8cff" },
];

const projects: Project[] = [
  {
    id: "artifact-a",
    index: "01",
    name: "{{PROJECT_NAME_01}}",
    description: "{{PROJECT_DESCRIPTION_01}}",
    stack: ["{{LANGUAGE}}", "{{TOOL}}"],
    status: "EDITABLE SLOT",
    href: "#contact",
    tone: "lime",
  },
  {
    id: "artifact-b",
    index: "02",
    name: "{{PROJECT_NAME_02}}",
    description: "{{PROJECT_DESCRIPTION_02}}",
    stack: ["{{LANGUAGE}}", "{{TOOL}}"],
    status: "EDITABLE SLOT",
    href: "#contact",
    tone: "violet",
  },
];

function App() {
  const reduceMotion = useReducedMotion();
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("index");

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const sections = ["index", "projects", "experiments", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const objectStyle = useMemo(
    () => ({
      transform: reduceMotion ? undefined : `rotateX(${cursor.y * -4}deg) rotateY(${cursor.x * 7}deg)`,
    }),
    [cursor, reduceMotion],
  );

  return (
    <main className="app-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="glass-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#index" aria-label="Rushit home">
          <span className="brand-symbol">✦</span>
          <span>PRISMATIC OS</span>
        </a>
        <div className="nav-links">
          {["index", "projects", "experiments", "about", "contact"].map((item) => (
            <a className={activeSection === item ? "active" : ""} href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </div>
        <span className="nav-status"><span className="status-dot" /> ONLINE</span>
      </nav>

      <section className="hero section-frame" id="index">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> PORTAL / PERSONAL COMPUTATIONAL ENVIRONMENT</p>
          <h1>RUSHIT</h1>
          <div className="hero-statement">
            <span>ENGINEERING</span>
            <span className="outline-text">THE UNSEEN.</span>
          </div>
          <p className="hero-intro">Computer Science / Software / Intelligence</p>
          <a className="lime-button" href="#projects">Enter the archive <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-stage" aria-label="Interactive glass computational object">
          <div className="stage-label label-top">[ EXPERIMENT IN PROGRESS ]</div>
          <div className="stage-label label-left">[ IDEAS → IMPLEMENTATION ]</div>
          <div className="stage-label label-right">[ COMPUTATIONAL SYSTEMS ]</div>
          <motion.div
            className="glass-orbit"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            style={objectStyle}
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />
            <div className="prism-core"><Triangle size={58} strokeWidth={1} /></div>
            <span className="core-node node-one" />
            <span className="core-node node-two" />
            <span className="core-node node-three" />
          </motion.div>
          <div className="stage-index">OBJECT / 000<br /><span>GLASS MIND</span></div>
        </div>
        <div className="hero-meta">
          <span>[ DOMAIN: COMPUTER SCIENCE ]</span>
          <span>[ MODE: LEARNING / BUILDING / CONTRIBUTING ]</span>
          <span>[ LOCATION: OPEN INTERNET ]</span>
        </div>
      </section>

      <section className="manifesto section-frame" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> IDENTITY LAYER</p>
          <h2>A mind in <em>motion.</em></h2>
        </div>
        <div className="manifesto-grid">
          <div className="manifesto-number">02<span>/05</span></div>
          <div className="manifesto-copy">
            <p>I’m Rushit, a Computer Science Engineering student building the habits behind exceptional software: understand the problem, make the system legible, and keep iterating until the idea works in the real world.</p>
            <p>My current coordinates sit between <strong>C++</strong>, <strong>Python</strong>, DSA, AI/ML, data science, and open source. I’m not presenting the destination as a finished product. This is the record of getting there.</p>
          </div>
          <div className="terminal-note">
            <div><Terminal size={15} /> /boot/operator</div>
            <p><span>$</span> whoami</p>
            <p className="terminal-output">curious_builder</p>
            <p><span>$</span> mission --now</p>
            <p className="terminal-output">learn → build → contribute</p>
          </div>
        </div>
      </section>

      <section className="terrain section-frame" id="experiments">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span>03</span> COGNITIVE MAP</p><h2>Follow the <em>signal.</em></h2></div>
          <p className="section-note">Select a node to inspect the current learning vector. Solid nodes are active foundations; spectral nodes are exploration.</p>
        </div>
        <div className="terrain-layout">
          <div className="map-shell">
            <svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {skills.map((skill) => <line key={skill.id} x1="50" y1="50" x2={skill.x} y2={skill.y} />)}
            </svg>
            <div className="map-core"><Orbit size={22} /><span>COMPUTATIONAL<br />THINKING</span></div>
            {skills.map((skill) => (
              <button
                className={`skill-node ${activeSkill.id === skill.id ? "selected" : ""} ${skill.state}`}
                style={{ left: `${skill.x}%`, top: `${skill.y}%`, "--node-accent": skill.accent } as React.CSSProperties}
                onClick={() => setActiveSkill(skill)}
                key={skill.id}
              >
                <span className="node-pulse" /><span>{skill.label}</span>
              </button>
            ))}
          </div>
          <motion.aside className="skill-inspector" key={activeSkill.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inspector-kicker">{activeSkill.kicker}</span>
            <h3>{activeSkill.label}</h3>
            <p>{activeSkill.detail}</p>
            <span className="inspector-index">VECTOR / {String(skills.indexOf(activeSkill) + 1).padStart(2, "0")}</span>
          </motion.aside>
        </div>
      </section>

      <section className="projects section-frame" id="projects">
        <div className="section-heading split-heading">
          <div><p className="eyebrow"><span>04</span> RESEARCH ARCHIVE</p><h2>Ideas become <em>artifacts.</em></h2></div>
          <p className="section-note">A transparent archive. Replace editable slots with real repositories as they become public.</p>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <motion.article className={`project-artifact ${project.tone}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.12 }} key={project.id}>
              <div className="artifact-visual">
                <span className="artifact-number">{project.index}</span>
                <div className="artifact-shape"><span /><span /><span /></div>
                <p>PRISM / {project.index} — UNRESOLVED FORM</p>
              </div>
              <div className="artifact-info">
                <div className="artifact-meta"><span>{project.status}</span><span>ARCHIVE ENTRY {project.index}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.href}>Open artifact <ArrowUpRight size={15} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="telemetry section-frame">
        <div className="telemetry-head"><p className="eyebrow"><span>05</span> PUBLIC TELEMETRY</p><span className="telemetry-live"><span className="status-dot" /> SOURCE: GITHUB / PUBLIC</span></div>
        <div className="telemetry-grid">
          <div><span className="metric-label">PUBLIC GRAPH</span><strong>OPEN</strong><small>contributions remain the source of truth</small></div>
          <div><span className="metric-label">PRIMARY SIGNAL</span><strong>C++ + PYTHON</strong><small>current confirmed languages</small></div>
          <div><span className="metric-label">NEXT ITERATION</span><strong>OPEN SOURCE</strong><small>learning in public, one artifact at a time</small></div>
        </div>
        <a className="text-link" href={GITHUB}><Github size={17} /> Inspect the live GitHub archive <ArrowUpRight size={15} /></a>
      </section>

      <footer className="footer section-frame" id="contact">
        <div className="footer-mark"><Sparkles size={20} /><span>PRISMATIC OS</span></div>
        <h2>Make something<br /><em>useful.</em></h2>
        <p>For ideas, collaborations, or thoughtful technical conversations, open a channel.</p>
        <div className="contact-links">
          <a href={GITHUB}><Github size={17} /> GitHub</a>
          <a href="{{LINKEDIN_URL}}"><Linkedin size={17} /> LinkedIn</a>
          <a href="mailto:{{EMAIL_ADDRESS}}"><Mail size={17} /> Email</a>
        </div>
        <div className="footer-bottom"><span>RUSHIT / 2026 / THE SYSTEM IS EVOLVING</span><span>NO FAKE METRICS. JUST THE WORK.</span></div>
      </footer>
    </main>
  );
}

export default App;
