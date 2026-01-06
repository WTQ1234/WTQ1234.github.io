// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import React from "react";

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
  username: "Taiqi Wang",
  title: "Hi all, I'm Taiqi",
  subTitle: emoji(
    `        A passionate video game developer with 3 years of experience. 🎮
        Specializes in gameplay features programming, performance optimization 🛡️, and live-service bug fixing. ⚔️ 
        Strong team player who boosts productivity with plugins, tools, and clear documentation. 🎶
        My goal: Game programmer 🤖 & Technical Designer 🛠️`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  youtube: "https://www.youtube.com/@wtq3555",
  fab: "https://www.fab.com/sellers/Taiqi",
  artstation: "https://www.artstation.com/wtq3555",
  gmail: "wtq3555@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "How I Build Games & Tools",
  subTitle: "I am a Flexible Video Game Developer with Multi-Disciplinary Skills.",
  skills: [
    emoji(
      "⚡ Implement robust gameplay systems and diverse player-facing features."
    ),
    emoji(
      "⚡ Write clear, detailed feature documentation."
    ),
    emoji(
      "⚡ Build handy tools, plugins and GM commands to streamline development."
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkillRows: [
      // 第 1 行：引擎
      [
        {
          skillName: "Unreal Engine 5",
          iconUrl: "/logos/ue5.svg" // 对应 public/logos/ue5.png
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "fab fa-unity"
          // fontAwesomeClassname: "fab fa-unity"
        }
      ],

      [
        {
          skillName: "Git",
          fontAwesomeClassname: "fab fa-git-alt"
        },
        {
          skillName: "Svn",
          fontAwesomeClassname: "fab fa-git-alt"
        },
        {
          skillName: "Perforce",
          fontAwesomeClassname: "fab fa-git-alt"
        }
      ],

      // 第 3 行：2D / 其他
      [

        {
          skillName: "C++",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "Lua",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fas fa-code"
        },
      ],

            // 第 2 行：3D / 材质
      [
        {
          skillName: "Maya",
          iconUrl: "/logos/maya.png"
        },
        {
          skillName: "Substance Painter",
          iconUrl: "/logos/substance-painter.png"
        },
        {
          skillName: "Photoshop",
          iconUrl: "/logos/photoshop.png"
        },
        {
          skillName: "Figma",
          iconUrl: "/logos/Figma.svg"
        },
        {
          skillName: "CapCut",
          iconUrl: "/logos/CapCut.svg"
        },
      ],
    ],

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savannah College of Art and Design",
      logo: require("./assets/images/ScadLogo.png"),
      subHeader: "Master of Arts (M.A.) in Game Development",
      duration: "September 2024 - November 2025",
      desc: "Graduate program in Game Development with a focus on game art and system design.",
      descBullets: [
        "Relevant Coursework: Unreal Engine 5 (C++ & Blueprint), Game System Design, Game UI Design",
        "Relevant Coursework: 3D Modeling By Maya & Substance Painter",
      ]
    },
    {
      schoolName: "Dalian University of Technology",
      logo: require("./assets/images/DalianLigongLogo.png"),
      subHeader: "Bachelor of Engineering (B.Eng.) in Biomedical Engineering",
      duration: "September 2016 - July 2020",
      desc: "Medical instrument programming, electronic circuits, and software–hardware integration.",
      descBullets: [
        "Relevant Coursework: C++, MySQL, Linux",]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Gameplay Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Gameplay System Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Build Plugins and Tools",
      progressPercentage: "60%"
    },
    {
      Stack: "3D Modeling", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web Development", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer (Part-time, Hybrid)",
      company: "KF Flooring",
      companylogo: require("./assets/images/KFFlooringLogo.png"),
      date: "Apr 2024 - Jan 2025",
      desc: `KF Flooring Internal Web System`,
      descBullets: [
        "Built and maintained an internal web system for cabinet trading and shipping.",
        "Developed admin tools for order, inventory, and delivery management.",
      ],
      // ------- 详情配置 -------
      details: {
        projectName: "Internal Web System",
        overview: [
          "Built and maintained an internal web system for cabinet trading and shipping."
        ],
        responsibilities: [
          "Developed admin tools for order, inventory, and delivery management to support daily back-office operations."
        ],
        technologies: "JavaScript, PHP, HTML/CSS, MySQL, Excel (VBA), SVN",
        youtubeUrl: "", // 如果有视频，填完整链接，例如 "https://www.youtube.com/watch?v=XXXXXXXX"
        images: [
          // 可选：放几张截图路径（public 下）
          // "/images/experience/kf_oasis_1.jpg",
        ]
      }
    },
    {
      role: "Senior Game Development Engineer",
      company: "NetEase Games",
      companylogo: require("./assets/images/NeteaseLogo2.png"),
      date: "Jun 2023 - Oct 2023",
      desc: `"Powerdise" - 3D Mobile Party Game`,
      descBullets: [
        "Implemented gameplay systems and optimized device compatibility (UI & SDK).",
        "Maintained iOS/Android UE build pipelines (packaging, signing, release).",
      ],
      // ------- 详情配置 -------
      details: {
        projectName: `"Powerdise" - 3D Mobile Party Game`,
        overview: [
          `Built and maintained the Game Logic and device compatibility.`
        ],
        responsibilities: [
          "Implemented client- and server-side logic for core systems such as friends, chat, combat, buffs, player housing, hub cities, dungeons, and UI framework.",
          "Optimized performance, device compatibility adaptation (UI, SDK), and crash diagnosis and fixes across a wide range of mobile devices.",
          "Collaborated with SDK, QA, and Operations teams to integrate internal SDKs and voice services.",
          "Built and maintained Unreal Engine mobile build pipelines for iOS and Android, including packaging, signing, and release builds."
        ],
        technologies: "Unreal Engine 4, C++, Lua, SVN, iOS/Android build & release",
        youtubeUrl: "https://www.youtube.com/watch?v=reNmH-TyAUE", // 如果有视频，填完整链接，例如 "https://www.youtube.com/watch?v=XXXXXXXX"
        images: [
          // 可选：放几张截图路径（public 下）
          "/images/WorkExp3.png",
        ]
      }
    },
    {
      role: "Intermediate Game Development Engineer",
      company: "NetEase Games",
      companylogo: require("./assets/images/MineCraftLogo.png"),
      date: "Jun 2022 - Jun 2023",
      desc: `"Minecraft" - 3D Sandbox Game Mobile Chinese Version`,
      descBullets: [
        "Developed official mods and UGC features base on the Mod SDK.",
        `Extended the Python-based Mod SDK (inventory UI, logging, debugging tools).`,
      ],
      // ------- 详情配置 -------
      details: {
        projectName: `"Minecraft" - 3D Sandbox Game Mobile Chinese Version`,
        overview: [
          `Developed official mods and maintained mod SDK for mods developer`
        ],
        responsibilities: [
          "Developed official mods for the NetEase mobile version of Minecraft and supported other user-generated content (UGC) features.",
          "Contributed to the official Python-based Mod SDK, implementing systems such as the backpack interface, log storage, and UI debugging tools.",
          "Optimized performance, handled version maintenance, Git and packaging tasks, and fixed crashes across live builds.",
          <>
            View the Mod SDK website:{" "}
            <a href="https://mc.163.com/dev/apidocs.html" target="_blank" rel="noreferrer" >
               https://mc.163.com/dev/apidocs.html
            </a>
          </>,
        ],
        technologies: "C++, Python, Git, iOS/Android build & release",
        youtubeUrl: "https://youtu.be/5zfgWXZQZko", // 如果有视频，填完整链接，例如 "https://www.youtube.com/watch?v=XXXXXXXX"
        images: [
          // 可选：放几张截图路径（public 下）
          "/images/WorkExp2.png",
        ]
      }
    },
    {
      role: "Mobile Game Development Engineer",
      company: "Fancy Guo Games",
      companylogo: require("./assets/images/QingGuoLogo.gif"),
      date: "Jun 2020 - Apr 2022",
      desc: `"Dark Nemesis: Infinite Quest" - 3D MMO ARPG Mobile Game`,
      descBullets: [
        "Implemented client- and server-side gameplay systems.",
        "Added data tracking and GM tools, and optimized performance."
      ],
      // ------- 详情配置 -------
      details: {
        projectName: `"Dark Nemesis: Infinite Quest" - 3D MMO ARPG Mobile Game`,
        overview: [
          `Built and maintained the game logic, GM tools and device compatibility`
        ],
        responsibilities: [
          "Implemented client- and server-side gameplay systems including abilities, dungeons, quests, guilds, team play, AI, skills, buffs, and player guide.",
          "Implemented data tracking, adapted the game for different device models, added GM tools/commands, fixed live issues, and optimized performance.",
          "Worked closely with the engine team to define feature requirements, write and execute test cases, and debug engine-related issues.",
        ],
        technologies: "Lua, SVN, iOS/Android build & release",
        youtubeUrl: "https://youtu.be/AXPAR3cICJg", // 如果有视频，填完整链接，例如 "https://www.youtube.com/watch?v=XXXXXXXX"
        images: [
          // 可选：放几张截图路径（public 下）
          "/images/WorkExp1.png",
        ]
      }
    },
    {
      role: "Unity Development Engineer (Intern)",
      company: "BOE Technology Group",
      companylogo: require("./assets/images/BOELogo.png"),
      date: "Jun 2019 - Oct 2019",
      desc: `KF Flooring Internal Web System`,
      descBullets: [
        "Built and maintained an internal web system for cabinet trading and shipping.",
        "Developed admin tools for order, inventory, and delivery management.",
      ],
      // ------- 详情配置 -------
      details: {
        projectName: "Internal Web System",
        overview: [
          "Built and maintained an internal web system for cabinet trading and shipping."
        ],
        responsibilities: [
          "Developed admin tools for order, inventory, and delivery management to support daily back-office operations."
        ],
        technologies: "C++, Unity, C#, Linux",
        youtubeUrl: "https://youtu.be/kKinkCXZ7O4", // 如果有视频，填完整链接，例如 "https://www.youtube.com/watch?v=XXXXXXXX"
        images: [
          // 可选：放几张截图路径（public 下）
          "/images/WorkExp_Intern01.png",
          "/images/WorkExp_Intern02.png",
        ]
      }
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



const bigProjectShowcaseDesign = {
  display: true,
  title: "Personal Projects – Design",
  subtitle: "Personal Gameplay / System / Level Design and Prototypes.",
  projects: [
    {
      id: "swarm-system",
      bannerTitle: "SIFI Hacking System",
      bannerColor: "#6b4ce6",
      logo: "/images/WorkExp3.png",
      // title: "SIFI Hacking System with Swarm Stealth Mini Game",
      // subtitle: "3D stealth gameplay prototype with multi-layer AI.",
      coverImage: "/images/WorkExp3.png", // 卡片上的主图 / GIF
      details: {
        title: "SIFI Hacking System with Swarm Stealth Mini Game",
        overview: [
          "Short intro paragraph 1",
          "Short intro paragraph 2"
        ],
        bullets: [
          "Design the system",
          "Do it in the UE5 with C++ and Blueprint"
        ],
        technologies: "Unreal Engine 5, C++, Blueprint, Git",
        youtubeUrl: "",
        images: [
          "/images/WorkExp3.png",
          "/images/WorkExp3.png",
        ]
      }
    }
  ]
}

const bigProjectShowcaseProgramming = {
  display: true,
  title: "Personal Projects – Programming",
  subtitle: "Programming examples in game jam",
  projects: [
    {
      id: "swarm-system",
      bannerTitle: "AI Swarm Stealth System",
      bannerColor: "#6b4ce6",
      title: "",
      subtitle: "",
      coverImage: "/images/WorkExp3.png", // 卡片上的主图 / GIF
      details: {
        title: "AI Swarm Stealth System",
        overview: [
          "Short intro paragraph 1",
          "Short intro paragraph 2"
        ],
        bullets: [
          "What you did / contributions ...",
          "Another key bullet ..."
        ],
        technologies: "Unreal Engine 5, C++, Behavior Tree",
        youtubeUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
        images: [
          "/images/WorkExp3.png",
          "/images/swarm-shot-2.png"
        ]
      }
    }
  ]
}

const bigProjectShowcaseArt = {
  display: true,
  title: "Personal Projects – Art",
  // subtitle: " ",
  subtitle: "3D Modeling / UI Design in SCAD",
  projects: [
    {
      id: "casino-floor",
      bannerColor: "#c0483c",
      title: "3D Modeling - Casino Interior Environment",
      subtitle: "UE5 interior scene with assets modeled in Maya.",
      coverImage: "/images/projectshowcase-art-3.png", // 卡片上的主图 / GIF
      details: {
        title: "Casino Interior Environment",
        overview: [
          "Built a casino-themed interior in UE5 using props and modular pieces modeled in Maya.",
          "This is the SCAD Learning Record in Game 720 : Virtual World Building. Learn how to use Maya and UE5. This is the final project. ",
        ],
        // bullets: [
        //   "Modeled and UVed the slot machine and supporting props in Maya before importing to UE5.",
        //   "Set dressed, lit, and optimized the scene in UE5 to showcase the hero asset."
        // ],
        technologies: "Unreal Engine 5, Maya",
        youtubeUrl: "https://youtu.be/Fgf8uY6jmCc",
        images: [
          "/images/projectshowcase-art-1.png",
          "/images/projectshowcase-art-2.png",
          "/images/projectshowcase-art-3.png",
          "/images/projectshowcase-art-4.png",
          "/images/projectshowcase-art-5.png",
          "/images/projectshowcase-art-6.png",
          "/images/projectshowcase-art-7.png"
        ]
      }
    },
    {
      id: "titan-wreckage",
      bannerColor: "#c0483c",
      title: "3D Environment - Titan Wreckage",
      subtitle: "Alien-world outdoor scene of Titan battle debris built in UE5.",
      coverImage: "/images/projectshowcase-art-2-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Titan Wreckage Environment",
        overview: [
          'This is the SCAD learning record for Game 740: "Game Art: Direction/Look Dev".',
          "I learned Maya and UE5 to build this alien-world outdoor scene featuring Titan battle debris, completed independently.",
          "This art scene also feeds into my later UI design and level design projects."
        ],
        // bullets: [
        //   "Modeled and UVed hero props/debris in Maya, then assembled in UE5.",
        //   "Lit and optimized the scene for atmosphere and readability."
        // ],
        technologies: "Unreal Engine 5, Maya",
        youtubeUrl: "https://youtu.be/cs-WZdRJp3I",
        images: [
          "/images/projectshowcase-art-2-1.png",
          "/images/projectshowcase-art-2-2.png",
          "/images/projectshowcase-art-2-3.png",
          "/images/projectshowcase-art-2-4.png",
        ]
      }
    },
    {
      id: "UI-Design",
      bannerTitle: "UI Design Figma",
      bannerColor: "#c0483c",
      logo: "/images/casino-logo.png",
      title: "3D Modeling - Casino Interior Environment",
      subtitle: "UE5 interior scene with a slot machine hero asset modeled in Maya.",
      coverImage: "/images/projectshowcase-art-2-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Casino Interior Environment",
        overview: [
          "Built a casino-themed interior in UE5 using props and modular pieces modeled in Maya.",
          "This is the SCAD Learning Record in Game 720 : Virtual World Building. Learn how to use Maya and UE5. This is the final project. ",
        ],
        // bullets: [
        //   "Modeled and UVed the slot machine and supporting props in Maya before importing to UE5.",
        //   "Set dressed, lit, and optimized the scene in UE5 to showcase the hero asset."
        // ],
        technologies: "Unreal Engine 5, Maya",
        youtubeUrl: "https://youtu.be/7QMiYqriyoI",
        images: [
          "/images/projectshowcase-art-2-1.png",
          "/images/projectshowcase-art-2-2.png",
          "/images/projectshowcase-art-2-3.png",
          "/images/projectshowcase-art-2-4.png",
        ]
      }
    }
  ]
}


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 929-766-3555",
  email_address: "wtq3555@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  bigProjectShowcaseDesign,
  bigProjectShowcaseProgramming,
  bigProjectShowcaseArt,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
