import './projectCard.css';
import bgImg from '..///assets/images/projectCard-Background.jpg'
export default function ProjectCard({ details }) {
  return (
    <div className="project-card" style={{backgroundImage:`url${bgImg}`}}>
      <img
        src={details.image}
        alt="Project visual"
        className="project-image"
      />
      <h3>{details.name}</h3>
      <p>{details.description}</p>
      <p><strong>Technologies:</strong> {details.tech}</p>

      <a href={details.github} target="_blank" rel="noopener noreferrer">
        <img
          src="/github-logo.png"
          alt="GitHub"
          className="github-icon"
        />
        View on GitHub
      </a>
    </div>
  );
}
