import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Move3d } from "lucide-react";
import "./styles.css";

const githubUrl = "https://github.com/rushitthumar42-pixel";

const interests = [
  ["01", "Algorithms", "Turning difficult problems into clear, testable steps."],
  ["02", "Artificial intelligence", "Exploring useful intelligence beyond the notebook."],
  ["03", "Software engineering", "Learning how real systems stay readable and reliable."],
  ["04", "Open source", "Reading, contributing, and learning in public."],
];

const projects = [
  { number: "A/01", title: "{{PROJECT_NAME_01}}", description: "{{PROJECT_DESCRIPTION_01}}", stack: "{{LANGUAGE_AND_TOOLS_01}}", status: "{{STATUS_01}}" },
  { number: "A/02", title: "{{PROJECT_NAME_02}}", description: "{{PROJECT_DESCRIPTION_02}}", stack: "{{LANGUAGE_AND_TOOLS_02}}", status: "{{STATUS_02}}" },
];

function App() {
  const reducedMotion = useReducedMotion();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeInterest, setActiveInterest] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMove = (event: PointerEvent) => {
      setRotation({
        x: (event.clientY / window.innerHeight - 0.5) * -12,
        y: (event.clientX / window.innerWidth - 0.5) * 16,
      });
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reducedMotion]);

  const objectTransform = useMemo(
    () => ({ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }),
    [rotation],
  );

  return (
    <div className="site">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#top"><span className="mark">R</span> RUSHIT / 00</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#mind">Mind</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="availability"><i /> Available to build</span>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="overline"><span>01 / 04</span> PERSONAL COMPUTATIONAL SPACE</div>
            <h1>RUSHIT<span className="thin">.</span></h1>
            <p className="hero-subtitle">Computer science student building toward the intersection of <em>software, intelligence, and useful systems.</em></p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">Explore the work <ArrowDownRight size={17} /></a>
              <span className="micro-copy">C++ / Python / DSA / AI-ML</span>
            </div>
          </div>
          <div className="hero-object-area">
            <div className="object-caption caption-one">GLASS OBJECT / 001</div>
            <div className="object-caption caption-two">POINTER-RESPONSIVE<br />MATERIAL STUDY</div>
            <motion.div className="glass-object" style={objectTransform} animate={reducedMotion ? undefined : { rotateZ: 360 }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }}>
              <div className="ring ring-one" /><div className="ring ring-two" /><div className="ring ring-three" />
              <div className="object-body"><span className="object-line" /><span className="object-dot" /></div>
            </motion.div>
            <div className="object-footnote">MOVE THE FIELD<br /><span>TO REFRAME THE OBJECT</span></div>
          </div>
          <div className="hero-footer"><span>BLACK / GRAPHITE / CYAN / DEPTH</span><span>SCROLL TO COMPILE ↓</span></div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">02 / OPERATOR</div>
          <div className="intro-content">
            <h2>Curiosity, with<br /><span>an implementation plan.</span></h2>
            <p>I’m Rushit, a Computer Science Engineering student learning to build software that is useful, understandable, and worth maintaining.</p>
            <p>My path is hands-on: sharpen DSA with C++, use Python for practical experiments, explore AI/ML and data science, and learn from the open-source systems I want to contribute to.</p>
          </div>
          <div className="intro-aside"><span>NOW</span><strong>LEARNING</strong><small>DSA / AI-ML / SOFTWARE ENGINEERING</small><span className="aside-rule" /><span>NEXT</span><strong>BUILDING</strong><small>REAL PROJECTS / OPEN SOURCE</small></div>
        </section>

        <section className="mind section" id="mind">
          <div className="section-label">03 / MIND MAP</div>
          <div className="mind-heading"><h2>Follow the<br /><span>signal.</span></h2><p>Select a point in the map. The description changes with the current learning vector.</p></div>
          <div className="mind-map">
            <div className="map-grid" aria-hidden="true" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <line x1="50" y1="50" x2="18" y2="20" /><line x1="50" y1="50" x2="82" y2="20" /><line x1="50" y1="50" x2="18" y2="80" /><line x1="50" y1="50" x2="82" y2="80" />
            </svg>
            <div className="map-center">COMPUTATIONAL<br />THINKING</div>
            {interests.map(([number, title], index) => (
              <button key={title} className={`map-node node-${index} ${activeInterest === index ? "selected" : ""}`} onClick={() => setActiveInterest(index)}>
                <span>{number}</span>{title}
              </button>
            ))}
            <div className="map-detail"><span>{interests[activeInterest][0]} / ACTIVE VECTOR</span><h3>{interests[activeInterest][1]}</h3><p>{interests[activeInterest][2]}</p></div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-label">04 / ARTIFACTS</div>
          <div className="work-heading"><h2>Ideas become<br /><span>evidence.</span></h2><p>Real repositories only. Replace the editable fields when an artifact is ready to enter the archive.</p></div>
          <div className="artifact-list">
            {projects.map((project) => (
              <article className="artifact" key={project.number}>
                <div className="artifact-visual"><span>{project.number}</span><div className="floating-shape"><i /><i /><i /></div><small>UNRESOLVED / FORM</small></div>
                <div className="artifact-copy"><div className="artifact-status">{project.status}<span>RESEARCH ARCHIVE</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="artifact-stack">{project.stack}</div><a href="#contact">Repository link <ArrowUpRight size={15} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-strip section">
          <div className="section-label">05 / CURRENT SYSTEM</div>
          <div className="strip-grid"><div><span>PRIMARY LANGUAGES</span><strong>C++ / Python</strong></div><div><span>EXPLORING</span><strong>AI / ML / DATA</strong></div><div><span>ENVIRONMENT</span><strong>OPEN SOURCE</strong></div></div>
          <a className="github-link" href={githubUrl}><Github size={17} /> Open the live GitHub archive <ArrowUpRight size={15} /></a>
        </section>

        <footer className="footer section" id="contact">
          <div className="section-label">06 / TRANSMISSION</div>
          <div className="footer-content"><h2>Let’s build<br /><span>something real.</span></h2><p>For thoughtful conversations, collaborations, or ideas worth exploring.</p><div className="footer-links"><a href={githubUrl}><Github size={16} /> GitHub</a><a href="{{LINKEDIN_URL}}"><Linkedin size={16} /> LinkedIn</a><a href="mailto:{{EMAIL_ADDRESS}}"><Mail size={16} /> Email</a></div></div>
          <div className="footer-end"><span>RUSHIT / PRISMATIC OS / 2026</span><span>BUILT WITH CURIOSITY</span></div>
        </footer>
      </main>
    </div>
  );
}

export default App;
