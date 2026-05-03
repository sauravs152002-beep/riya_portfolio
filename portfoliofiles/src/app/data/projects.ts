export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fintech. InTime.",
    category: "ui/ux case study . 2026",
    image: "/src/imports/Gemini_Generated_Image_jclkdwjclkdwjclk-1.png",
    link: "/project/fintech",
    description: "Collapsing a 5-step CIBIL check process into a single tap using native OS layer biometrics."
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    category: "Product Design • 2025",
    image: "/src/imports/Gemini_Generated_Image_7qzwoj7qzwoj7qzw-1.png",
    link: "/project/ecommerce",
    description: "Simplifying discovery and checkout for a seamless shopping experience."
  },
  {
    id: 3,
    title: "Special Needs. Inclusive.",
    category: "Accessible Design • 2026",
    image: "https://images.unsplash.com/photo-1768595701593-c84fd8143aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmxlJTIwdGVjaG5vbG9neSUyMGluY2x1c2lvbnxlbnwxfHx8fDE3Nzc1NDY3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/project/special-needs",
    description: "Designing empathetic, accessible digital experiences for special needs."
  }
];
