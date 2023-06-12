
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
      img: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/646bcb29e8fc6d2d60d95046/screenshot_2023-05-22-20-06-21-0000.png',
      name: "My Resume ",
      desc: "This is my Resume Built Using only HTML and CSS.",
      github: "https://github.com/gerard0lucas/my-resume-using-Html",
      link: "https://shiny-madeleine-291cc9.netlify.app",
    },
    {
      id: 2,
      img: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6390db2581dad40009c437e2/screenshot_2022-12-07-18-28-02-0000.png",
      name: "Rode clone",
      desc: "This is Rode Homepage clone Built Using only HTML and TailWind CSS.Fully Responsive in all screen sizes",
      github: "https://github.com/gerard0lucas/Rode-clone",
      link: "https://iridescent-custard-842c9a.netlify.app/",
    },
    {
      id: 3,
      img: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/632f4d855ff1820009974b17/screenshot_2022-09-24-18-33-52-0000.png',
      name: "Shopify clone",
      desc: "This is Shopify Homepage clone Built Using only HTML and TailWind CSS.Fully Responsive in all screen sizes",
      github: "https://github.com/gerard0lucas/shopify-clone",
      link: "https://silver-crostata-beb6ca.netlify.app",
    },
    {
      id: 4,
      img: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6331ec79af800e0009b23457/screenshot_2022-09-26-18-16-39-0000.png',
      name: "Paytm Clone",
      desc: "This is Paytm Homepage clone Built Using only HTML and TailWind CSS.Fully Responsive in all screen sizes",
      github: "https://github.com/gerard0lucas/paytm-clone",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    {
      id: 5,
      img: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/645a829a59fd3d0af23fb883/screenshot_2023-05-09-17-28-10-0000.png',
      name: "Todo App with Venila.js",
      desc: "This is a simple todo app using only HTML CSS and JAVASCRIPT using DOM manipulation.",
      github: "https://github.com/gerard0lucas/todo-app-eith-vennila.js",
      link: "https://prismatic-scone-3eeb9b.netlify.app",
    },
    {
      id: 6,
      img: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/646d360ba245200008816954/screenshot_2023-05-23-21-54-30-0000.png',
      name: "Blog app using API with Venila.js",
      desc: "This is a simple blog app using API to fetch data with simple javascript and DOM manipulation",
      github: "https://effortless-cocada-1fba65.netlify.app",
      link: "https://sparkling-squirrel-a464b8.netlify.app",
    },
    // {
    //   id: 7,
    //   img: pic1,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
    // {
    //   id: 8,
    //   img: pic2,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
    // {
    //   id: 9,
    //   img: pic3,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
    // {
    //   id: 10,
    //   img: pic4,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
    // {
    //   id: 11,
    //   img: pic6,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
    // {
    //   id: 12,
    //   img: pic6,
    //   name: "Workout Buddy App",
    //   desc: "Built Using node.js, Express.js, MongoDB, React.js and ReactContext for state management",
    //   github: "https://github.com/gerard0lucas/workout_buddy_frontend",
    //   link: "https://sparkling-squirrel-a464b8.netlify.app",
    // },
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
