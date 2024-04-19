import styled from "styled-components";

const FinanceBanner = () => {
  return (
    <BannerContainer>
      <FinanceText>
        <Title>Finance a new or used car</Title>
        <Subtext>
          {" "}
          Adjust the options to find the finance arrangement that suits you.
        </Subtext>
      </FinanceText>
      <DropdownSection>
        <Dropdown>
          <option value="" disabled selected>
            Deposit
          </option>
          <option value="1000">Less than 1000</option>
          <option value="1000+">1000 - 5000</option>
          <option value="5000+">5000+</option>
        </Dropdown>
        <Dropdown>
          <option value="" disabled selected>
            Mileage
          </option>
          <option value="1000">Less than 1000</option>
          <option value="1000+">1000 - 5000</option>
          <option value="5000+">5000+</option>
        </Dropdown>
        <Dropdown>
          <option value="" disabled selected>
            Period
          </option>
          <option value="1000">Less than 1000</option>
          <option value="1000+">1000 - 5000</option>
          <option value="5000+">5000+</option>
        </Dropdown>
        <Dropdown>
          <option value="" disabled selected>
            Budget
          </option>
          <option value="1000">Less than 1000</option>
          <option value="1000+">1000 - 5000</option>
          <option value="5000+">5000+</option>
        </Dropdown>
      </DropdownSection>
    </BannerContainer>
  );
};

export default FinanceBanner;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 0 0 0 50px;
  background-color: #282338;
  height: 137px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const FinanceText = styled.div`
  max-width: 25%;
`;

const Title = styled.h2`
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
`;

const Subtext = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;

const DropdownSection = styled.div`
  display: flex;
  gap: 20px;
`;

const Dropdown = styled.select`
  padding: 8px 16px;
  width: 217px;
  border-radius: 16px;
  background-color: #3f3a50;
  border: none;
`;
