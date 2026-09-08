const config = {
  title: "Arielle Rosete | Computer Engineer",
  description: {
    long: `Hi! I am Arielle! I'm a Computer Engineer living in the Philippines.
          I completed my Bachelor's Degree in Computer Engineering at Ateneo de Davao University, graduating as Magna Cum Laude.
          I am proficient on both computer software and hardware. I have experience in web development, database management, UI/UX design, computer vision, embedded systems, microcontrollers, and PCB design.`,
    short:
      "Discover the portfolio of Arielle, a computer engineer a computer engineer who loves to code, build, and design helpful systems.",
  },
  keywords: [
    "Arielle",
    "portfolio",
    "computer engineer",
    "computer software",
    "computer hardware",
    "web development",
    "database management",
    "UI/UX design",
    "interactive websites",
    "embedded systems",
    "microcontrollers",
    "circuit design",
  ],
  author: "Arielle Rosete",
  email: "ariellerosete.ar@gmail.com",
  phone: "(+63) 919-099-8798", 
  site: "https://ariellerosete.dev",

  // for github stars button
  githubUsername: "ayen-123",
  githubRepo: "ayen-123",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    linkedin: "https://www.linkedin.com/in/ariellerosete/",
    github: "https://github.com/ayen-123",
  },
  
};
export { config };
