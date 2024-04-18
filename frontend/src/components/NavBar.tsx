// NavBar.tsx
import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Navbar = styled.nav`
  width: 100vw;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #000;
  position: fixed;
  z-index: 10000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const NavSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Noto Sans TC", sans-serif;
  color: #333;
  text-decoration: none;
`;

const Span = styled.span`
  display: inline-block;
  margin-left: 45vw;
`;
const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const MenuIcon = styled.span`
  width: 20px;
  height: 2px;
  background-color: #333;
  display: block;
  margin-bottom: 4px;
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
`;

interface IProps {
  // message: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Component
const NavBar: React.FC<IProps> = ({ handleClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar role="navigation">
      <NavContainer>
        <NavSubContainer>
          <Logo href="/">ntuee_artfest</Logo>
          <Span/>
          <Menu>
            <MenuItem href="/visit">來藝術展逛逛</MenuItem>
            <MenuItem href="/introductions">本屆作品</MenuItem>
            <MenuItem href="/news">最新消息</MenuItem>
            <MenuItem href="/about">關於我們</MenuItem>
            <MenuItemButton onClick={handleClick}>聯絡資訊</MenuItemButton>
          </Menu>
        </NavSubContainer>
      </NavContainer>
    </Navbar>
  );
};

export default NavBar;
