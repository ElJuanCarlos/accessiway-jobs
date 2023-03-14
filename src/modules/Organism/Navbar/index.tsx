import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "@/modules/Organism/Dropdown";
import AccessWidget from "../../../assets/svg/accesswidget.svg";
import AccessScan from "../../../assets/svg/accessscan.svg";
import { Nav, Ul, MenuFlex, Li } from "./style";

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("");

  function handleDropdown(item: string) {
    setSelectedDropdown(item);
    setSelected(!selected);
  }

  useEffect(() => {
    if (selectedDropdown !== "") {
      setSelected(true);
    }
  }, [selectedDropdown]);

  const items = [
    {
      name: "accessWidget",
      icon: AccessWidget,
    },
    {
      name: "accessScan",
      icon: AccessScan,
    },
  ];

  return (
    <Nav>
      <Ul>
        <MenuFlex onClick={() => handleDropdown("accessWidget")}>
          <Li>
            <Link
              href="joblist"
              style={{ textDecoration: "none", color: "#0d0d0d" }}
            >
              Jobs
            </Link>
          </Li>
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("approfondimenti")}>
          <Li>
            <Link
              href="blog"
              style={{
                textDecoration: "none",
                color: "#adadad",
                cursor: "not-allowed",
              }}
            >
              Approfondimenti
            </Link>
          </Li>
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("soluzioni")}>
          <Li>
            <Link
              href="blog"
              style={{
                textDecoration: "none",
                color: "#adadad",
                cursor: "not-allowed",
              }}
            >
              Soluzioni
            </Link>
          </Li>
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("chi siamo")}>
          <Li>
            <Link
              href="blog"
              style={{
                textDecoration: "none",
                color: "#adadad",
                cursor: "not-allowed",
              }}
            >
              Chi siamo
            </Link>
          </Li>
        </MenuFlex>
        {/* <MenuFlex onClick={() => handleDropdown("soluzioni")}>
          <Flex>
            <Li>Soluzioni</Li>
            <IconWrapper
              visible={selectedDropdown === "soluzioni" ? "visible" : "hidden"}
            >
              <IoIosArrowDown />
            </IconWrapper>
          </Flex>
          {selected ? (
            <DropdownWrapper
              visible={selectedDropdown === "soluzioni" ? "visible" : "hidden"}
            >
              <Dropdown isColumn={true} firstTitle="PRODOTTI" items={items} />
            </DropdownWrapper>
          ) : null}
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("settori")}>
          <Flex>
            <Li>Settori</Li>
            <IoIosArrowDown />
          </Flex>
          {selected ? (
            <DropdownWrapper
              visible={selectedDropdown === "settori" ? "visible" : "hidden"}
            >
              <Dropdown isColumn={true} firstTitle="PRODOTTI" items={items} />
            </DropdownWrapper>
          ) : null}
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("approfondimenti")}>
          <Flex>
            <Li>Approfondimenti</Li>
            <IoIosArrowDown />
          </Flex>
          {selected ? (
            <DropdownWrapper
              visible={
                selectedDropdown === "approfondimenti" ? "visible" : "hidden"
              }
            >
              <Dropdown isColumn={true} firstTitle="PRODOTTI" items={items} />
            </DropdownWrapper>
          ) : null}
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("testimonials")}>
          <Flex>
            <Li>Testimonials</Li>
            <IoIosArrowDown />
          </Flex>
          {selected ? (
            <DropdownWrapper
              visible={
                selectedDropdown === "testimonials" ? "visible" : "hidden"
              }
            >
              <Dropdown isColumn={true} firstTitle="PRODOTTI" items={items} />
            </DropdownWrapper>
          ) : null}
        </MenuFlex>
        <MenuFlex onClick={() => handleDropdown("chi-siamo")}>
          <Flex>
            <Li>Chi siamo</Li>
            <IoIosArrowDown />
          </Flex>
          {selected ? (
            <DropdownWrapper
              visible={selectedDropdown === "chi-siamo" ? "visible" : "hidden"}
            >
              <Dropdown isColumn={true} firstTitle="PRODOTTI" items={items} />
            </DropdownWrapper>
          ) : null}
        </MenuFlex> */}
      </Ul>
    </Nav>
  );
};

export default Navbar;
