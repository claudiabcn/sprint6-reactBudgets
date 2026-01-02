import { ButtonProps } from "../../config/types";

const Button = ({
  onClick,
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
}: ButtonProps) => {
  const variantClass =
    variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variantClass} ${fullWidth ? "button-full" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
