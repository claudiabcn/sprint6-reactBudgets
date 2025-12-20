import { Service } from "./types";

export const services: Service[] = [
  {
    id: "seo",
    name: "🔎 SEO",
    price: 300,
    selected: false,
    description:
      "Search engine optimization to increase organic visibility and attract quality traffic.",
  },
  {
    id: "ads",
    name: "📢 Advertising",
    price: 400,
    selected: false,
    description:
      "Management of paid campaigns (PPC) on platforms such as Google Ads and social media.",
  },
  {
    id: "web",
    name: "🌐 Website",
    price: 500,
    selected: false,
    description:
      "Design and development of a modern, responsive, and user-optimized website.",
    pages: 1,
    languages: 1,
  },
];

export const helpModalContent = {
  title: "ℹ️ Help Information",
  pages: {
    title: "📄 Number of Pages",
    description:
      "The number of pages refers to the different sections or views your website will have (home, services, contact, etc.). Each additional page increases the project cost.",
  },
  languages: {
    title: "🌍 Number of Languages",
    description:
      "Indicates how many languages your website will be available in. A multilingual site allows you to reach a wider audience, but requires translation and adaptation of all content.",
  },
  additionalCost: "Additional cost:",
  formula: "(Pages + Languages) × 30€",
  closeButton: "Got it",
};

export const serviceCardTexts = {
  webOptions: "Website Options",
  helpButtonTitle: "Help",
};
