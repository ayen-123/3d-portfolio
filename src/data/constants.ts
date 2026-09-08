export enum SkillNames {
  JS = "js",
  HTML = "html",
  CSS = "css",
  CPLUSPLUS = "cpp",
  CSHARP = "csharp",
  PYTHON = "python",
  SQL = "sql",
  VERILOG = "verilog",
  VBA = "vba",
  BOOTSTRAP = "bootstrap",
  FLASK = "flask",
  OPENCV = "opencv",
  FRONTEND = "frontend",
  BACKEND = "backend",
  GIT = "git",
  GITHUB = "github",
  VERCEL = "vercel",
  MATLAB = "matlab",
  AUTODESKEAGLE = "eagle",
  ARDUINO = "arduino",
  RASPBERRYPI = "raspberrypi",
  PCB = "pcb",
  IC = "ic",
  EMBEDDEDSYSTEMS = "embedded",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "programs the behavior and interactivity of web pages",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 2,
    name: "html",
    label: "HTML",
    shortDescription: "defines the content and build the structure of web pages",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 3,
    name: "css",
    label: "CSS",
    shortDescription: "specifies the layout of web pages and design their appearance",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.CPLUSPLUS]: {
    id: 4,
    name: "cpp",
    label: "C++",
    shortDescription: "high-performance and general-purpose programming language",
    color: "#015697",
    icon: "https://devicons.io/devicons/icons/c-plusplus.svg",
  },
  [SkillNames.CSHARP]: {
    id: 5,
    name: "csharp",
    label: "C#",
    shortDescription: "object-oriented programming language that runs on the .NET Framework",
    color: "#6444d3",
    icon: "https://devicons.io/devicons/icons/c-sharp.svg",
  },
  [SkillNames.PYTHON]: {
    id: 6,
    name: "python",
    label: "Python",
    shortDescription: "high-level programming language known for its simple syntax",
    color: "#f7d54d",
    icon: "https://devicons.io/devicons/icons/python.svg",
  },
  [SkillNames.SQL]: {
    id: 7,
    name: "sql",
    label: "SQL",
    shortDescription: "domain-specific language used in programming and database management",
    color: "#e6962d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  [SkillNames.VERILOG]: {
    id: 8,
    name: "verilog",
    label: "Verilog",
    shortDescription: "language of hardware description used to model electronic systems",
    color: "#38bdf8",
    icon: "https://www.svgrepo.com/show/374163/verilog.svg",
  },
  [SkillNames.VBA]: {
    id: 9,
    name: "vba",
    label: "VBA",
    shortDescription: "programming language for automating tasks in Microsoft Office applications",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 10,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "the go-to CSS framework for rapid prototyping and responsive web design",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 11,
    name: "flask",
    label: "Flask",
    shortDescription: "lightweight Python web framework for building web applications",
    color: "#8ec6df",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  [SkillNames.OPENCV]: {
    id: 12,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "the go-to computer vision library for image and video processing",
    color: "#fd2b44",
    icon: "https://devicons.io/devicons/icons/opencv.svg",
  },
  [SkillNames.FRONTEND]: {
    id: 13,
    name: "frontend",
    label: "Front-End",
    shortDescription: "the process of designing the face of the web, where design meets functionality",
    color: "#f7b93a",
    icon: "https://www.svgrepo.com/show/250075/computer-tv.svg",
  },
  [SkillNames.BACKEND]: {
    id: 14,
    name: "backend",
    label: "Back-End",
    shortDescription: "the engine room of the web, where data is processed and served to the front-end",
    color: "#38bdf8",
    icon: "https://www.svgrepo.com/show/484232/database.svg",
  },
  [SkillNames.GIT]: {
    id: 15,
    name: "git",
    label: "Git",
    shortDescription: "the version control system that keeps your code history safe and sound",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 16,
    name: "github",
    label: "GitHub",
    shortDescription: "social network for developers, where code meets collaboration",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 17,
    name: "vercel",
    label: "Vercel",
    shortDescription: "a platform for deploying websites",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.MATLAB]: {
    id: 18,
    name: "matlab",
    label: "MATLAB",
    shortDescription: "programming and computing platform for engineering applications",
    color: "#0076a8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
  },
  [SkillNames.AUTODESKEAGLE]: {
    id: 19,
    name: "eagle",
    label: "Autodesk Eagle",
    shortDescription: "scriptable electronic design automation application for PCB design",
    color: "#ff6600",
    icon: "https://www.svgrepo.com/show/331298/autodesk.svg",
  },
  [SkillNames.ARDUINO]: {
    id: 20,
    name: "arduino",
    label: "Arduino",
    shortDescription: "an electronic prototyping platform for creating interactive electronic objects.",
    color: "#66c2df",
    icon: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/arduino/arduino-original.svg",
  },
  [SkillNames.RASPBERRYPI]: {
    id: 21,
    name: "raspberrypi",
    label: "Raspberry Pi",
    shortDescription: "small single-board computers (SBCs) that runs Linux used in various applications",
    color: "#c82655",
    icon: "https://devicons.io/devicons/icons/raspberry-pi.svg",
  },
  [SkillNames.PCB]: {
    id: 22,
    name: "pcb",
    label: "PCB Design",
    shortDescription: "process of creating the layout and schematic for electronic circuits.",
    color: "#4285f4",
    icon: "https://www.svgrepo.com/show/474770/circuit.svg",
  },
  [SkillNames.IC]: {
    id: 23,
    name: "ic",
    label: "IC",
    shortDescription: "the heart and brains of most circuits and electronic devices",
    color: "#e34c26",
    icon: "https://www.svgrepo.com/show/94127/integrated-circuit.svg",
  },
  [SkillNames.EMBEDDEDSYSTEMS]: {
    id: 24,
    name: "embedded",
    label: "IoT",
    shortDescription: "specialized computing systems that are designed to perform dedicated functions",
    color: "#00a8e1",
    icon: "https://www.svgrepo.com/show/530454/system-settings.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "October 2025",
    endDate: "Present",
    title: "Freelance Developer",
    company: "Self-employed",
    description: [
      "Built a computer vision application for real-time fatigue detection for a local taxi company.",
      "Created WPF desktop apps for internal business tools, streamlining workflows and boosting productivity.",
      "Automated repetitive processes, improving efficiency and reducing human error.",
    ],
    skills: [
      SkillNames.CSHARP,
      SkillNames.PYTHON,
      SkillNames.OPENCV,
      SkillNames.RASPBERRYPI,
      SkillNames.EMBEDDEDSYSTEMS,
      SkillNames.FRONTEND,
      SkillNames.BACKEND,
      SkillNames.PCB,
    ],
  },
  {
    id: 2,
    startDate: "June 2025",
    endDate: "August 2025",
    title: "Process Engineer",
    company: "Texas Instruments",
    description: [
      "Worked on projects utilizing Excel Macro and VBA Programming, Spotfire, and PL/SQL Script.",
      "Attended daily semiconductor manufacturing processes, including machine operations and hands-on soldering of microchips and small SMDs to circuit boards under a microscope.",
      "Developed an automated system for the company’s product information guidesheet in manufacturing, reducing the workload of engineers and improving time efficiency and workflow.",
    ],
    skills: [
      SkillNames.SQL,
      SkillNames.VBA,
      SkillNames.PYTHON,
    ],
  },
];

export enum CourseNames {
  OOP = "oop",
  MCP = "microprocessor",
  ES = "embedded-systems",
  CAO = "computer-architecture",
  DSA = "data-structures-algorithms",
  SD = "software-design",
  NM = "numerical-methods",
  FCS = "feedback-control-systems",
  HDL = "hardware-description-language",
  LCD = "logic-circuits-design",
  EDA = "engineering-data-analysis",
  EEC = "electrical-circuits",
  ECE = "electronic-circuits",
  DSP = "digital-signal-processing",
  OS = "operating-systems",
}

export type Course = {
  id: number;
  name: string;
  label: string;
  icon: string;
};

export const COURSES: Record<CourseNames, Course> = {
  [CourseNames.OOP]: {
    id: 1,
    name: "oop",
    label: "Object-Oriented Programming",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.MCP]: {
    id: 2,
    name: "microprocessor",
    label: "Microprocessor Systems",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.ES]: {
    id: 3,
    name: "embedded-systems",
    label: "Embedded Systems",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.CAO]: {
    id: 4,
    name: "computer-architecture",
    label: "Computer Architecture and Organization",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.DSA]: {
    id: 5,
    name: "data-structures-algorithms",
    label: "Data Structures and Algorithms",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.SD]: {
    id: 6,
    name: "software-design",
    label: "Software Design",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.NM]: {
    id: 7,
    name: "numerical-methods",
    label: "Numerical Methods",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.FCS]: {
    id: 8,
    name: "feedback-control-systems",
    label: "Feedback and Control Systems",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.HDL]: {
    id: 9,
    name: "hardware-description-language",
    label: "Hardware Description Language",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.LCD]: {
    id: 10,
    name: "logic-circuits-design",
    label: "Logic Circuits and Design",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.EDA]: {
    id: 11,
    name: "engineering-data-analysis",
    label: "Engineering Data Analysis",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.EEC]: {
    id: 12,
    name: "electrical-circuits",
    label: "Electrical Circuits",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.ECE]: {
    id: 13,
    name: "electronic-circuits",
    label: "Electronic Circuits",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.DSP]: {
    id: 14,
    name: "digital-signal-processing",
    label: "Digital Signal Processing",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
  [CourseNames.OS]: {
    id: 15,
    name: "operating-systems",
    label: "Operating Systems",
    icon: "https://www.svgrepo.com/show/422410/computer-display-mac.svg",
  },
};

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  description: string[];
  courses: CourseNames[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "August 2022",
    endDate: "July 2026",
    degree: "B.S. in Computer Engineering",
    institution: "Ateneo de Davao University",
    description: [
      "GRADE: 3.81 / 4.00",

      "HONORS: Graduated Magna Cum Laude, 3x Dean’s List, 4x President’s List, 3x Consecutive Most Outstanding Student Nominee",

      `EXTRACURRICULARS: Prominent Computer Engineering Students' Organization President AY 2025-2026,
      Engineering and Architecture Student Executive Council Officer AY 2025-2026, 
      Prominent Computer Engineering Students' Organization Auditor AY 2024- 2025, 
      Institute of Computer Engineers of the Philippines Member AY 2022-2026,`,
    ],

    courses: [
      CourseNames.OOP,
      CourseNames.MCP,
      CourseNames.ES,
      CourseNames.CAO,
      CourseNames.DSA,
      CourseNames.SD,
      CourseNames.NM,
      CourseNames.FCS,
      CourseNames.HDL,
      CourseNames.LCD,
      CourseNames.EDA,
      CourseNames.EEC,
      CourseNames.ECE,
      CourseNames.DSP,
      CourseNames.OS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
  ],
};

