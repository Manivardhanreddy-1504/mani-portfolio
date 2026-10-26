import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Layers3, BrainCircuit, Terminal, Sparkles,
  BriefcaseBusiness, GraduationCap, ExternalLink, Check, Copy
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Mani Vardhan Reddy',
  email: 'manivardhanreddy986@gmail.com',
  phone: '+91 90591 73266',
  role: 'Software Engineer',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/'
};

const projects = [
  {
    number: '01',
    name: 'Trip Tales',
    type: 'Full-stack application',
    company: 'LTM',
    description: 'A travel planning application with real-time updates, travel packages, and a loyalty system designed to make trip planning feel effortless.',
    contributions: ['Built REST APIs and backend logging', 'Connected frontend and backend components', 'Created responsive UI experiences'],
    stack: ['Java', 'Spring Boot', 'Angular', 'Bootstrap', 'JDBC'],
    tone: 'mint'
  },
  {
    number: '02',
    name: 'Demand Tracker',
    type: 'Enterprise application',
    company: 'Fiserv',
    description: 'An internal demand management platform where employees can explore and apply for opportunities based on skills and availability.',
    contributions: ['Developed 20+ REST controllers and service layers', 'Implemented CRUD workflows with Spring Data JPA and Hibernate', 'Followed Controller → Service → Repository architecture'],
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Angular', 'SQL'],
    tone: 'violet'
  },
  {
    number: '03',
    name: 'Cards Vision Plus',
    type: 'Enterprise application',
    company: 'Fiserv',
    description: 'A card management solution supporting customer details, card status, and transaction-related workflows through reliable backend services.',
    contributions: ['Developed and maintained backend REST APIs', 'Implemented business logic and data persistence', 'Integrated APIs with Angular frontend workflows'],
    stack: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'Angular', 'REST APIs'],
    tone: 'orange'
  },
  {
    number: '04',
    name: 'Sustainable Farming Futures',
    type: 'Machine learning project',
    company: 'Personal project',
    description: 'A demand-centric crop recommendation system that combines demand-supply signals with land characteristics to support more informed crop choices.',
    contributions: ['Built a two-stage crop recommendation workflow', 'Combined demand-oriented recommendations with land-specific prediction', 'Created a Flask-based application around ML models'],
    stack: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn', 'SQL'],
    tone: 'blue'
  }
];

const skillGroups = [
  { icon: Code2, title: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'PL/SQL', 'SQL'] },
  { icon: Layers3, title: 'Frameworks & UI', skills: ['Spring Boot', 'Spring', 'Angular', 'React.js', 'Flask', 'Bootstrap'] },
  { icon: Database, title: 'Backend & Data', skills: ['REST APIs', 'Spring Data JPA', 'Hibernate', 'MySQL', 'JDBC'] },
  { icon: Terminal, title: 'DevOps & Cloud', skills: ['Git', 'CI/CD', 'Linux', 'GCP', 'DevOps'] },
  { icon: BrainCircuit, title: 'AI & Machine Learning', skills: ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'NLP', 'Generative AI', 'Prompt Engineering'] }
];

const certifications = [
  'IIHT — Generative AI',
  'IIHT — Applied Machine Learning',
  'Coursera — Machine Learning Foundations',
  'Coursera — Generative AI & Prompt Engineering',
  'IIHT — SQL Server 2016 Administration',
  'Smart Interviews — Data Structures and Algorithms',
  'NPTEL — Accelerated AI',
  'Oracle — DBMS',
  'ISRO — Overview of Space Science and Technology'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const filters = ['All', 'Full-stack', 'Enterprise', 'Machine learning'];
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-stack') return project.type.toLowerCase().includes('full-stack');
    if (activeFilter === 'Enterprise') return project.type.toLowerCase().includes('enterprise');
    return project.type.toLowerCase().includes('machine learning');
  });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="site-shell">
        <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Go to home">
            <span className="brand-mark">M<span>.</span></span>
            <span className="brand-label">MANI VARDHAN <i> / PORTFOLIO</i></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <main>
          <section className="hero section-wrap" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE NEXT CHALLENGE</div>
              <h1>Building digital<br />things that <span className="highlight">work.</span></h1>
              <p className="hero-intro">Hey, I’m <strong>Mani Vardhan</strong> — a Software Engineer focused on building dependable backend systems and thoughtful full-stack experiences.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-meta">
                <span><span className="meta-label">BASED IN</span>{profile.location}</span>
                <span><span className="meta-label">FOCUS</span>Java · Spring Boot · Angular</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Decorative abstract code illustration">
              <div className="art-grid"></div>
              <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
              <div className="art-card card-code">
                <div className="code-head"><span></span><span></span><span></span><small>api.service.java</small></div>
                <div className="code-lines">
                  <p><b>01</b> <span className="code-purple">public</span> <span className="code-blue">class</span> ApiService {'{'}</p>
                  <p><b>02</b> &nbsp; <span className="code-purple">public</span> Response <span className="code-yellow">build()</span> {'{'}</p>
                  <p><b>03</b> &nbsp;&nbsp; <span className="code-green">return</span> solution;</p>
                  <p><b>04</b> &nbsp; {'}'}</p>
                  <p><b>05</b> {'}'}</p>
                </div>
              </div>
              <div className="floating-chip chip-spring"><span className="chip-icon">S</span> Spring Boot</div>
              <div className="floating-chip chip-api"><Code2 size={15} /> REST APIs</div>
              <div className="hero-stamp"><Sparkles size={15} /><span>CURIOUS BY<br />DEFAULT</span></div>
              <div className="art-caption">DESIGN. BUILD. ITERATE.</div>
            </div>
            <a href="#about" className="scroll-cue"><span></span> SCROLL TO EXPLORE</a>
          </section>

          <section className="ticker" aria-label="Specialties">
            <div className="ticker-track">
              {Array.from({ length: 2 }).flatMap((_, group) => ['BACKEND ENGINEERING', 'FULL-STACK DEVELOPMENT', 'CLEAN ARCHITECTURE', 'MACHINE LEARNING'].map((label, i) => (
                <span key={`${group}-${i}`}>{label}<i>✳</i></span>
              )))}
            </div>
          </section>

          <section className="section-wrap about-section" id="about">
            <div className="section-kicker reveal"><span>01 / ABOUT</span><span className="kicker-line"></span><span>THE PERSON BEHIND THE CODE</span></div>
            <div className="about-grid">
              <div className="about-heading reveal"><h2>Engineering with<br /><span className="muted-heading">purpose.</span></h2></div>
              <div className="about-body reveal">
                <p className="large-copy">I enjoy turning complex requirements into clear, maintainable software — from robust backend APIs to intuitive interfaces.</p>
                <p>My experience spans enterprise application workflows, relational database integration, and full-stack development. With a foundation in Artificial Intelligence and Machine Learning, I also enjoy exploring how intelligent systems can solve practical problems.</p>
                <div className="quick-facts">
                  <div><span className="fact-number">02<span>+</span></span><span className="fact-label">YEARS IN SOFTWARE</span></div>
                  <div><span className="fact-number">20<span>+</span></span><span className="fact-label">REST CONTROLLERS CONTRIBUTED TO</span></div>
                  <div><span className="fact-number">04</span><span className="fact-label">FEATURED PROJECTS</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="experience-section" id="experience">
            <div className="section-wrap">
              <div className="section-kicker reveal"><span>02 / EXPERIENCE</span><span className="kicker-line"></span><span>WHERE I’VE BEEN BUILDING</span></div>
              <div className="experience-card reveal">
                <div className="experience-date"><span className="date-dot"></span>2024 — PRESENT</div>
                <div className="experience-main">
                  <div className="experience-title-row"><div><h3>Software Engineer</h3><p className="company-name">LTM <span>·</span> Full-stack development</p></div><BriefcaseBusiness size={24} className="experience-icon" /></div>
                  <p className="experience-summary">Contributing to enterprise software delivery and application development, with training and hands-on work across Java full-stack technologies.</p>
                  <ul className="experience-points">
                    <li>Completed full-stack Java training covering Java, Spring Boot, HTML, CSS, JavaScript, PL/SQL, and SQL.</li>
                    <li>Contributed to application development and deployment activities in collaboration with project teams.</li>
                    <li>Worked across REST APIs, layered backend architecture, and frontend-backend integration.</li>
                  </ul>
                  <div className="tag-row"><span>Java</span><span>Spring Boot</span><span>Angular</span><span>SQL</span><span>REST APIs</span></div>
                </div>
              </div>
              <div className="education-row reveal">
                <div className="education-icon"><GraduationCap size={22} /></div>
                <div><span className="tiny-label">EDUCATION</span><h3>B.Tech — Computer Science (AI & ML)</h3><p>B V Raju Institute of Technology <span>·</span> 2020–2024</p></div>
                <strong>8.50 <small>/ 10 CGPA</small></strong>
              </div>
            </div>
          </section>

          <section className="section-wrap projects-section" id="projects">
            <div className="section-kicker reveal"><span>03 / SELECTED WORK</span><span className="kicker-line"></span><span>BUILT WITH INTENTION</span></div>
            <div className="projects-heading reveal"><h2>A few things<br />I’ve <span className="highlight">worked on.</span></h2><p>Enterprise workflows, practical products, and a little machine learning. Here’s a snapshot of my work.</p></div>
            <div className="project-filters reveal" role="group" aria-label="Filter projects">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="project-list">
              {visibleProjects.map((project) => (
                <article className={`project-card ${project.tone} reveal`} key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-content">
                    <div className="project-topline"><span>{project.type}</span><span>{project.company}</span></div>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-contributions">{project.contributions.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-decoration"><div className="decoration-inner">{project.number === '04' ? <BrainCircuit /> : project.number === '03' ? <Database /> : project.number === '02' ? <Layers3 /> : <Sparkles />}<span>{project.number === '04' ? 'ML / AI' : 'API / SYSTEMS'}</span></div><ArrowUpRight size={19} /></div>
                </article>
              ))}
            </div>
            <p className="project-note"><span>*</span> Some projects are internal company applications, so source code and live demos aren’t publicly linked.</p>
          </section>

          <section className="skills-section" id="skills">
            <div className="section-wrap">
              <div className="section-kicker reveal"><span>04 / TOOLKIT</span><span className="kicker-line"></span><span>MY EVERYDAY BUILDING BLOCKS</span></div>
              <div className="skills-intro reveal"><h2>The right tool<br /><span className="muted-heading">for the job.</span></h2><p>I focus on writing maintainable code, designing clear API boundaries, and continuously learning better ways to build.</p></div>
              <div className="skill-grid">
                {skillGroups.map(({ icon: Icon, title, skills }, i) => <article className="skill-card reveal" key={title}><div className="skill-card-head"><span className="skill-index">0{i + 1}</span><Icon size={21} /></div><h3>{title}</h3><div className="skill-pills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
              </div>
            </div>
          </section>

          <section className="section-wrap credentials-section">
            <div className="section-kicker reveal"><span>05 / LEARNING</span><span className="kicker-line"></span><span>ALWAYS IN PROGRESS</span></div>
            <div className="credentials-grid">
              <div className="reveal"><h2>Curiosity is<br /><span className="muted-heading">part of the job.</span></h2><p>Certifications that reflect my continued learning across software fundamentals, data, and AI.</p></div>
              <div className="cert-list reveal">{certifications.map((cert, i) => <div className="cert-item" key={cert}><span>{String(i + 1).padStart(2, '0')}</span><p>{cert}</p><ArrowUpRight size={15} /></div>)}</div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="section-wrap contact-wrap">
              <div className="section-kicker reveal"><span>06 / CONTACT</span><span className="kicker-line"></span><span>HAVE A GOOD ONE IN MIND?</span></div>
              <div className="contact-content reveal"><p className="eyebrow"><span className="status-dot"></span> OPEN TO MEANINGFUL CONVERSATIONS</p><h2>Let’s build<br />something <span className="highlight">useful.</span></h2><p className="contact-subtitle">Have a role, a project, or an interesting problem? I’d be happy to connect.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22} /></a><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? <Check size={17} /> : <Copy size={16} />}{copied ? 'Email copied' : 'Copy email'}</button><a className="button button-quiet" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Mail size={16} /> Contact me</a></div></div>
              <div className="contact-bottom"><span>HYDERABAD, INDIA</span><span>MADE WITH CARE <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div>
            </div>
          </section>
        </main>
        <footer className="footer"><span>© {new Date().getFullYear()} Mani Vardhan Reddy</span><span>DESIGNED TO KEEP EVOLVING.</span><a href="#home">M<span>.</span></a></footer>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);