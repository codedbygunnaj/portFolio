import './App.css';
import './App.css';
import Navbar from './components/navBar';
import ProjectCard from './components/projectCard.js';
import PortfolioCard from './components/portfolioCard';
import { TypeAnimation } from 'react-type-animation';
import bgImg from './assets/images/projectCard-Background.jpg';

const project1 = {
  name: "Stock Simulator",
  image: "/assets/images/stockSim.png",
  description: "Simulates real-time stock market trading with Alpha Vantage API.",
  tech: "React, C++, Node.js",
  github: "https://github.com/GunajChugh/stock-sim"
};
const project2 = {
  name: "Stock Simulator",
  image: "/assets/images/stockSim.png",
  description: "Simulates real-time stock market trading with Alpha Vantage API.",
  tech: "React, C++, Node.js",
  github: "https://github.com/GunajChugh/stock-sim"
};
const project3 = {
  name: "Stock Simulator",
  image: "/assets/images/stockSim.png",
  description: "Simulates real-time stock market trading with Alpha Vantage API.",
  tech: "React, C++, Node.js",
  github: "https://github.com/GunajChugh/stock-sim"
};


function App() {
  return (
    <div className="App" 
    // style={{
    //     backgroundImage: `url(${bgImg})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundAttachment: 'fixed',
    //     minHeight: '100vh'
    //   }}
      >
      <Navbar />
      <header className="hero-section">
        <h1>Hello Everyone, I'm <span className="highlight">Gunaj Chugh</span>!</h1>
         <h2 className="typed-text">
          I am a <TypeAnimation
            sequence={[
              'Web Developer', 2000,
              'ML Developer', 2000,
              'C++ Programmer', 2000,
              'DSA Enthusiast', 2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <h4>Appreciate you all for taking time to visit my Portfolio.</h4>
        <PortfolioCard />
      </header>

    <section className="about-preview">
        <h2>About Me</h2>
        <p>I'm a passionate developer focused on Web & SDE skills. I love building responsive, performance-driven web applications and solving real-world problems.</p>
      </section>

      <div className="cta-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>

      <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>React</li>
        <li>Node.js</li>
        <li>C++</li>
        <li>MySQL</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        <li>Data Structures & Algorithms</li>
      </ul>
    </section>

    <section className="education">
      <h2>Education</h2>
      <p><strong>B.Tech Computer Science</strong> – XYZ University, 2021–2025</p>
    </section>

    <section className="experience">
      <h2>Experience</h2>
      <p><strong>Technical Lead – CICE</strong><br />
        Leading student projects, event coordination, and mentoring peers in tech development.</p>
    </section>

    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:gunaj@example.com">gunaj@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/GunajChugh">github.com/GunajChugh</a></p>
    </section>

    <section className="certifications">
      <h2>Certifications & Achievements</h2>
      <ul>
        <li>SIH Finalist – Smart India Hackathon 2024</li>
        <li>Google Cloud Study Jam – Cloud Certified</li>
        <li>Ranked Top 5% on LeetCode</li>
      </ul>
    </section>

      <section className="projects-preview">
        <h2>Featured Projects</h2>
        <div className="project-cards-flex">
          <ProjectCard details={project1}/>
          <ProjectCard details={project2}/>
          <ProjectCard details={project3}/>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Gunaj Chugh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
