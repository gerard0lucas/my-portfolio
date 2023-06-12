const Home = () => {
  return (
    <div className="main">
      <div className="Home">
        <div>
          <p className="my">Hi, my name is</p>
        </div>
        <div className="name">
          <h1>Gerard Lucas</h1>
          <h1>I build things for the web.</h1>
        </div>
        <div className="paragraph">
          <p>
            I’m a self-motivated full stack web developer specializing in building Web applications 
            . Currently, I’m focused
            on building an fully Functional Ecommerse Website with MERN stack.
          </p>
        </div>
        <div className="btn">
          <button>About me</button>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
      <div className="homelinks">
        <div className="vl"></div>
        {/* ................ Github SVG........................ */}
        <a href="https://github.com/gerard0lucas">
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
        {/* ................ Netlifi SVG........................ */}
        <a href="https://app.netlify.com/teams/gerard0lucas/sites">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
                <title>Netlify</title>
              <path d="M22.579 11.36c0.151 0.077 0.291 0.181 0.405 0.307l3.131-1.396-2.921-2.896-0.657 3.943zM16.079 8.729c0.156 0.229 0.249 0.489 0.281 0.765l4.661 1.975c0.14-0.109 0.301-0.188 0.473-0.235l0.765-4.735-2.839-2.979-3.343 5.135zM31.989 16.047l-4.995-4.995-3.401 1.391 8.355 3.552c0 0 0.073 0.052 0.041 0.052zM31.156 16.86l-8.020-3.428c-0.224 0.297-0.563 0.495-0.933 0.541l-0.859 5.277c0.255 0.26 0.401 0.609 0.401 0.973l4.843 1.016 4.443-4.412v-0.083zM20.531 12.333l-4.353-1.855c-0.308 0.469-0.833 0.745-1.391 0.724h-0.265l-3.609 5.568 9.635-4.172v0.011c-0.005-0.073-0.005-0.145 0-0.224 0.005-0.016 0-0.036-0.016-0.052zM25.823 22.079l-4.26-0.881c-0.161 0.209-0.369 0.365-0.615 0.459l-1.016 6.297 5.917-5.865c0 0-0.011 0.032-0.027 0.032zM19.864 21.645c-0.411-0.167-0.713-0.52-0.823-0.948l-7.932-1.629-0.115 0.183 7.199 10.411 0.432-0.427 1.224-7.563c0 0 0.041 0.031 0.015 0.016zM11.276 18.109l7.839 1.615c0.229-0.401 0.64-0.661 1.099-0.697l0.849-5.188-0.183-0.156-9.744 4.177c0.052 0.077 0.099 0.161 0.14 0.249zM7.989 19.416l-0.167-0.165-3.38 1.389 1.64 1.631 1.865-2.896zM10.219 19.948c-0.235 0.109-0.495 0.161-0.749 0.167-0.209 0-0.407-0.032-0.605-0.099l-2.057 2.995 9.021 8.937 1.588-1.579zM8.953 16.427c0.135-0.015 0.276-0.015 0.416 0 0.152-0.020 0.308-0.020 0.459 0l3.645-5.667c-0.285-0.296-0.443-0.692-0.443-1.099-0.015-0.12-0.015-0.245 0-0.364l-4.427-2.047-3.563 3.468zM9.355 6.557l4.317 1.839c0.312-0.26 0.708-0.396 1.115-0.38 0.177 0.005 0.353 0.031 0.525 0.083l3.371-5.26-2.787-2.787-6.541 6.421c0 0-0.011 0.068 0 0.084zM7.74 17.443c0.088-0.161 0.197-0.312 0.323-0.448l-3.693-5.511-4.369 4.245zM7.391 18.375l-6.683-1.396 2.937 2.98 3.704-1.573z" />
            </svg>
        </a>
        {/* ................ Linkedin SVG........................ */}
        <a href="https://www.linkedin.com/in/gerard-lucas-511a61245">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-linkedin"
          >
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        {/* ................ gmail SVG........................ */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gerardlucasy2j@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 80 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
                <title>Gmail</title>
              <path d="M 11.5 14 C 7.925781 14 5.007813 16.914063 5 20.484375 C 5 20.488281 5 20.488281 5 20.492188 C 5 20.496094 5 20.496094 5 20.5 L 5 61.5 C 5 65.078125 7.921875 68 11.5 68 L 68.5 68 C 72.078125 68 75 65.078125 75 61.5 L 75 20.5 C 75 20.496094 75 20.496094 75 20.492188 C 75 20.488281 75 20.488281 75 20.484375 C 74.992188 16.914063 72.074219 14 68.5 14 Z M 11.5 16 L 68.5 16 C 69.445313 16 70.320313 16.289063 71.042969 16.78125 L 70.894531 17.050781 L 71.269531 17.863281 L 72.144531 18.050781 L 72.25 18.003906 C 72.722656 18.71875 73 19.570313 73 20.496094 C 73 20.496094 73 20.496094 73 20.5 C 72.996094 22.132813 72.199219 23.65625 70.859375 24.589844 L 40 46.09375 L 9.140625 24.589844 C 7.800781 23.65625 7.003906 22.132813 7 20.5 C 7 20.496094 7 20.496094 7 20.496094 C 7 19.535156 7.304688 18.652344 7.8125 17.921875 L 8.382813 18.003906 L 9.015625 17.375 L 8.933594 16.800781 C 9.660156 16.300781 10.542969 16 11.5 16 Z M 11.03125 18.394531 L 10.398438 19.03125 L 10.527344 19.917969 L 10.777344 20.164063 L 10.859375 20.222656 L 11.746094 20.347656 L 12.378906 19.71875 L 12.25 18.828125 L 12 18.578125 L 11.921875 18.523438 Z M 68.359375 18.40625 L 68.042969 18.550781 L 67.957031 18.609375 L 67.53125 19.394531 L 67.90625 20.210938 L 68.78125 20.394531 L 69.101563 20.25 L 69.183594 20.191406 L 69.609375 19.40625 L 69.234375 18.59375 Z M 14.394531 20.738281 L 13.761719 21.375 L 13.890625 22.261719 L 14.140625 22.511719 L 14.21875 22.566406 L 15.109375 22.695313 L 15.742188 22.0625 L 15.613281 21.171875 L 15.363281 20.925781 L 15.28125 20.867188 Z M 65 20.75 L 64.675781 20.894531 L 64.59375 20.953125 L 64.167969 21.738281 L 64.542969 22.554688 L 65.417969 22.742188 L 65.738281 22.59375 L 65.820313 22.535156 L 66.25 21.75 L 65.875 20.9375 Z M 17.761719 23.082031 L 17.125 23.71875 L 17.253906 24.605469 L 17.503906 24.855469 L 17.585938 24.910156 L 18.472656 25.039063 L 19.105469 24.40625 L 18.980469 23.519531 L 18.730469 23.269531 L 18.644531 23.214844 Z M 61.632813 23.09375 L 61.3125 23.238281 L 61.230469 23.296875 L 60.800781 24.082031 L 61.175781 24.898438 L 62.054688 25.085938 L 62.375 24.9375 L 62.457031 24.878906 L 62.886719 24.09375 L 62.511719 23.28125 Z M 7 25.363281 C 7.304688 25.679688 7.632813 25.972656 8 26.230469 L 11.976563 29 C 11.433594 29.015625 11 29.457031 11 30 C 11 30.550781 11.449219 31 12 31 C 12.550781 31 13 30.550781 13 30 C 13 29.890625 12.980469 29.78125 12.945313 29.675781 L 40 48.53125 L 67.054688 29.675781 C 67.019531 29.78125 67 29.890625 67 30 C 67 30.550781 67.449219 31 68 31 C 68.550781 31 69 30.550781 69 30 C 69 29.457031 68.566406 29.011719 68.023438 29 L 72 26.230469 C 72.367188 25.972656 72.695313 25.679688 73 25.363281 L 73 61.5 C 73 63.828125 71.253906 65.699219 69 65.949219 C 68.972656 65.417969 68.53125 65 68 65 C 67.449219 65 67 65.449219 67 66 L 13 66 C 13 65.449219 12.550781 65 12 65 C 11.46875 65 11.027344 65.417969 11 65.949219 C 8.746094 65.699219 7 63.828125 7 61.5 Z M 21.125 25.425781 L 20.488281 26.0625 L 20.617188 26.949219 L 20.867188 27.199219 L 20.949219 27.253906 L 21.835938 27.382813 L 22.46875 26.75 L 22.34375 25.863281 L 22.09375 25.613281 L 22.011719 25.558594 Z M 58.269531 25.4375 L 57.949219 25.582031 L 57.867188 25.640625 L 57.4375 26.429688 L 57.8125 27.242188 L 58.691406 27.429688 L 59.011719 27.28125 L 59.09375 27.222656 L 59.519531 26.4375 L 59.144531 25.625 Z M 24.488281 27.769531 L 23.855469 28.40625 L 23.984375 29.292969 L 24.230469 29.542969 L 24.3125 29.597656 L 25.199219 29.730469 L 25.832031 29.09375 L 25.703125 28.207031 L 25.457031 27.957031 L 25.375 27.902344 Z M 54.90625 27.78125 L 54.585938 27.925781 L 54.503906 27.984375 L 54.078125 28.773438 L 54.453125 29.589844 L 55.328125 29.773438 L 55.644531 29.625 L 55.730469 29.570313 L 56.15625 28.78125 L 55.78125 27.96875 Z M 27.851563 30.117188 L 27.21875 30.75 L 27.34375 31.636719 L 27.59375 31.886719 L 27.675781 31.941406 L 28.5625 32.074219 L 29.199219 31.4375 L 29.066406 30.550781 L 28.820313 30.300781 L 28.738281 30.246094 Z M 51.542969 30.125 L 51.222656 30.273438 L 51.140625 30.328125 L 50.714844 31.117188 L 51.089844 31.933594 L 51.964844 32.121094 L 52.28125 31.96875 L 52.363281 31.914063 L 52.792969 31.125 L 52.417969 30.3125 Z M 31.214844 32.460938 L 30.578125 33.09375 L 30.707031 33.980469 L 30.957031 34.230469 L 31.042969 34.285156 L 31.925781 34.417969 L 32.5625 33.78125 L 32.433594 32.894531 L 32.183594 32.644531 L 32.101563 32.589844 Z M 48.179688 32.46875 L 47.859375 32.617188 L 47.777344 32.671875 L 47.347656 33.460938 L 47.722656 34.277344 L 48.597656 34.464844 L 48.921875 34.3125 L 49 34.257813 L 49.429688 33.46875 L 49.054688 32.65625 Z M 12 33 C 11.449219 33 11 33.449219 11 34 C 11 34.550781 11.449219 35 12 35 C 12.550781 35 13 34.550781 13 34 C 13 33.449219 12.550781 33 12 33 Z M 68 33 C 67.449219 33 67 33.449219 67 34 C 67 34.550781 67.449219 35 68 35 C 68.550781 35 69 34.550781 69 34 C 69 33.449219 68.550781 33 68 33 Z M 34.578125 34.804688 L 33.945313 35.4375 L 34.074219 36.328125 L 34.324219 36.574219 L 34.40625 36.628906 L 35.292969 36.761719 L 35.921875 36.125 L 35.796875 35.238281 L 35.546875 34.988281 L 35.464844 34.933594 Z M 44.8125 34.8125 L 44.496094 34.960938 L 44.410156 35.019531 L 43.984375 35.808594 L 44.359375 36.621094 L 45.234375 36.808594 L 45.558594 36.660156 L 45.640625 36.601563 L 46.066406 35.8125 L 45.691406 35 Z M 12 37 C 11.449219 37 11 37.449219 11 38 C 11 38.550781 11.449219 39 12 39 C 12.550781 39 13 38.550781 13 38 C 13 37.449219 12.550781 37 12 37 Z M 68 37 C 67.449219 37 67 37.449219 67 38 C 67 38.550781 67.449219 39 68 39 C 68.550781 39 69 38.550781 69 38 C 69 37.449219 68.550781 37 68 37 Z M 37.941406 37.148438 L 37.308594 37.78125 L 37.4375 38.671875 L 37.6875 38.917969 L 37.765625 38.976563 L 38.65625 39.105469 L 39.289063 38.46875 L 39.160156 37.582031 L 38.910156 37.335938 L 38.828125 37.277344 Z M 41.453125 37.15625 L 41.128906 37.308594 L 41.046875 37.363281 L 40.621094 38.152344 L 40.996094 38.964844 L 41.875 39.152344 L 42.191406 39.003906 L 42.277344 38.949219 L 42.703125 38.160156 L 42.328125 37.34375 Z M 12 41 C 11.449219 41 11 41.449219 11 42 C 11 42.550781 11.449219 43 12 43 C 12.550781 43 13 42.550781 13 42 C 13 41.449219 12.550781 41 12 41 Z M 68 41 C 67.449219 41 67 41.449219 67 42 C 67 42.550781 67.449219 43 68 43 C 68.550781 43 69 42.550781 69 42 C 69 41.449219 68.550781 41 68 41 Z M 12 45 C 11.449219 45 11 45.449219 11 46 C 11 46.550781 11.449219 47 12 47 C 12.550781 47 13 46.550781 13 46 C 13 45.449219 12.550781 45 12 45 Z M 68 45 C 67.449219 45 67 45.449219 67 46 C 67 46.550781 67.449219 47 68 47 C 68.550781 47 69 46.550781 69 46 C 69 45.449219 68.550781 45 68 45 Z M 12 49 C 11.449219 49 11 49.449219 11 50 C 11 50.550781 11.449219 51 12 51 C 12.550781 51 13 50.550781 13 50 C 13 49.449219 12.550781 49 12 49 Z M 68 49 C 67.449219 49 67 49.449219 67 50 C 67 50.550781 67.449219 51 68 51 C 68.550781 51 69 50.550781 69 50 C 69 49.449219 68.550781 49 68 49 Z M 12 53 C 11.449219 53 11 53.449219 11 54 C 11 54.550781 11.449219 55 12 55 C 12.550781 55 13 54.550781 13 54 C 13 53.449219 12.550781 53 12 53 Z M 68 53 C 67.449219 53 67 53.449219 67 54 C 67 54.550781 67.449219 55 68 55 C 68.550781 55 69 54.550781 69 54 C 69 53.449219 68.550781 53 68 53 Z M 12 57 C 11.449219 57 11 57.449219 11 58 C 11 58.550781 11.449219 59 12 59 C 12.550781 59 13 58.550781 13 58 C 13 57.449219 12.550781 57 12 57 Z M 68 57 C 67.449219 57 67 57.449219 67 58 C 67 58.550781 67.449219 59 68 59 C 68.550781 59 69 58.550781 69 58 C 69 57.449219 68.550781 57 68 57 Z M 12 61 C 11.449219 61 11 61.449219 11 62 C 11 62.550781 11.449219 63 12 63 C 12.550781 63 13 62.550781 13 62 C 13 61.449219 12.550781 61 12 61 Z M 68 61 C 67.449219 61 67 61.449219 67 62 C 67 62.550781 67.449219 63 68 63 C 68.550781 63 69 62.550781 69 62 C 69 61.449219 68.550781 61 68 61 Z" />
            </svg>
          </a>
        
        {/* ................ Hashnode SVG........................ */}
        <a href="https://hashnode.com/@Gerard11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather Hashnode"
          >
            <title>Hashnode</title>
            <rect x="3" y="3"></rect>
            <path d="m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <div className="vl"></div>
      </div>
    </div>
  );
};

export default Home;
