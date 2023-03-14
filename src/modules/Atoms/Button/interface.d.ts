interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "outlined" | "clear" | "icon" | "close";
  size?: "medium" | "large" | "extraLarge";
  arrow?: boolean;
  hovered?: boolean;
  btnKey?: string;
  wrapperClassName?: string;
  arrowOpenInMobile?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
