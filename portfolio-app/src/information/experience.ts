export interface ExperienceProps {
  companyName: string;
  title: string;
  timePeriod: string;
  text: string;
  tags: string[];
  link: string;
}

export const experienceArray: ExperienceProps[] = [
  {
    companyName: "Creative's App",
    title: "Software Engineer",
    timePeriod: "Aug 2023",
    text: "Contributed to product vision and go-to-market strategy by providing consultancy support Implemented effective testing and documentation procedures to ensure high-quality software development Successfully fulfilled short-term contract as a valuable software engineer, delivering impactful results",
    tags: ["Kotlin", "Vue", "SaaS", "Javascript"],
    link: "https://contact.xyz/",
  },
  {
    companyName: "Contact",
    title: "Software Engineer",
    timePeriod: "Feb 2022 - July 2023",
    text: "Gained valuable experience as a full-stack Software Engineer. Created and maintained features both in React and React Native. Maintained and developed a Ruby on Rails backend server. Comfortable working full-stack to recognise and provide the endpoints I need for my frontend work",
    tags: ["React", "Typescript", "Figma", "CSS", "Ruby on Rails", "Ecommerce"],
    link: "https://www.vmgnt.com/",
  },
  {
    companyName: "Mazars",
    title: "Financial Services Corporate Tax Graduate",
    timePeriod: "Sept 2019 - Aug 2021",
    text: "Developed a deep understanding of the business model of Banks. Gained strong verbal and written communication skills. Managed a portfolio of over 50 clients as a junior member of staff,  gaining valuable experience in time management and prioritisation",
    tags: ["Python", "Excel"],
    link: "https://www.mazars.co.uk/",
  },
];
