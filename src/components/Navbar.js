const  logos = require("../assects/Sharingan.png")
const Navbar = () => {

    const handleClick = ()=>{
        window.open("Gerard_resume.pdf");  
    }

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
            
        </div>
        </div> 
     );
}
 
export default Navbar;