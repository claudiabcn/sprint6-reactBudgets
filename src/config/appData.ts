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

export const emptyState = {
  noBudgets: "No budgets saved yet",
  createBudgets: "Create your first budget to see it here",
};

export const welcomePageContent = {
  hero: {
    title: "Transform Your Digital Presence",
    subtitle: "Solutions that Drive Real Growth"
  },
  services: [
    {
      id: 'seo',
      emoji: "🔎",
      title: "Organic Dominance (SEO)",
      tagline: "Dominate Search. Attract Quality Traffic.",
      description: "Go beyond rankings. We implement a strategic, technical SEO approach that builds authority, increases your organic visibility, and ensures you capture only the highest-quality leads searching for your solutions.",
      colorFrom: "from-green-50",
      colorTo: "to-emerald-50",
      borderColor: "border-green-500",
      taglineColor: "text-green-700"
    },
    {
      id: 'ads',
      emoji: "📢",
      title: "Conversion-Focused Campaigns (Advertising)",
      tagline: "Ads That Convert. Not Just Impress.",
      description: "Stop wasting budget on clicks that don't convert. Our expert team manages high-performing PPC campaigns across Google Ads and social media, driving measurable results and maximizing your return on ad spend (ROAS).",
      colorFrom: "from-orange-50",
      colorTo: "to-amber-50",
      borderColor: "border-orange-500",
      taglineColor: "text-orange-700"
    },
    {
      id: 'web',
      emoji: "🌐",
      title: "High-Performance Website (Website)",
      tagline: "The Foundation for Growth. Built to Perform.",
      description: "A website is your hardest-working employee. We deliver modern, responsive, and blazing-fast web design and development, optimized not just for aesthetics, but for seamless user experience and the highest conversion rates.",
      colorFrom: "from-blue-50",
      colorTo: "to-indigo-50",
      borderColor: "border-blue-500",
      taglineColor: "text-blue-700"
    }
  ],
  cta: {
    buttonText: "Get your budget here →"
  }
};
