import React from "react";
import { StandardButton, CloseButton } from "./style";
import { GrFormClose } from "react-icons/gr";

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  size,
  onClick,
}) => {
  return (
    <>
      {buttonType === "close" ? (
        <CloseButton onClick={() => (onClick ? onClick() : null)}>
          <GrFormClose />
        </CloseButton>
      ) : (
        <StandardButton
          buttonType={buttonType}
          size={size}
          onClick={() => (onClick ? onClick() : null)}
        >
          {children}
        </StandardButton>
      )}
    </>
  );
};

export default Button;
