const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// header selectors
const header = document.querySelector("header")
const logoSpot = header.querySelector("#logo-img");
logoSpot.src = siteContent["images"]["logo-img"];

const navList = header.querySelectorAll("nav a");
for(let i = 0; i < navList.length; i++){
  navList[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navList[i].classList.add("italic");
} 

// cta selectors
const cta = document.querySelector(".cta")
const ctaTitle = cta.querySelector("h1");
ctaTitle.textContent = siteContent["cta"]["h1"];
const ctaButton = cta.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImg = cta.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"]

// main-content selector
const main = document.querySelector(".main-content");
// top-content
const div1 = main.querySelector(".text-content:nth-of-type(1)");
const div2 = main.querySelector(".text-content:nth-of-type(2)");
div1.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
div1.querySelector("p").textContent = siteContent["main-content"]["features-content"];
div2.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
div2.querySelector("p").textContent = siteContent["main-content"]["about-content"];
// middle-img 
const middleImg = main.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];
// bottom-content
const bottom = main.querySelector(".bottom-content")
const div3 = bottom.querySelector(".text-content:nth-of-type(1)");
const div4 = bottom.querySelector(".text-content:nth-of-type(2)");
const div5 = bottom.querySelector(".text-content:nth-of-type(3)");
div3.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
div3.querySelector("p").textContent = siteContent["main-content"]["services-content"];
div4.querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
div4.querySelector("p").textContent = siteContent["main-content"]["product-content"];
div5.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
div5.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

// contact selector
const contacts = document.querySelector(".contact");
contacts.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contacts.querySelector("p:nth-of-type(1)").textContent = siteContent["contact"]["address"];
contacts.querySelector("p:nth-of-type(2)").textContent = siteContent["contact"]["phone"];
contacts.querySelector("p:nth-of-type(3)").textContent = siteContent["contact"]["email"];

// footer selectors
const footer = document.querySelector("footer");
footer.querySelector("a").classList.add('bold');
const copyright = document.createElement("a");
copyright.textContent = siteContent["footer"]["copyright"];
footer.appendChild(copyright);
