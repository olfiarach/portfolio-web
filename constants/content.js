// Single source for all page copy (copy deck: olfia-webpage-copy.md). `need` = open [NEED] items, shown in dev only.
const content = {
  meta: {
    title: "Olfia Rachmi W · AI & Computer Vision Engineer",
    description:
      "I build computer vision models and the web apps that put them to work. YOLOv8, PyTorch, FastAPI, React, Next.js. Based in Bali, open to remote roles.",
    ogTitle: "Olfia Rachmi W, AI & Computer Vision Engineer",
    ogDescription:
      "I trained a model that reads Rupiah banknotes for visually impaired merchants, then built the API that serves it in under 150 ms.",
  },
  ui: {
    skip: "Skip to content",
    newTab: "Opens in a new tab",
    emailLabel: "Email Olfia about a role",
    cvLabel: "Download Olfia's CV (PDF)",
    fallbackNote: "Animated preview of the model detecting a banknote.",
    heroFallback: "Banknote detection demo",
    notFound: "This page isn't here. My work is on the home page.",
    backHome: "Back home",
  },
  links: {
    email: "mailto:olfiarachmi@gmail.com",
    linkedin: "https://www.linkedin.com/in/olfia-rachmi",
    github: "https://github.com/olfiarach",
    cv: "/Olfia_Rachmi_W_CV.pdf",
    repo: "https://github.com/olfiarach/TemanNetra",
    demo: "https://olfiarach.github.io/TemanNetra/",
  },
  nav: [
    ["Work", "#work"],
    ["Experience", "#experience"],
    ["Teaching", "#teaching"],
    ["Contact", "#contact"],
  ],
  navCta: "Email me",
  hero: {
    kicker: "AI ENGINEER · COMPUTER VISION · BALI",
    h1: "I train vision models and build the apps that use them.",
    sub: "My latest model reads Indonesian Rupiah banknotes in real time for visually impaired merchants, served through FastAPI in under 150 ms. Before that, I spent 3+ years shipping React and Next.js apps.",
    cta: "Email me about a role",
    cv: "Download my CV ↓",
    linkedin: "LinkedIn ↗",
    chip: "● Open to work · Remote or hybrid in Bali",
    label: null, // [NEED: a real inference output from her model]
    alt: "The TemanNetra banknote scanner app loading its detection model.",
    photo: "/img/temannetra.png",
    need: [],
  },
  statement:
    "I started in front-end work: React, Next.js, Tailwind and Webflow, for teams that cared how fast a page loads. Now I apply that same care to machine learning. I curate the data, train the model, tune it until the numbers hold, and wrap it in something a person can actually use. I've also been teaching code since 2022, so I'm used to explaining hard things simply.",
  project: {
    kicker: "FEATURED PROJECT",
    title: "TemanNetra",
    oneLiner:
      "A real-time banknote detector that helps visually impaired micro-merchants check the cash they're handed.",
    why: "A merchant who can't see the note can't check their change. I wanted a phone camera to do that check for them, quickly enough to keep up with a real sale.",
    steps: [
      {
        label: "01 · DATA",
        heading: "Built the dataset first",
        body: "I curated and augmented banknote images in Roboflow so the model sees notes the way a shop sees them: folded, worn, half-lit and at odd angles.",
        need: "[NEED: dataset size, number of classes]",
      },
      {
        label: "02 · MODEL",
        stat: "mAP@50 > 90%",
        heading: "Trained YOLOv8 and tuned it until it held",
        body: "I trained and tuned a YOLOv8 detector until it passed 90% mAP@50 across denominations.",
      },
      {
        label: "03 · SERVE",
        stat: "< 150 ms per request",
        heading: "Served fast enough for a live sale",
        body: "The model runs behind a FastAPI endpoint and answers in under 150 ms, so the merchant hears the amount before the customer has put their wallet away.",
      },
    ],
    repoCta: "View the code ↗",
    demoCta: "Try the live app ↗",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "Roboflow", "FastAPI"],
  },
  experience: {
    kicker: "EXPERIENCE",
    h2: "Where I've shipped",
    rows: [
      {
        dates: "2022 – now",
        role: "Coding Instructor",
        org: "Timedoor (part-time)",
        lines: [
          "I teach Python, JavaScript, React Native and Vue.js to students in Indonesia, MENA and Australia, in class and online.",
          "98% of my students finish their final project.",
        ],
        label: "teaching 0.98",
      },
      {
        dates: "2026",
        role: "Web Specialist",
        org: "Freelance",
        lines: [
          "I built a luxury hotel directory in Webflow CMS that guests can filter by location and category.",
          "Custom CSS with fluid type, custom JS interactions, and SEO and image tuning for fast loads.",
        ],
        label: "webflow 0.96",
      },
      {
        dates: "2023 – 2025",
        role: "Full-stack Developer",
        org: "Semantu",
        lines: [
          "I built React and Tailwind web apps with Google Maps geolocation and Zoom video built in.",
          "I turned legacy code into a shared component library, which cut new-feature build time by 20%.",
        ],
        label: "fullstack 0.95",
      },
      {
        dates: "2022 – 2023",
        role: "Frontend Developer",
        org: "Venatronics LLC",
        lines: [
          "I took the company's flagship site from Figma to production in React.",
          "Mobile-first, with first load under 2 seconds.",
        ],
        label: "frontend 0.94",
      },
    ],
  },
  teaching: {
    kicker: "TEACHING",
    big: "98%",
    under: "of my students finish their final project.",
    places: "INDONESIA · MENA · AUSTRALIA",
    body: "Since 2022 I've taught kids and adults at Timedoor Academy, in person in Bali and online across Indonesia, MENA and Australia. I also mentored 11 scholarship learners from the Selukat Learning Center through HTML, CSS, modern JavaScript, Vue.js, code reviews and Git.",
    why: "Teaching is how I check that I really understand something. It also makes me easy to work with on a team.",
  },
  stack: {
    kicker: "STACK",
    h2: "What I build with",
    // logo = Iconify SVG Logos id (real tech marks only)
    groups: [
      ["AI & Vision", [["Python", "python"], ["PyTorch", "pytorch-icon"], ["YOLOv8"], ["OpenCV", "opencv"], ["Roboflow"]]],
      ["Frontend", [["React", "react"], ["Next.js", "nextjs-icon"], ["TypeScript", "typescript-icon"], ["Tailwind CSS", "tailwindcss-icon"], ["Webflow", "webflow"]]],
      ["Backend & Data", [["FastAPI", "fastapi-icon"], ["Node.js", "nodejs-icon"], ["Firebase", "firebase"], ["Realm", "realm"], ["Google Maps API", "google-maps"]]],
      ["I also teach", [["JavaScript", "javascript"], ["React Native", "react"], ["Vue.js", "vue"], ["HTML & CSS", "html-5"], ["Python", "python"]]],
    ],
  },
  contact: {
    h2: "Have a camera problem worth solving?",
    body: "I'm looking for AI Engineer, Computer Vision Engineer or AI Full-stack roles, either remote or hybrid in Bali. Tell me what you're building and I'll reply within two working days.",
    need: "[NEED: confirm response time]",
    cta: "Email me about a role →",
    cv: "Download my CV ↓",
    linkedin: "LinkedIn ↗",
    github: "GitHub ↗",
  },
  footer: { text: "© 2026 Olfia Rachmi W · Built in Bali", credits: "Credits" },
};

export default content;
