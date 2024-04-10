const projects = [
  {
    title: "Pixer",
    githubLink: "https://github.com/zakirovn/Pixer",
    vercelLink: "https://pixer-flax.vercel.app/",
  },
  {
    title: "Castaway",
    githubLink: "https://github.com/zakirovn/Castaway",
    vercelLink: "https://castaway-topaz.vercel.app/",
  },
  {
    title: "Service",
    githubLink: "https://github.com/zakirovn/Castaway",
    vercelLink: "https://castaway-topaz.vercel.app/",
  },
  {
    title: "Perfume",
    githubLink: "https://github.com/zakirovn/perfume",
    vercelLink: "https://perfume-hazel.vercel.app/",
  },
  {
    title: "Calculator",
    githubLink: "https://github.com/zakirovn/tip-calculator",
    vercelLink: "https://tip-calculator-lilac-nine.vercel.app/",
  },
  {
    title: "Background-site",
    githubLink: "https://github.com/zakirovn/background-site",
    vercelLink: "https://background-site.vercel.app/",
  },
  {
    title: "animation snake",
    githubLink: "https://github.com/zakirovn/animation",
    vercelLink: "https://animation-wheat-two.vercel.app/",
  },
  {
    title: "Quick animation",
    githubLink: "https://github.com/zakirovn/anime-quick",
    vercelLink: "https://animation-fdk2.vercel.app/",
  },
  {
    title: "Crowded",
    githubLink: "https://github.com/zakirovn/crovedfounding.git",
    vercelLink: "https://10-dars-lemon.vercel.app/",
  },
  {
    title: "Contacts",
    githubLink: "https://github.com/zakirovn/Contacts",
    vercelLink: "https://contacts-taupe.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
