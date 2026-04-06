import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Research <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Federated Learning Researcher</h4>
                <h5>Ramaiah Institute of Technology</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              Developed a Federated Learning system for on-device personalization on mobile platforms.
              Applied distributed ML techniques (FedProx) for efficient multi-client training under heterogeneous conditions.
              Analyzed performance based on training efficiency, latency, and accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
