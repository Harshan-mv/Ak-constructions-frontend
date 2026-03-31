const ProjectCardExpandable = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="card border-0 shadow-sm overflow-hidden h-100 transition-all hover-shadow-lg" style={{ transition: 'all 0.3s ease' }}>
      <div 
        className="position-relative cursor-pointer overflow-hidden" 
        onClick={onToggle}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-100" 
          style={{ height: '300px', objectFit: 'cover', transition: 'transform 0.5s', transform: isExpanded ? 'scale(1.05)' : 'scale(1)' }} 
        />
        <div className="position-absolute bottom-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
          <h4 className="text-white mb-0">{project.title}</h4>
          {!isExpanded && (
            <span className="text-gold small text-uppercase" style={{ letterSpacing: '1px' }}>
              View Details <i className="fas fa-chevron-down ms-1"></i>
            </span>
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="card-body bg-white border-top border-light">
          <p className="text-muted mb-4">{project.description}</p>
          
          <div className="row g-3">
            <div className="col-6">
              <small className="text-uppercase text-muted d-block" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Location</small>
              <div className="fw-medium text-dark">{project.place || 'N/A'}</div>
            </div>
            <div className="col-6">
              <small className="text-uppercase text-muted d-block" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Client</small>
              <div className="fw-medium text-dark">{project.ownerName || 'Confidential'}</div>
            </div>
            
            {project.status === 'completed' && project.timeline && (
              <div className="col-12 mt-3">
                <small className="text-uppercase text-muted d-block" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>Timeline</small>
                <div className="fw-medium text-dark">{project.timeline}</div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-4">
            <button className="btn btn-sm btn-outline-secondary w-100 border-0" onClick={onToggle}>
              Close <i className="fas fa-chevron-up ms-1"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCardExpandable;
