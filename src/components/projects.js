import pic1 from "../assects/project1.png";
import pic2 from "../assects/starlit-centaur-cc01a3.netlify.app_ (1).png";
import pic3 from "../assects/vinnila_todo.png";
import pic4 from "../assects/silver-crostata-beb6ca.netlify.app_ (1).png";
import pic6 from "../assects/iridescent-custard-842c9a.netlify.app_.png";

import { useState } from "react";
const Projects = () => {
  
  const [count,setcount] = useState(6)
  const handleclick = ()=>{
    setcount(count+3)
    console.log(count);
  }
  const handleless = ()=>{
    setcount(6)
  }

  const data = [
    {
      id: 1,
      img: pic1,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 2,
      img: pic2,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 3,
      img: pic3,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 4,
      img: pic4,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 5,
      img: pic6,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 6,
      img: pic6,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 7,
      img: pic1,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 8,
      img: pic2,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 9,
      img: pic3,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 10,
      img: pic4,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 11,
      img: pic6,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 12,
      img: pic6,
      name: "Workout Buddy App",
      desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
      github: "https://github.com/gerard0lucas/workout_buddy_frontend",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
  ];
  
let max = count === data.length;
  

  return (
    <div className="projects">
      <div className="ph">
        <h1>My Projects</h1>
        <p className="pd">Some Things I’ve Built</p>
      </div>
      <div className="project_cards">
        {/* ............................................................................ */}
        {data.splice(0,count).map((d) => (
          <div className="pcard" key={d.id}>
            <div className="pimage">
              <img src={d.img} alt="" />
            </div>
            <div className="pdetails">
              <div className="ptitle">
                <h2>{d.name}</h2>
                <p>{d.desc}</p>
              </div>
              <div className="plinks">
                <a href={d.github} className="github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={d.link} className="elink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!max && <div className="show_btn"><button onClick={handleclick}>Show More</button></div>}
      {max && <div className="show_btn"><button onClick={handleless}>Show Less</button></div>}
    </div>
  );
};

export default Projects;
