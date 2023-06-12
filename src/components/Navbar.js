const logos = require("../assects/Sharingan.png");
const Navbar = () => {
  const handleClick = () => {
    window.open("Gerard_resume.pdf");
  };

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img className="icon" src={logos} alt="" />
        </div>
        <div className="lists">
          <div className="list">One</div>
          <div className="list">two</div>
          <div className="list">three</div>
          <div className="list">four</div>
          <button onClick={handleClick}>Resume</button>
        </div>
        <div className="sm-lists">
          <div>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <i className="fas fa-bars" id="btn" />
              <i className="fas fa-times" id="cancel" />
            </label>
            <div className="sidebar">
              <header>My App</header>
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-qrcode" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-link" />
                    Shortcuts
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-stream" />
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-calendar-week" />
                    Events
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-question-circle" />
                    About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-sliders-h" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-envelope" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <section />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
