// NavBar.tsx
import React from "react";
import styled from "styled-components";

// Styled components
const Navbar = styled.nav`
  width: calc(100%);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2dvw;
`;

const NavSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 0 0 0 5dvw;
  // @media screen and (max-width: 768px) {
  //   width: 100vw;
  // }

  // @media screen and (max-width: 400px) {
  //   width: 10vw;
  // }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Noto Sans TC", sans-serif;
  color: #333;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 450px) {
    width: 30%;
    font-size: 1.0rem;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #666;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    height: 2px;
    content: "";
    display: block;
    background: #000;
    transition: all 0.3s;
  }
  @media (max-width: 510px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 415px) {
    font-size: 0.6rem;
  }
`;

const MenuItemButton = styled.button`
  color: #333;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #666;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    height: 2px;
    content: "";
    display: block;
    justify-content: center;
    align-items: center;
    background: #000;
    transition: all 0.45s ease-in;
  }
  @media (max-width: 510px) {
    font-size: 0.8rem;
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 415px) {
    font-size: 0.6rem;
  }
`;

interface IProps {
  // message: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Component
const NavBar: React.FC<IProps> = ({ handleClick }) => {

  return (
    <Navbar role="navigation">
      <NavContainer>
        <NavSubContainer>
          <Logo href="/">NTUEE Artfest</Logo>
          {/* <Span/> */}
          <Menu>
            <MenuItem href="/visit">來去逛逛</MenuItem>
            <MenuItem href="/introductions">本屆作品</MenuItem>
            {/* <MenuItem href="/news">最新消息</MenuItem> */}
            <MenuItem href="/about">關於我們</MenuItem>
            <MenuItemButton onClick={handleClick}>聯絡資訊</MenuItemButton>
          </Menu>
        </NavSubContainer>
      </NavContainer>
    </Navbar>
  );
};

export default NavBar;
