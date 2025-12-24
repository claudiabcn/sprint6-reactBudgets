import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import BudgetCalculator from "../pages/BudgetPage";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("../features/budgetCalculator/hooks/useBudgetServices", () => ({
  useBudgetServices: () => ({
    services: [
      { id: "seo", name: "SEO", price: 300, selected: false },
      { id: "ads", name: "Google Ads", price: 400, selected: false },
      { id: "web", name: "Web", price: 500, selected: false, pages: 1, languages: 1 },
    ],
    setServices: vi.fn(),
    isAnnualPayment: false,
    setIsAnnualPayment: vi.fn(),
    toggleAnnualPayment: vi.fn(),
    handleServiceChange: vi.fn(),
    handlePagesChange: vi.fn(),
    handleLanguagesChange: vi.fn(),
  }),
}));

vi.mock("../features/budgetCalculator/hooks/useUrlSync", () => ({
  useUrlSync: () => ({
    getShareableUrl: vi.fn(() => "http://localhost:3000/budget?services=seo"),
  }),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("BudgetCalculator Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("should render the Return to Welcome Page button", () => {
    renderWithRouter(<BudgetCalculator />);
    expect(screen.getByText("← Return to Welcome Page")).toBeInTheDocument();
  });

  it("should navigate to home when Return button is clicked", async () => {
    const user = userEvent.setup();
    renderWithRouter(<BudgetCalculator />);
    
    const returnButton = screen.getByText("← Return to Welcome Page");
    await user.click(returnButton);
    
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should render Budget title", () => {
    renderWithRouter(<BudgetCalculator />);
    expect(screen.getByText("Budget")).toBeInTheDocument();
  });

  it("should render all service cards", () => {
    renderWithRouter(<BudgetCalculator />);
    
    expect(screen.getByText("SEO")).toBeInTheDocument();
    expect(screen.getByText("Google Ads")).toBeInTheDocument();
    expect(screen.getByText("Web")).toBeInTheDocument();
  });

  it("should render BudgetSummary component", () => {
    renderWithRouter(<BudgetCalculator />);
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });

  it("should render ShareButton component", () => {
    renderWithRouter(<BudgetCalculator />);
    expect(screen.getByRole("button", { name: /share/i })).toBeInTheDocument();
  });

});