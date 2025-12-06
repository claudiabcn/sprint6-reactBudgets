import { Service } from "./types";

export const services: Service[] = [
  {
    id: 1,
    name: "🔎 SEO",
    price: 300,
    selected: false,
    description:
      "Search engine optimization to increase organic visibility and attract quality traffic.",
  },
  {
    id: 2,
    name: "📢 Advertising",
    price: 400,
    selected: false,
    description:
      "Management of paid campaigns (PPC) on platforms such as Google Ads and social media.",
  },
  {
    id: 3,
    name: "🌐 Website",
    price: 500,
    selected: false,
    description:
      "Design and development of a modern, responsive, and user-optimized website.",
    pages: 1,
    languages: 1,
  },
];
