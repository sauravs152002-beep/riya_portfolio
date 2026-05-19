import imgFintech from "../../imports/Gemini_Generated_Image_jclkdwjclkdwjclk-1.png";
import imgSchola from "../../imports/Gemini_Generated_Image_7qzwoj7qzwoj7qzw-2.png";
import imgSuno from "../../imports/WhatsApp_Image_2026-05-03_at_9.53.37_PM_(1).jpeg";

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
    image: imgFintech,
    link: "/project/fintech",
    description: "Collapsing a 5-step CIBIL check process into a single tap using native OS layer biometrics."
  },
  {
    id: 2,
    title: "schola",
    category: "product design . 2025",
    image: imgSchola,
    link: "/project/ecommerce",
    description: "Bridging the gap between parents and teachers with a unified communication ecosystem."
  },
  {
    id: 3,
    title: "सुनो",
    category: "design for special needs . 2026",
    image: imgSuno,
    link: "/project/special-needs",
    description: "Designing empathetic, accessible digital experiences for special needs."
  }
];
