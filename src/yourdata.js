// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import MongoDB_Logo from "./images/MongoDB_Logo.svg"
import redux from "./images/redux.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import ld from "./images/ld.png"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "pratham",
  headerTagline: [
    //Line 1 For Header
    "Full-Stack Web Developer",
  
  ],
  //   Header Paragraph
  headerParagraph:
    "I design and code beautifully simple things, and I love what I do.",

  //Contact Email
  contactEmail: "spratham72@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "CLone of Ubuy", //Project Title - Add Your Project Title Here
      para:
        "Ubuy is one of the best online shopping stores to offer a collection of Handbags, Dresses, Cosmetics, Jewellery, Jeans, T-shirts, and Shoes.", // Add Your Service Type Here      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/new-home/images/phone.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Spratham72/ubuyClone.git",
    },
    {
      title: "Clone of Smallcases", //Project Title - Add Your Project Title Here
      para:
        "smallcases are modern investment products that help you build a low-cost, long-term & diversified portfolio easily. ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://assets.smallcase.com/smallcase/assets/images/brand.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://smallcaseproject.herokuapp.com/home",
    }    
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is Pratham Sharma. I’m a graduate of 2021 from HNBGU at Dehradun, Uttarakhand with a bachelor's degree in Science. I have learned full-stack web development from Masai School in 2021. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.",
  aboutParaTwo:
    "Innovative and efficient solution seeker and a passionate web developer. Aiming to achieve a challenging and successful career as a full-stack developer to make a significant contribution with innovative ideas, knowledge and skills with the objective of growth and development of the organization.",
  
  aboutImage:
    `https://i.imgur.com/xBz8jAZ.jpg?1`,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "ReactJs",
    },
    {
      img: MongoDB_Logo,
      para:
        "MongoDB",
    },
    {
      img: redux,
      para:
        "Redux",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Spratham72" },
   
    
    {
      img: ld,
      url: "https://www.linkedin.com/in/pratham-sharma-4641b0207/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
