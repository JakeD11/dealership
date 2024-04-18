import styled from "styled-components";
import FilterGroup from "./filterGroup";

const Sidebar = styled.div`
  min-width: 298px;
  color: #000000;
  left: 0;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 8px;
  width: calc(50% - 5px);
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ResetButton = styled.button`
  padding: 8px 25px 8px 25px;
  height: 30px;
  background: #f8f8f8;
  color: #55595d;
  border: 1px solid #d1d6e0;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  &:active {
    background: #d8d8d8;
    color: #ffffff;
  }
  &:focus {
    background: #7572ff;
    color: #ffffff;
  }
`;

const SidebarFilters = () => {
  return (
    <Sidebar>
      <TitleWrapper>
        <Title>Filters</Title>
        <ResetButton>Reset</ResetButton>
      </TitleWrapper>
      <FilterGroup title="Budget">
        <Label>
          Min Price
          <Input type="number" placeholder="Min price" />
        </Label>
        <Label>
          Max Price
          <Input type="number" placeholder="Max price" />
        </Label>
      </FilterGroup>
      <FilterGroup title="Specifications">
        <FilterGroup title="Fuel type">
          <Label>
            Petrol
            <Input type="checkbox" />
          </Label>
          <Label>
            Diesel
            <Input type="checkbox" />
          </Label>
          <Label>
            Electric
            <Input type="checkbox" />
          </Label>
        </FilterGroup>
        <FilterGroup title="Body Type">
          <Label>
            Petrol
            <Input type="checkbox" />
          </Label>
          <Label>
            Diesel
            <Input type="checkbox" />
          </Label>
          <Label>
            Electric
            <Input type="checkbox" />
          </Label>
        </FilterGroup>
      </FilterGroup>
    </Sidebar>
  );
};

export default SidebarFilters;
