import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DropdownContainer, Flex, Title, Ul, MenuItem } from "./style";

const Dropdown: React.FC<DropdownProps> = ({
  isColumn,
  firstTitle,
  secondTitle,
  items,
}) => {
  return (
    <DropdownContainer>
      <Flex>
        <div>
          <Title>{firstTitle}</Title>
          <Ul>
            {items.map((item, index) => {
              return (
                <MenuItem key={index}>
                  <Image src={item.icon} alt={`${item.name} icon`} width={40} />
                  <Link href={item.name} style={{ textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </MenuItem>
              );
            })}
          </Ul>
        </div>
      </Flex>
    </DropdownContainer>
  );
};

export default Dropdown;
