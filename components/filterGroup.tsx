import { useState } from "react";
import styled from "styled-components";

const FilterGroup = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FilterSection>
      <FilterTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        {isOpen ? "-" : "+"}
      </FilterTitle>
      {isOpen && <FilterOptions>{children}</FilterOptions>}
    </FilterSection>
  );
};

export default FilterGroup;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin: 0 0 10px 0;
  cursor: pointer;
  padding-top: 20px;
`;

const FilterOptions = styled.div`
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
