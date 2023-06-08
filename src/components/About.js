import pic from "../assects/mypic.jpeg"
const aboutme = () => {
  return (
    <div className="about">
      {/* .............................Details ............................... */}
      <div className="about_me">
        <h1>About Me</h1>
        <p>
          A self-motivated full stack web developer with 1 year of experience in
          web development using web Technologies- Node JS, Express JS, Mongo DB,
          React JS, JavaScript, HTML , CSS and also has ability in writing clean
          and efficient code.
        </p>
        <br />
        <p>
          Hands on experience in writing well-abstracted, reusable, highly
          performant code for UI components using React Js , React-Hooks, React-
          context.
        </p>
        <br />
        <p>
          Have good understanding to the requirements on the field and map them
          effectively to sustainable solutions and capability to explore, learn
          and understand new technology
        </p>
        <br />
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="tech_list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Express JS</li>
            <li>Mongo DB</li>
        </div>
      </div>
      {/* .......................photo............................. */}
      <div className="pic">
        <div className="pic_frame">
            <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default aboutme;
