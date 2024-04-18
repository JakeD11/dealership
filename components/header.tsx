import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Car Dealership UK</Logo>
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
      </ButtonSection>
    </HeaderContainer>
  );
};

export default Header;

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
  padding: 11px 25px 12px 25px;
  border: none;
  border-radius: 16px;
  background-color: #82f7ff;
  color: #000000;
  cursor: pointer;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
`;
