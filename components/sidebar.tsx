import styled from "styled-components";
import Image from "next/image";
const SidebarFilters = () => {
  return (
    <Sidebar>
      <Image
        width={298}
        height={1031}
        src="/images/sidebar.png"
        alt="sidebar"
      />
    </Sidebar>
  );
};

export default SidebarFilters;

const Sidebar = styled.div`
  display: none;
  color: #000000;
  left: 0;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: 1200px) {
    display: block;
  }
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
