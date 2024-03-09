// const & variables
const navCont = document.getElementById("nav");
const cardDiv = document.querySelectorAll(".card");
const adDiv = document.querySelectorAll(".ad");
const clientsCont = document.getElementById("clients");
const footCont = document.getElementById("footer");
// nav buttons content
const navItems = ["about", "services", "projects", "content"];
// cards section
const cards = [
  {
    title: "Transform Your Brand",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
    learnMore: "Learn More",
  },
  {
    title: "Transform Your Brand",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
    learnMore: "Learn More",
  },
];
const ads = [
  {
    title: "Transform Your Brand",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
  },
  {
    title: "Transform Your Brand",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
  },
];
// comments
const comments = [
  {
    title: "ziad",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
    job: "electrical engineer",
  },
  {
    title: "ziad",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
    job: "electrical engineer",
  },
  {
    title: "ziad",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora nobis voluptates adipisci laborum.",
    job: "electrical engineer",
  },
];
// footer
const footer = ["about", "services", "projects"];
// create nav buttons
navItems.forEach((item) => {
  const button = document.createElement("div");
  button.textContent = item;
  button.className = "nav-btn";
  navCont.appendChild(button);
});
// create cards
cards.forEach((data, index) => {
  const cardCont = document.createElement("div");
  cardCont.className = "cardc";
  const title = document.createElement("h3");
  title.textContent = data.title;
  const content = document.createElement("p");
  content.textContent = data.content;
  const learnMore = document.createElement("h6");
  learnMore.textContent = data.learnMore;
  cardCont.appendChild(title);
  cardCont.appendChild(content);
  cardCont.appendChild(learnMore);
  cardDiv[index].appendChild(cardCont);
});
// create ad
ads.forEach((data, index) => {
  const adCont = document.createElement("div");
  adCont.className = "adc";
  const title = document.createElement("h3");
  title.textContent = data.title;
  const content = document.createElement("p");
  content.textContent = data.content;
  adCont.appendChild(title);
  adCont.appendChild(content);
  adDiv[index].appendChild(adCont);
});
// create comments
comments.forEach((data, index) => {
  const client = document.createElement("div");
  client.className = "clientc";
  const circle = document.createElement("div");
  circle.className = "circle";
  const title = document.createElement("h3");
  title.textContent = data.title;
  const job = document.createElement("h6");
  job.textContent = data.job;
  const content = document.createElement("p");
  content.textContent = data.content;
  client.appendChild(circle);
  client.appendChild(content);
  client.appendChild(title);
  client.appendChild(job);
  clientsCont.appendChild(client);
});
// create footer
footer.forEach((item) => {
  const button = document.createElement("div");
  button.textContent = item;
  button.className = "foot-btn";
  footCont.appendChild(button);
});
