import React from "react";
import { FilterContainer, Text, Flex, Select, Input } from "./style";

interface FilterBarProps {
  handleDepartment: (e: string) => void;
  handleLocation: (e: string) => void;
  handleSearch: (e: string) => void;
}
const FilterBar = ({
  handleDepartment,
  handleLocation,
  handleSearch,
}: FilterBarProps) => {
  return (
    <FilterContainer>
      <Flex>
        <Text>Filter by:</Text>

        <Select
          name="departments"
          id="departments"
          onChange={(e) => handleDepartment(e.target.value)}
        >
          <option value="it&design">IT&Design</option>
          <option value="sales">Sales</option>
          <option value="admin">Admin</option>
          <option value="marketing">Marketing</option>
        </Select>
        <Select
          name="location"
          id="location"
          onChange={(e) => handleLocation(e.target.value)}
        >
          <option value="turin">Turin</option>
          <option value="paris">Paris</option>
          <option value="berlin">Berlin</option>
          <option value="vienna">Vienna</option>
        </Select>
        <Input
          type="text"
          placeholder="Search by name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Flex>
    </FilterContainer>
  );
};

export default FilterBar;
