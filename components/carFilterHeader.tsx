import Styled from "styled-components";

const CarFilterHeader = ({
  count,
  setFilter,
}: {
  count: number;
  setFilter: (filter: string) => void;
}) => {
  return (
    <CarFilterWrapper>
      <Container>
        <CountText>
          <ShowingSpan>Showing </ShowingSpan> {count} cars
        </CountText>
        <ButtonGroup>
          <FilterButton onClick={() => setFilter("all")}>All</FilterButton>
          <FilterButton onClick={() => setFilter("used")}>Used</FilterButton>
          <FilterButton onClick={() => setFilter("new")}>New</FilterButton>
          <FilterButton onClick={() => setFilter("used")}>Offers</FilterButton>
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

@media (max-width: 500px) {
    width: 100%;
}

`;

const CarFilterWrapper = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #ffffff;
@media (min-width: 500px) {
padding: 20px;
}

`;

const CountText = Styled.p`
display: none;
 font-size: 18px;
    margin: 0;
    color: #000000;
    font-weight: 700;
@media (min-width: 500px) {
    display: flex;
    gap: 5px;
}
`;

const ButtonGroup = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    @media (min-width: 500px) {
    gap: 10px;
    width: initial;
    }
`;

const FilterButton = Styled.button`
border: none;
padding: 8px 25px 8px 25px;
height: 30px;
background: #ffffff;
color: #55595D;
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
@media (min-width: 500px) {
  border: 1px solid #D1D6E0;
  border-radius: 12px;
  background: #f8f8f8;
}



`;

const DropdownSection = Styled.div`
display: none;
@media (min-width: 768px) {
  display: flex;
  gap: 20px;
}
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

const ShowingSpan = Styled.span`
display: none;
@media (min-width: 768px) {
  display: block;
}
`;
