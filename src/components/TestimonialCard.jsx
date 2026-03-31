const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="d-flex align-items-center mb-4">
        <div className="text-gold me-3">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21L16.41 14.909C16.634 14.331 16.746 13.722 16.746 13.091V9.273H11V15H14.156L12.564 19.382L14.017 21ZM5.017 21L7.41 14.909C7.634 14.331 7.746 13.722 7.746 13.091V9.273H2V15H5.156L3.564 19.382L5.017 21Z" />
          </svg>
        </div>
        <div>
          <h5 className="mb-0">{testimonial.name}</h5>
          <span className="text-muted small">{testimonial.role}</span>
        </div>
      </div>
      <p className="testimonial-text">"{testimonial.text}"</p>
    </div>
  );
};

export default TestimonialCard;
