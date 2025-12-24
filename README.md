# ⚡️ SPRINT 6: Using React for Budget Calculator

This project is a comprehensive budget calculator application built with **React** and **TypeScript**, allowing users to create, customize, and share service budget estimates.

## 🎯 Objectives:

- **Feature-Based Architecture:** Organized code structure with clear separation between modules (budgetCalculator, budgetForm, budgetHistory) using strict TypeScript implementation.
- **URL Sharing:** Share complete budget configurations via URL with automatic state restoration when the link is opened.
- **Dynamic Pricing:** Real-time price calculation for multiple services (SEO, Ads, Web) with custom options and 20% annual payment discount.
- **Reusable Components:** Shared components (Button, modals) with consistent styling and clean separation of concerns for maintainability.
- **Responsive Design:** Mobile-first layout with smooth animations and interactive UI that adapts across all device sizes.

## 💻 Technology Stack:

- **React**
- **TypeScript**
- **Vite**
- **CSS**
- **npm**

## 📋 Files:

```├── SPRINT5-REACTBOOKMARK/
│   ├── .gitignore
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.ts
│   ├── public/
│   │   ├── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Icon.tsx
│   │   │   │   └── Logo.tsx
│   │   │   ├── molecules/
│   │   │   │   ├── FaqItem.tsx
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   └── organisms/
│   │   │       ├── Contact.tsx
│   │   │       ├── Extensions.tsx
│   │   │       ├── Faq.tsx
│   │   │       ├── Features.tsx
│   │   │       ├── FooterNav.tsx
│   │   │       ├── HeaderNav.tsx
│   │   │       └── Hero.tsx
│   │   ├── config/
│   │   │   ├── appData.ts
│   │   │   └── types.ts
│   │   ├── styles/
│   │   │   ├── _extensions.css
│   │   │   ├── _faq.css
│   │   │   ├── _features.css
│   │   │   ├── _footer.css
│   │   │   ├── _general.css
│   │   │   ├── _header.css
│   │   │   └── _newsletter.css
│   │   ├── test/
│   │   │   ├── Extensions.test.tsx
│   │   │   ├── Hero.test.tsx
│   │   │   └── Newsletter.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── setup.ts
```

## 🛠 Installation:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/claudiabcn/sprint6-reactBudgets.git
    ```

2.  **Install Dependencies:**

    ```bash
    cd sprint6-reactBudgets
    npm install
    ```

3.  **Run Development Server:**
    npm run dev

4.  **Run the Tests:** `npm test`

## 📸 Demo:

https://sprint6-react-budgets.vercel.app/

<img width="1207" height="593" alt="image" src="https://github.com/user-attachments/assets/0a31e6ac-ec18-4f26-85ef-0300908aec51" />

## ⭐ Learnings and challenges:

This sprint represented a significant step in building a full-featured React application with complex state management and URL synchronization. Key learnings included implementing custom hooks for state logic (useBudgetServices, useUrlSync), managing bidirectional URL-state synchronization, and designing a feature-based architecture that promotes scalability and maintainability. The most interesting challenge was creating a shareable URL system that preserves the entire budget configuration, requiring careful handling of query parameters and React Router's useSearchParams. Additionally, implementing the annual discount logic across multiple components reinforced the importance of centralized state management and proper prop drilling strategies. Building reusable components like the Button helped establish consistent UI patterns throughout the application.
