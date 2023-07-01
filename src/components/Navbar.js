import {Link}from 'react-scroll';
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
          <div className="list"><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></div>
          <div className="list"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></div>
          <div className="list"><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></div>
          <div className="list"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></div>
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
              <header>Gerard Lucas</header>
              <ul>
               
                <li>
                  <Link to="hero" spy={true} smooth={true} offset={50} duration={500} >
                    <i class="fa-solid fa-house-user"/>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <i className="far fa-question-circle" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                    <i className="fas fa-sliders-h" />
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                    <i className="far fa-envelope" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleClick}>
                  <i class="fa-solid fa-file" />
                  Resume
                  </Link>
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
