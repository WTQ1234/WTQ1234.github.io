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


// TODO 需要GIF作为coverImage，需要加上设计文档，并且将设计文档的链接改成超链接
const bigProjectShowcaseDesign = {
  display: true,
  columnCount: 3,
  title: "Personal Projects – Design",
  subtitle: "Personal System / Level Design and Prototypes.",
  projects: [
    {
      id: "level-design-754",
      bannerColor: "#3f378bff",
      title: "FPS Level Design - Star Scrapper",
      coverImage: "/images/748_e1_3.png", // 卡片上的主图 / GIF
      details: {
        title: "FPS Level Design: Star Scrapper - Abandoned High-Tech Battlefield",
        overview: [
          "A first-person combat level where the player searches for critical items while being hunted by robotic enemies.",
          "Route-based decision-making and interactive environment elements support hiding, delaying, and tactical evasion.",
          "Level Design Docs: https://docs.google.com/document/d/1kQjjFPPUeMAFwG1AWDUj_Hk32sRvQiTuw5rhWiCv8l8/edit?usp=sharing",
        ],
        technologies: "Game Level Design, Unreal Engine 5, C++, Blueprint",
        youtubeUrl: "https://youtu.be/09J0FSA5tyI",
        images: [
          "/images/748_all_1.png",

          "/images/748_e1_3.png",
          // "/images/748_e1_2.png",
          "/images/748_e1_1.png",
          // "/images/748_e1_4.png",
          "/images/748_e2_3.png",
          // "/images/748_e2_2.png",
          "/images/748_e2_1.png",
          // "/images/748_e2_4.png",          
          "/images/748_e3_3.png",
          // "/images/748_e3_2.png",
          "/images/748_e3_1.png",
          // "/images/748_e3_4.png",
          "/images/748_e4_3.png",
          // "/images/748_e4_2.png",
          "/images/748_e4_1.png",
          // "/images/748_e4_4.png",
          
          // "/images/748_all_2.png",
          "/images/748_all_3.png",
          "/images/748_all_4.png",
          "/images/748_all_5.png",
        ]
      }
    },
    {
      id: "system-design-734",
      bannerColor: "#378b50ff",
      title: "Hacking System Design with Mini Game",
      coverImage: "/images/734_10.png", // 卡片上的主图 / GIF
      details: {
        title: "Hacking System Design: Hacking Loop with Mini Game and Resource Strategy",
        overview: [
          "A system design demo for a high-tech stealth game on Windows, built around keyboard-and-mouse input.",
          "Core hook: strategically spend limited resources to hack interactable targets.",
          "Different hacking levels unlock different effects while maintaining stealth against patrols and alerts.",
          "System Design Docs: https://docs.google.com/document/d/1djM5SWgBn8UYgEypzFlpSe6MYYWwlE7Tb7Uy0GVJdJM/edit?usp=sharing",
        ],
        technologies: "Game System Design, Unreal Engine 5, C++, Blueprint",
        youtubeUrl: "https://youtu.be/HAjogNEsCbM",
        images: [
          "/images/734_9.png",
          "/images/734_10.png",
          "/images/734_1.png",
          "/images/734_2.png",
          "/images/734_3.png",
          "/images/734_4.png",
          "/images/734_5.png",
          "/images/734_6.png",
          "/images/734_7.png",
          "/images/734_8.png",
        ]
      }
    }
  ]
}

// TODO 需要GIF作为coverImage，需要把这里面的链接改成超链接，程序这个有点多，考虑换成四个一排，考虑把Unity的打包成Web版本，放到静态网页里，注意懒加载
const bigProjectShowcaseProgramming = {
  display: true,
  columnCount: 4,
  title: "Personal Projects – Programming",
  subtitle: "Programming examples, some are from game jam",
  projects: [
    {
      id: "754",
      bannerColor: "#1d5d7aff",
      title: "Deep Dive Dream By Unity",
      coverImage: "/images/projectshowcase-programming-8-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Deep Dive Dream, 2025 48H Global Game Jam",
        overview: [
          `"Deep Dive Dream" is a 2D platform pve game, like "Ultimate Chicken Horse" or "Stick Fight: The Game".`,
          `Made in the 48h GIGA game jam, 2023/9/20-2023/10/11, online.`,
          `The gamejam title is "Unfair Randomness".`,
          `6 people in the game jam team: 2 2D-artist, 1 animator(Spine), 1 3D-artist, 1 musician, 2 programmer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/4kN-ubTmGEM",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-8-2.png",
          "/images/projectshowcase-programming-8-3.png",
          "/images/projectshowcase-programming-8-4.png",
          "/images/projectshowcase-programming-8-5.png",
        ]
      }
    },
    {
      id: "748 Tech Reel",
      bannerColor: "#1d5d7aff",
      title: "Deep Dive Dream By Unity",
      coverImage: "/images/projectshowcase-programming-8-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Deep Dive Dream, 2025 48H Global Game Jam",
        overview: [
          `"Deep Dive Dream" is a 2D platform pve game, like "Ultimate Chicken Horse" or "Stick Fight: The Game".`,
          `Made in the 48h GIGA game jam, 2023/9/20-2023/10/11, online.`,
          `The gamejam title is "Unfair Randomness".`,
          `6 people in the game jam team: 2 2D-artist, 1 animator(Spine), 1 3D-artist, 1 musician, 2 programmer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/4kN-ubTmGEM",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-8-2.png",
          "/images/projectshowcase-programming-8-3.png",
          "/images/projectshowcase-programming-8-4.png",
          "/images/projectshowcase-programming-8-5.png",
        ]
      }
    },
    {
      id: "Deep Dive Dream",
      bannerColor: "#1d5d7aff",
      title: "Deep Dive Dream By Unity",
      coverImage: "/images/projectshowcase-programming-8-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Deep Dive Dream, 2025 48H Global Game Jam",
        overview: [
          `"Deep Dive Dream" is a 2D platform pve game, like "Ultimate Chicken Horse" or "Stick Fight: The Game".`,
          `Made in the 48h GIGA game jam, 2023/9/20-2023/10/11, online.`,
          `The gamejam title is "Unfair Randomness".`,
          `6 people in the game jam team: 2 2D-artist, 1 animator(Spine), 1 3D-artist, 1 musician, 2 programmer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/4kN-ubTmGEM",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-8-2.png",
          "/images/projectshowcase-programming-8-3.png",
          "/images/projectshowcase-programming-8-4.png",
          "/images/projectshowcase-programming-8-5.png",
        ]
      }
    },
    {
      id: "CatchSheep",
      bannerColor: "#1d5d7aff",
      title: "Catch Sheep By Unity",
      coverImage: "/images/projectshowcase-programming-8-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Catch Sheep, 2024 48H Global Game Jam",
        overview: [
          `"Catch Sheep" is a 2D top-down pve game, The player works together with their dog, use a rope to catch sheep.`,
          `Made in the 48h GIGA game jam, 2023/9/20-2023/10/11, online.`,
          `The gamejam title is "Unfair Randomness".`,
          `6 people in the game jam team: 2 2D-artist, 1 animator(Spine), 1 3D-artist, 1 musician, 2 programmer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/3GCezneDy18",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-8-2.png",
          "/images/projectshowcase-programming-8-3.png",
          "/images/projectshowcase-programming-8-4.png",
          "/images/projectshowcase-programming-8-5.png",
        ]
      }
    },
    {
      id: "DiceFight2D",
      bannerColor: "#1d5d7aff",
      title: "Dice Fight By Unity",
      coverImage: "/images/projectshowcase-programming-8-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Dice Fight, 2023 48H GIGA Game Jam",
        overview: [
          `"Dice Fight" is a 2D platform pvp game, like "Ultimate Chicken Horse" or "Stick Fight: The Game".`,
          `Made in the 3 Weeks Booom Game Jam, 2023/9/20-2023/10/11, online.`,
          `The gamejam title is "Unfair Randomness".`,
          `6 people in the game jam team: 2 2D-artist, 1 animator(Spine), 1 3D-artist, 1 musician, 2 programmer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/4kN-ubTmGEM",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-8-2.png",
          "/images/projectshowcase-programming-8-3.png",
          "/images/projectshowcase-programming-8-4.png",
          "/images/projectshowcase-programming-8-5.png",
        ]
      }
    },
    {
      id: "Touch ⠞⠕⠥⠉⠓",
      bannerColor: "#1d5d7aff",
      title: "Touch ⠞⠕⠥⠉⠓ By Unity",
      coverImage: "/images/projectshowcase-programming-7-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Touch ⠞⠕⠥⠉⠓, 2023 48H GIGA Game Jam",
        overview: [
          `"Touch ⠞⠕⠥⠉⠓" is a 2D top-down, narrative-driven maze exploration game. ⠞⠕⠥⠉⠓ represents "Touch" in Braille.`,
          `Made in the 48h GIGA game jam, 2023/7/7-2023/7/9, in China GuangZhou-TianHe.`,
          `The gamejam title is "Touch", this project achieved third place in the game jam site.`,
          `5 people in the game jam team. 2 artist, 1 programmer, 1 musician, 1 level designer.`,
          `I'm the programmer and also responsible for the foundational design of game mechanics`,
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/aUhSHy8n0fw",
        images: [
          // "/images/projectshowcase-programming-7-1.png",
          "/images/projectshowcase-programming-7-2.png",
          "/images/projectshowcase-programming-7-3.png",
          "/images/projectshowcase-programming-7-4.png",
        ]
      }
    },
    {
      id: "Zuma Card",
      bannerColor: "#1d5d7aff",
      title: "Zuma Card By Unity",
      coverImage: "/images/projectshowcase-programming-6.png", // 卡片上的主图 / GIF
      details: {
        title: "Zuma Card By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Personal_Game_Project_4_ZumaCard.git",
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/2WfUHhO6nis",
        images: [
          "/images/projectshowcase-programming-6.png"
        ]
      }
    },
    {
      id: "Flying Axe",
      bannerColor: "#2d293bff",
      title: "Flying Axe By Unity",
      coverImage: "/images/projectshowcase-programming-5.png", // 卡片上的主图 / GIF
      details: {
        title: "Flying Axe By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Personal_Game_Project_3_FlyingAxe.git"
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/DgpGetbsz1g",
        images: [
          "/images/projectshowcase-programming-5.png",
          "/images/projectshowcase-programming-5-1.png",
        ]
      }
    },
    {
      id: "ElasticBall",
      bannerColor: "#90913dff",
      title: "ElasticBall By Unity",
      coverImage: "/images/projectshowcase-programming-4.png", // 卡片上的主图 / GIF
      details: {
        title: "ElasticBall By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Practice_Unity_ElasticBall.git"
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/E51xdROWx2Q",
        images: [
          "/images/projectshowcase-programming-4.png"
        ]
      }
    },
    {
      id: "SheepChess",
      bannerColor: "#173958ff",
      title: "SheepChess By Unity",
      coverImage: "/images/projectshowcase-programming-3.png", // 卡片上的主图 / GIF
      details: {
        title: "SheepChess By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Practice_Unity_SheepChess.git"
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/z5AX1iuLOAg",
        images: [
          "/images/projectshowcase-programming-3.png"
        ]
      }
    },
    {
      id: "TicTacToe",
      bannerColor: "#175658ff",
      title: "TicTacToe By Unity",
      coverImage: "/images/projectshowcase-programming-2.png", // 卡片上的主图 / GIF
      details: {
        title: "TicTacToe By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Practice_Unity_TicTacToe.git"
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/zCOcAH6YAc4",
        images: [
          "/images/projectshowcase-programming-2.png"
        ]
      }
    },
    {
      id: "2048",
      bannerColor: "#1d5d7aff",
      title: "2048 By Unity",
      coverImage: "/images/projectshowcase-programming-1.png", // 卡片上的主图 / GIF
      details: {
        title: "2048 By Unity",
        overview: [
          "Get this project source code: https://github.com/WTQ1234/Practice_Unity_2048.git"
        ],
        technologies: "Unity, C#",
        youtubeUrl: "https://youtu.be/SAitsRjwNuw",
        images: [
          "/images/projectshowcase-programming-1.png"
        ]
      }
    },

  ]
}

// TODO 需要GIF作为coverImage，TODO 把710的Set Dressing 和 Level Sequence也放上去吧 TODO 记得改一下Header就是上面悬浮的标题，都弄完就能开始投简历了
const bigProjectShowcaseArt = {
  display: true,
  title: "Personal Projects – Art",
  subtitle: "3D Modeling / UI Design in SCAD",
  projects: [
    {
      id: "casino-floor",
      bannerColor: "#94332aff",
      title: "3D Modeling - Casino Interior",
      coverImage: "/images/projectshowcase-art-3.png", // 卡片上的主图 / GIF
      details: {
        title: "Casino Interior Environment",
        overview: [
          "A casino-themed interior scene.",
          "Built in UE5 using props and modular pieces modeled in Maya.",
          "Created as a SCAD learning record for Game 720 : Virtual World Building.",
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
      bannerColor: "#1d5d7aff",
      title: "3D Environment - Titan Wreckage",
      coverImage: "/images/projectshowcase-art-2-1.png", // 卡片上的主图 / GIF
      details: {
        title: "Titan Wreckage Environment",
        overview: [
          'A alien-world outdoor scene featuring Titan battle debris.',
          "Built in UE5 using props and modular pieces modeled in Maya.",
          'Created as a SCAD learning record for Game 740 : Game Art: Direction/Look Dev.',
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
          "/images/projectshowcase-art-2-5.png",
          "/images/projectshowcase-art-2-6.png",
          "/images/projectshowcase-art-2-7.png",
        ]
      }
    },
    {
      id: "UI-Design",
      bannerColor: "#85317eff",
      title: "FPS UI Design: Titan Salvage",
      coverImage: "/images/projectshowcase-art-3-cover.png", // 卡片上的主图 / GIF
      details: {
        title: "FPS UI Design Demo — Alien Battlefield, Robot Enemies, Titan Salvage",
        overview: [
          "A UI design demo for a classic FPS experience set on an alien world, featuring robot enemies and a Titan-wreckage salvage theme.",
          "Created as a SCAD learning record for IXDS 724 (Visual Hierarchies & Affordances).",
        ],
        technologies: "Game UI Design, Figma, Photoshop",
        youtubeUrl: "https://youtu.be/7QMiYqriyoI",
        images: [
          "/images/projectshowcase-art-3-1.png",
          "/images/projectshowcase-art-3-2.png",
          "/images/projectshowcase-art-3-3.png",
          "/images/projectshowcase-art-3-4.png",
          "/images/projectshowcase-art-3-5.png",
          "/images/projectshowcase-art-3-6.png",
          "/images/projectshowcase-art-3-7.png",
          "/images/projectshowcase-art-3-8.png",
          "/images/projectshowcase-art-3-9.png",
          "/images/projectshowcase-art-3-10.png",
          "/images/projectshowcase-art-3-11.png",
          "/images/projectshowcase-art-3-12.png",
          "/images/projectshowcase-art-3-13.png",
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
