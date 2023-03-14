import React from "react";
import { DotTextContainer, Dot, Text } from "./style";

const DotText: React.FC<DotTextProps> = ({ children, variant, align }) => {
  return (
    <DotTextContainer align={align}>
      <Dot variant={variant}></Dot>
      <Text variant={variant}>{children}</Text>
    </DotTextContainer>
  );
};

export default DotText;
