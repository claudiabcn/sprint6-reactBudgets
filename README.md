# ⚡️ SPRINT 6: Using React for Budget Calculator

This project is a comprehensive budget calculator application built with React and TypeScript, allowing users to create, customize, and share service budget estimates for SEO campaigns, Ads, and web development services.

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

## 📋 Files:

```
SPRINT6-REACTBUDGETS/
├── .gitignore
├── package.json
├── vite.config.ts
├── index.html
├── public/
└── src/
├── config/
│ ├── appData.ts
│ └── types.ts
├── common
│ ├── components/
│ │ └── button.tsx
├── features/
│ ├── budgetCalculator/
│ │ ├── components/
│ │ │ ├── AnnualPaymentToggle.tsx
│ │ │ ├── HelpModal.tsx
│ │ │ ├── ServiceCard.tsx
│ │ │ └── ShareButton.tsx
│ │ ├── hooks/
│ │ │ ├── useBudgetServices.ts
│ │ │ └── useUrlSync.ts
│ │ ├── utils/
│ │ │ └── calculateTotal.ts
│ │ └── BudgetSummary.tsx
│ ├── budgetForm/
│ │ ├── components/
│ │ │ └── FormInput.tsx
│ │ ├── hooks/
│ │ │ └── useBudgetForm.ts
│ ├── utils/
│ ├── validators.ts
│ │ └── BudgetForm.tsx
│ └── budgetHistory/
│ ├── components/
│ │ ├── BudgetCard.tsx
│ │ └── EmptyState.tsx
│ ├── utils/
│ ├── formatters.ts
│ └── BudgetHistory.tsx
├── pages/
│ ├── BudgetPage.tsx
│ └── WelcomePage.tsx
├── App.jsx
├── main.jsx
└── index.css
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

<img width="669" height="615" alt="demo-sp6" src="https://github.com/user-attachments/assets/4d7e69ed-db74-4095-a6db-c701d25ba241" />

## ⭐ Learnings and challenges:

This sprint represented a significant step in building a full-featured React application with complex state management and URL synchronization. Key learnings included implementing custom hooks for state logic (useBudgetServices, useUrlSync), managing bidirectional URL-state synchronization, and designing a feature-based architecture that promotes scalability and maintainability. The most interesting challenge was creating a shareable URL system that preserves the entire budget configuration, requiring careful handling of query parameters and React Router's useSearchParams. Additionally, implementing the annual discount logic across multiple components reinforced the importance of centralized state management and proper prop drilling strategies. Building reusable components like the button helped establish consistent UI patterns throughout the application.
