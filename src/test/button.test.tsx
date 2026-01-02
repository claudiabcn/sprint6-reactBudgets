import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../common/components/Button";

describe("Button Component", () => {
  
  it("should render with correct text", () => {
    render(<Button onClick={() => {}}>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should render with primary variant by default", () => {
    render(<Button onClick={() => {}}>Primary Button</Button>);
    const button = screen.getByRole("button");
    
    expect(button).toHaveClass("button-primary");
  });

  it("should render with secondary variant when specified", () => {
    render(<Button variant="secondary" onClick={() => {}}>Secondary Button</Button>);
    const button = screen.getByRole("button");
    
    expect(button).toHaveClass("button-secondary");
  });

  it("should apply full width class when fullWidth is true", () => {
    render(<Button fullWidth onClick={() => {}}>Full Width</Button>);
    
    expect(screen.getByRole("button")).toHaveClass("button-full");
  });

  it("should have correct type attribute", () => {
    render(<Button type="submit" onClick={() => {}}>Submit</Button>);
    
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should apply base styles", () => {
    render(<Button onClick={() => {}}>Styled Button</Button>);
    const button = screen.getByRole("button");
    
    expect(button).toHaveClass("button");
  });

  it("should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    
    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});