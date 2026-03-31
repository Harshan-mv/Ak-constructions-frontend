import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card h-100">
      <img src={project.imageUrl} alt={project.title} className="img-fluid" />
      <div className="project-overlay">
        <h4 className="mb-2">{project.title}</h4>
        <p className="mb-4 text-light opacity-75">{project.description}</p>
        <Link to={`/projects`} className="text-gold text-decoration-none text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>
          View Details <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
