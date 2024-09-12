export const works = [
  {
    name: "Universitas Pendidikan Indonesia",
    role: "Bachelor of Computer Science - SE",
    date: "Sep 2020 - Jun 2024",
    description: `
      <ol>
        <li style="list-style-type: circle;">Final Project: Performance Analysis of OAuth 2.0 Based Authentication and Authorization System with Redis</li>
        <li style="list-style-type: circle;">Learn all stages of building good software such as requirements analysis, UI/UX design, software modeling design,
programming, data, algorithms, verification & validation, software quality and information security.</li>
        <li style="list-style-type: circle;">Developing various applications that implement cycles in software development in college projects</li>
        <li style="list-style-type: circle;">Participate in student organizations and programming communities for self-development</li>
      </ol>
    `,
  },
  {
    name: "PT Telekomunikasi Indonesia Tbk",
    role: "Developer",
    date: "Aug - Dec 2023",
    description: `
      <ol>
        <li style="list-style-type: circle;">Joined Digistar Internship DDB Telkom on Innovation Day project</li>
        <li style="list-style-type: circle;">Manage landing page in wordpress and server maintenance</li>
        <li style="list-style-type: circle;">Re:develop innovationday.ddbtelkom.id website with new architecture and appearance</li>
        <li style="list-style-type: circle;">Collaborate with UI/UX Designer in initiating the project</li>
        <li style="list-style-type: circle;">Involve stakeholders in the website product development process</li>
      </ol>
    `,
  },
  {
    name: "PT Len Industri (Persero)",
    role: "Backend Web Developer",
    date: "Feb - Jun 2023",
    description: `
      <ol>
        <li style="list-style-type: circle;">Conduct the development of Military Information and Command Control Systems</li>
        <li style="list-style-type: circle;">Develop Rest API and document it</li>
        <li style="list-style-type: circle;">Collaborate with various teams using Agile methodology</li>
      </ol>
      `,
  },
  {
    name: "CV Icommits",
    role: "Fullstack Developer",
    date: "Oct - Dec 2018",
    description: `
      <ol>
        <li style="list-style-type: circle;">Developing a web-based attendance application</li>
        <li style="list-style-type: circle;">Apply software development methodologies</li>
        <li style="list-style-type: circle;">Collaborate with GIT version control system</li>
      </ol>
      `,
    images: [],
    // images: [
    //   {
    //     src: "https://via.placeholder.com/150",
    //     alt: "Image 1"
    //   },
    //   {
    //     src: "https://via.placeholder.com/150",
    //     alt: "Image 2"
    //   },
    //   {
    //     src: "https://via.placeholder.com/150",
    //     alt: "Image 3"
    //   }
    // ]
  },
];

export const certifications = [
  {
    name: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
    date: "2024",
    institution: "Google",
  },
  {
    name: "Become a Front-End Web Developer Expert",
    date: "2023",
    institution: "Dicoding",
  },
  {
    name: "Learn SOLID Programming Principles",
    date: "2023",
    institution: "Dicoding",
  },
  {
    name: "Docker: Beginner to Advanced",
    date: "2023",
    institution: "Udemy",
  },
  {
    name: "Learn Fundamentals of Backend Applications",
    date: "2021",
    institution: "Dicoding",
  },
];

export const projects = [
  {
    name: "Re:Develop Innovation Day",
    category: "web",
    tags: ["NodeJS", "NestJS", "NextJS", "ReactJS", "PostgreSQL", "Firebase", "TailwindCSS", "Prisma"],
    // description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: (process.env.NODE_ENV === "production" ? "/my-portfolio" : "") + "/assets/projects/innovationday.png",
    url: "https://chambray-bellflower-965.notion.site/Re-Develop-Innovation-Day-4c1337eecd84454dba26bd52dd5a71f1",
  },
  {
    name: "Cephat",
    category: "web",
    tags: ["NodeJS", "ExpressJS", "MongoDB", "VueJS", "Redis", "Sqeuelize"],
    // description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: (process.env.NODE_ENV === "production" ? "/my-portfolio" : "") + "/assets/projects/cephat.png",
    url: "https://chambray-bellflower-965.notion.site/Cephat-App-df900f4d01824f2a816f7b6ee2ea68b4",
  },
  {
    name: "DoxMaterial",
    category: "web",
    tags: ["PHP", "HTML", "CSS", "Javascript", "MySQL"],
    // description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: (process.env.NODE_ENV === "production" ? "/my-portfolio" : "") + "/assets/projects/doxmaterial.png",
    url: "https://chambray-bellflower-965.notion.site/Dox-Material-8ddf9d98d8c0456ca6b453391ceacf45",
  },
];
