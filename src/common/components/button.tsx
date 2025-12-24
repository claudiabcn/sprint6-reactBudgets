import { ButtonProps } from "../../config/types";

const Button = ({
  onClick,
  children,
  variant = "primary",
  type = "button",
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles =
    "font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300";

  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
    secondary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
