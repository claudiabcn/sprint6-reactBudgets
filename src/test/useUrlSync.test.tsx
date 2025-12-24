import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter} from "react-router-dom";
import { useUrlSync } from "../features/budgetCalculator/hooks/useUrlSync";
import { Service } from "../config/types";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("useUrlSync Hook", () => {
  const mockServices: Service[] = [
    {
      id: "seo",
      name: "SEO",
      price: 300,
      selected: false,
      description: "SEO Service",
    },
    {
      id: "ads",
      name: "Google Ads",
      price: 400,
      selected: false,
      description: "Google Ads Service",
    },
    {
      id: "web",
      name: "Web",
      price: 500,
      selected: false,
      description: "Web Service",
      pages: 1,
      languages: 1,
    },
  ];

  const mockSetServices = vi.fn();
  const mockSetIsAnnualPayment = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    window.history.pushState({}, "", "/budget");
  });

  it("should return getShareableUrl function", () => {
    const { result } = renderHook(
      () =>
        useUrlSync(
          mockServices,
          false,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      { wrapper }
    );

    expect(result.current.getShareableUrl).toBeDefined();
    expect(typeof result.current.getShareableUrl).toBe("function");
  });

  it("should parse services from URL on mount", async () => {
    window.history.pushState({}, "", "/budget?services=seo,ads");

    renderHook(
      () =>
        useUrlSync(
          mockServices,
          false,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(mockSetServices).toHaveBeenCalled();
      const calledServices = mockSetServices.mock.calls[0][0];
      expect(calledServices[0].selected).toBe(true); // seo
      expect(calledServices[1].selected).toBe(true); // ads
      expect(calledServices[2].selected).toBe(false); // web
    });
  });

  it("should parse pages and languages from URL for web service", async () => {
    window.history.pushState(
      {},
      "",
      "/budget?services=web&pages=5&languages=3"
    );

    renderHook(
      () =>
        useUrlSync(
          mockServices,
          false,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(mockSetServices).toHaveBeenCalled();
      const calledServices = mockSetServices.mock.calls[0][0];
      const webService = calledServices.find((s: Service) => s.id === "web");
      expect(webService.selected).toBe(true);
      expect(webService.pages).toBe(5);
      expect(webService.languages).toBe(3);
    });
  });

  it("should parse annual payment from URL", async () => {
    window.history.pushState({}, "", "/budget?annual=true");

    renderHook(
      () =>
        useUrlSync(
          mockServices,
          false,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(mockSetIsAnnualPayment).toHaveBeenCalledWith(true);
    });
  });

  it("should update URL when services change", async () => {
    const selectedServices: Service[] = [
      {
        id: "seo",
        name: "SEO",
        price: 300,
        selected: true,
        description: "SEO Service",
      },
      {
        id: "ads",
        name: "Google Ads",
        price: 400,
        selected: false,
        description: "Google Ads Service",
      },
      {
        id: "web",
        name: "Web",
        price: 500,
        selected: false,
        description: "Web Service",
        pages: 1,
        languages: 1,
      },
    ];

    const { rerender } = renderHook(
      ({ services }) =>
        useUrlSync(services, false, mockSetServices, mockSetIsAnnualPayment),
      {
        wrapper,
        initialProps: { services: mockServices },
      }
    );

    rerender({ services: selectedServices });

    await waitFor(() => {
      expect(window.location.search).toContain("services=seo");
    });
  });

  it("should update URL with pages and languages when web service is selected", async () => {
    const selectedServices: Service[] = [
      {
        id: "seo",
        name: "SEO",
        price: 300,
        selected: false,
        description: "SEO Service",
      },
      {
        id: "ads",
        name: "Google Ads",
        price: 400,
        selected: false,
        description: "Google Ads Service",
      },
      {
        id: "web",
        name: "Web",
        price: 500,
        selected: true,
        description: "Web Service",
        pages: 3,
        languages: 2,
      },
    ];

    const { rerender } = renderHook(
      ({ services }) =>
        useUrlSync(services, false, mockSetServices, mockSetIsAnnualPayment),
      {
        wrapper,
        initialProps: { services: mockServices },
      }
    );

    rerender({ services: selectedServices });

    await waitFor(() => {
      expect(window.location.search).toContain("services=web");
      expect(window.location.search).toContain("pages=3");
      expect(window.location.search).toContain("languages=2");
    });
  });

  it("should update URL when annual payment is enabled", async () => {
    const { rerender } = renderHook(
      ({ isAnnual }) =>
        useUrlSync(
          mockServices,
          isAnnual,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      {
        wrapper,
        initialProps: { isAnnual: false },
      }
    );

    rerender({ isAnnual: true });

    await waitFor(() => {
      expect(window.location.search).toContain("annual=true");
    });
  });

  it("should clear URL params when no services are selected", async () => {
    const noSelectedServices: Service[] = [
      {
        id: "seo",
        name: "SEO",
        price: 300,
        selected: false,
        description: "SEO Service",
      },
      {
        id: "ads",
        name: "Google Ads",
        price: 400,
        selected: false,
        description: "Google Ads Service",
      },
      {
        id: "web",
        name: "Web",
        price: 500,
        selected: false,
        description: "Web Service",
        pages: 1,
        languages: 1,
      },
    ];

    renderHook(
      () =>
        useUrlSync(
          noSelectedServices,
          false,
          mockSetServices,
          mockSetIsAnnualPayment
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(window.location.search).toBe("");
    });
  });
});
