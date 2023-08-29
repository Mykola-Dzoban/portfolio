const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-link");
const body = document.body;
const proj_wrapper = document.getElementById("proj-wrapper");

const projects = [
  {
    title: "Random quote",
    stack: "HTML + CSS + JS + API",
    description:
      'This website is a platform for displaying random quotes and their authors. The user can click the "New quote" button to get a new quote. All content and dynamic actions on the page are controlled by JavaScript, which is integrated through a script file.',
    githubLink: "https://github.com/Mykola-Dzoban/random-quote",
    pageLink: "https://mykola-dzoban.github.io/random-quote/",
  },
  {
    title: "Timer",
    stack: "React + CSS",
    description:
      'This website is a timer that allows users to set a specific time to keep track of hours, minutes and seconds. The user can set the time by clicking the "Set time" button and reset the timer to zero by clicking the "Reset time" button. The site uses the React library and component state to manage the time and its display.',
    githubLink: "https://github.com/Mykola-Dzoban/timer",
    pageLink: "https://mykola-dzoban.github.io/timer/",
  },
  {
    title: "Twitterskyi",
    stack: "React + Redux + CSS",
    description:
      "This website is a platform for displaying and creating posts. It uses the React library along with Redux to manage the state of the application. The site has a home page with a list of posts and a page for creating new posts, which can be accessed using the navigation bar.",
    githubLink: "https://github.com/Mykola-Dzoban/react21",
    pageLink: "https://mykola-dzoban.github.io/react21/",
  },
  {
    title: "Sign in/up",
    stack: "React + Styled components",
    description:
      "This website is a platform for user authentication and registration. Using the SignIn and SignUp components, users can log in or register their account. The site also uses routing with the React Router library to navigate between authentication and registration pages.",
    githubLink: "https://github.com/Mykola-Dzoban/react20",
    pageLink: "https://mykola-dzoban.github.io/react20/",
  },
  {
    title: "Backroads",
    stack: "React",
    description:
      'This website is a travel and adventure resource. It provides information about various tours, including photos, dates, descriptions and prices. In addition, the site contains the "About Us", "Services" and "Contacts" sections to help users learn more about the company and its offerings.',
    githubLink: "https://github.com/Mykola-Dzoban/backroads-app",
    pageLink: "https://backroadscom.netlify.app/",
  },
  {
    title: "Virtual Reality",
    stack: "HTML + CSS + JS",
    description:
      "This website presents a company that specialises in the production of virtual reality solutions and business consulting. The site offers information on the services provided by the company, including order management, social assistant, crypto platform, and others. In addition, it contains information about the company's experience and the opportunity to join them.",
    githubLink:
      "https://github.com/Mykola-Dzoban/sites/tree/main/virtual-reality-business-solutions",
    pageLink:
      "https://mykola-dzoban.github.io/sites/virtual-reality-business-solutions/",
  },
  {
    title: "PORTEN",
    stack: "HTML + CSS + JS",
    description:
      "This website represents a store with a wide selection of watches located in Ivano-Frankivsk and other cities of Ukraine. The site displays various collections of watches, including new arrivals and the 2018 collection, and provides useful information about the watches and their history. In addition, the site showcases the company's partners and provides opportunities for communication and shopping.",
    githubLink: "https://github.com/Mykola-Dzoban/LP-PORTEN",
    pageLink: "https://mykola-dzoban.github.io/LP-PORTEN/",
  },
];

const makeProjects = (arr) => {
  arr.map((item) => {
    const { title, stack, description, githubLink, pageLink } = item;
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `<div class="project-text">
                <h3>${title}</h3>
                <p class="tech-stack">${stack}</p>
                <p class="description">${description}</p>
              </div>
              <div class="project-links">
                <a target="_blank" href=${pageLink}><img src="./img/website.svg" alt="Website"></a>
                <a target="_blank" href=${githubLink}><img src="./img/github.svg" alt="Github"></a>
              </div>`;
    proj_wrapper.appendChild(div);
  });
};
makeProjects(projects);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("noscroll");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");
  });
});
