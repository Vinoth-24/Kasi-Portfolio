/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kasi Vinoth S",
  title: "Hi Guys!, I'm Kasi!",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 having an experience of building ML and AI solutions highly focused on NLP-based Semantic Technology / Python / SQL / LangChain, Tensorflow, and some other cool NLP libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PtLDILcVFXr7DNJjODA2iUdYou16dYQe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vinoth-24",
  linkedin: "https://www.linkedin.com/in/Vinoth24/",
  gmail: "vino24995@gmail.com",
  //gitlab: "https://medium.com/@vino24995",
  facebook: "https://www.facebook.com/Vinoth24/",
  medium: "https://medium.com/@vino24995",
  stackoverflow: "https://stackoverflow.com/users/17642801/vinoth",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CREATIVE AND PASSIONATE DATA SCIENTIST EXPLORING THE BOUNDLESS FRONTIERS OF NLP TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Craft captivating visualizations and intuitive interfaces to unlock the true potential of your data in web and mobile applications."
    ),
    emoji("⚡ Delivering cutting-edge user experiences and leveraging the power of intelligent technologies"),
    emoji(
      "⚡ Seamlessly incorporate LLM (Language and Learning Models) related integrations, enhancing the capabilities of your AI-driven solutions."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-terminal"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-code-merge"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ExcelR Solutions",
      logo: require("./assets/images/excelrLogo.jpg"),
      subHeader: "Certification on DS using ML with R and Python",
      duration: "April 2021 - Jan 2022",
      desc: "Participated in building AI models, exploration to Computer Vision and NLP technologies",
      descBullets: [
        "Staistal models, Tableau, Big Data and other Data Science skills",
        "Neural networks architecture - ANN, CNN, RNN and Transformers"
      ]
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amityLogo.png"),
      subHeader: "Bachelor and Master in NanoTechnology",
      duration: "September 2013 - April 2019",
      desc: "Have done research on Top institutes in India(IIT Kanpur, Jamia Milia etc..). Took courses about Electronics Engineering, French, NanoComputing etc..",
      descBullets: ["Synthesize Nanomaterials like Core-shell FeSO4, TDDS, SuperCapacitors etc."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Engineer",
      company: "LeadSemantics",
      companylogo: require("./assets/images/leadsemanticsLogo.jpg"),
      date: "May 2022 – Present",
      desc: "Accomplished AI Engineer specialized in conducting research, developing algorithms, training models, and deploying solutions for business projects and clients, with expertise in Spacy and Hugging Face models.",
      descBullets: [
        "Research experitise in building AI based Information retrieval system in a Susitable Finance domain",
        "Managed team of 9 data scientists to deliver results that bring us close to state-of-art results."
      ]
    },
    {
      role: "User Analytics Intern",
      company: "Trell",
      companylogo: require("./assets/images/trellLogo.png"),
      date: "Aug 2021 – Jan 2022",
      desc: "Designed a Python-based video editing tool, orchestrated automation processes, and actively enhanced user retention through analysis, visualization, and multifaceted task automation."
    },
    {
      role: "Data Science Intern",
      company: "AI Variant",
      companylogo: require("./assets/images/aivariantLogo.png"),
      date: " Sept 2021 – Feb 2022",
      desc: "Adepted to leverage NLP for projects encompassing sentiment analysis, Q&A systems, and text similarity using word embeddings, with extensive expertise in transfer learning using pretrained models."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects that I have worked during my Data Science Journey",
  projects: [
    {
      image: require("./assets/images/bankprevLogo.jpg"),
      projectName: "Bankruptcy Prevention",
      projectDesc: "Constructed ANN to detect bankruptcy of a company with KPI Data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bankruptcy-prevention.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/esgclaimsLogo.jpg"),
      projectName: "Environmental Claims Bert model",
      projectDesc: "The environmental-claims model is fine-tuned using the EnvironmentalClaims dataset on Bert base-uncased model. This model is fine-tuned with the help of Happy Transformers on the Bert base-uncased model. The EnvironmentalClaims dataset is annotated by finance and sustainable finance students and authors of Zurich University. This model is expected to predict whether the input sequence is related to real-time environmental claims or not.",
      footerLink: [
        {
          name: "Visit model",
          url: "https://huggingface.co/Vinoth24/environmental_claims"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Machine Learning using R and Python",
      subtitle:
        "Powered by IBM Developer Skills Network",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM certified",
      footerLink: [
        {
          name: "Data Science",
          url: "https://excelr.skillsnetwork.site/certificates/b162ded1-b19e-42bf-90b5-3fbfb7cfbb8d"
        },
        {
          name: "Text Analytics 101",
          url: "https://courses.excelr.skillsnetwork.site/certificates/741de0756f45426d93dc6ee0193d7e72"
        }
      ]
    },
    //{
    //  title: "Google Assistant Action",
    //  subtitle:
    //    "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //  image: require("./assets/images/googleAssistantLogo.webp"),
    //  imageAlt: "Google Assistant Action Logo",
    //  footerLink: [
    //    {
    //      name: "View Google Assistant Action",
    //      url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //    }
    //  ]
    //},
	//
    //{
    //  title: "PWA Web App Developer",
    //  subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //  image: require("./assets/images/pwaLogo.webp"),
    //  imageAlt: "PWA Logo",
    //  footerLink: [
    //    {name: "Certification", url: ""},
    //    {
    //      name: "Final Project",
    //      url: "https://pakistan-olx-1.firebaseapp.com/"
    //    }
    //  ]
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool models and tackling real-time problems, I love to write and teach others what I have learnt. But I am still at the begining of my Blogging career",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@vino24995/introduction-to-data-science-and-understanding-linear-regression-in-a-simpler-way-f19b798d90e1",
      title: "Introduction to Data Science and Understanding Linear Regression",
      description:
        "Get started with Data Science by diving into Linear Regression."
    },
    {
      url: "https://medium.com/@vino24995/deployment-of-your-model-on-heroku-web-using-streamlit-library-e76f9c73ed86",
      title: "Deployment of your model on Heroku web using Streamlit library",
      description:
        "Learn how to freely deploy your ML models on Heroku Platform in the simplest way."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9953253902",
  email_address: "vino24995@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Vino_Kid", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
