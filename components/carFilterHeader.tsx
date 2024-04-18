import Styled from "styled-components";

const CarFilterHeader = ({ count, setFilter }) => {
  return (
    <CarFilterWrapper>
      <Container>
        <CountText>Showing {count} cars</CountText>
        <ButtonGroup>
          <FilterButton onClick={() => setFilter("all")}>All</FilterButton>
          <FilterButton onClick={() => setFilter("used")}>Used</FilterButton>
          <FilterButton onClick={() => setFilter("new")}>New</FilterButton>
          <FilterButton onClick={() => setFilter("used")}>Offer</FilterButton>
        </ButtonGroup>
      </Container>
      <DropdownSection>
        <Dropdown>
          <option>Lowest Price</option>
        </Dropdown>
      </DropdownSection>
    </CarFilterWrapper>
  );
};

export default CarFilterHeader;

const Container = Styled.div`
display: flex;
gap: 20px;
align-items: center;
`;

const CarFilterWrapper = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
background-color: #ffffff;
`;

const CountText = Styled.p`
    font-size: 18px;
    margin: 0;
    color: #000000;
    font-weight: 700;
`;

const ButtonGroup = Styled.div`
    display: flex;
    gap: 10px;
`;

const FilterButton = Styled.button`
padding: 8px 25px 8px 25px;
height: 30px;
background: #f8f8f8;
color: #55595D;
border: 1px solid #D1D6E0;
border-radius: 12px;
cursor: pointer;
outline: none;
&:active {
    background: #d8d8d8;
    color: #FFFFFF
}
&:focus {
    background: #7572FF;
    color: #FFFFFF

}

`;

const DropdownSection = Styled.div`
  display: flex;
  gap: 20px;
`;

const Dropdown = Styled.select`
  height: 50px;
  width: 160px;
  border-radius: 16px;
  background-color: #F6F7FB;
  border: none;
  color: #000000;
    padding: 0 10px;
`;
