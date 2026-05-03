import { createBrowserRouter } from "react-router";
import Home from "./Home";
import About from "./About";
import CaseStudy from "../imports/pasted_text/fintech-case-study.tsx";
import ExperienceFlow from "../imports/pasted_text/payment-icons.tsx";
import WebsiteHero from "../imports/pasted_text/website-hero.tsx";
import SpecialNeeds from "./SpecialNeeds";
import { ErrorBoundary } from "./ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/project/fintech",
    Component: CaseStudy,
  },
  {
    path: "/project/ecommerce",
    Component: WebsiteHero,
  },
  {
    path: "/project/special-needs",
    Component: SpecialNeeds,
  },
  {
    path: "/experience",
    Component: ExperienceFlow,
  },
  {
    path: "/prototype",
    Component: ExperienceFlow,
  }
]);
