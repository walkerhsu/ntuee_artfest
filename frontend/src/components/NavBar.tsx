// NavBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Navbar = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Noto Sans TC', sans-serif;
  color: #333;
  text-decoration: none;
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

  &:hover{
    color: #666;
    opacity: 0.7;
  }
  &:hover::after{
    width: 100%;
    height: 2px;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    background: #000;
    transition: all .3s;
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

  &:hover{
    color: #666;
    opacity: 0.7;
  }
  &:hover::after{
    width: 100%;
    height: 2px;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    background: #000;
    transition: all .3s;
  }
`;

interface IProps {
  // message: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Component
const NavBar: React.FC <IProps> = ({handleClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar role="navigation">
      <NavContainer>
        <Logo href="/">2024 NTUEE ARTFEST</Logo>
        
        {(
          <Menu>
            <MenuItem href="/visit">來藝術展逛逛</MenuItem>
            <MenuItem href="/introductions">本屆作品</MenuItem>
            <MenuItem href="/news">最新消息</MenuItem>
            <MenuItem href="/about">關於我們</MenuItem>

            <MenuItemButton onClick={handleClick}>
              聯絡資訊
            </MenuItemButton>
            
          </Menu>
        )}
      </NavContainer>
    </Navbar>
  );
}

export default NavBar;