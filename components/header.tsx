import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        CarDealer <UKSpan>UK</UKSpan>
      </Logo>
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Our cars</NavLink>
        <NavLink href="#">Sell your Car</NavLink>
        <NavLink href="#">Apply for finance</NavLink>
        <NavLink href="#">About us</NavLink>
        <NavLink href="#">Blog</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
      <ButtonSection>
        <Button>Call us</Button>
        <Button>Email us</Button>
        <ContactButton>Contact</ContactButton>
        <MenuText>Menu</MenuText>
      </ButtonSection>
    </HeaderContainer>
  );
};

export default Header;

const UKSpan = styled.span`
  color: #7572ff;
  font-size: 12px;
`;

const MenuText = styled.p`
  display: flex;
  font-size: 16px;
  color: #000000;
  cursor: pointer;
  align-items: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #000000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #000000;
  font-size: 16px;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  display: none;
  padding: 11px 25px 12px 25px;
  border: none;
  border-radius: 16px;
  background-color: #82f7ff;
  color: #000000;
  cursor: pointer;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ContactButton = styled(Button)`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
