import styled from "styled-components";
import { ReactComponent as BurgerIcon } from "../../src/assets/icons/menu-burger.svg";
import { ReactComponent as ShoppingCartIcon } from "../../src/assets/icons/shopping-cart.svg";
import { ReactComponent as LogoIcon } from "../../src/assets/icons/logo.svg";

const StyledHeader = styled.header`
  height: 74px;
  padding: 0 20px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const StyledBurgerIcon = styled(BurgerIcon)`
  width: 24px;
  height: 24px;
`;
const StyledShoppingIcon = styled(ShoppingCartIcon)`
  width: 24px;
  height: 24px;
`;

const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const StyledLogo = styled(LogoIcon)`
  width: 100px;
  height: 20px;
`;

function Header() {
  return (
    <StyledHeader>
      <MenuButton>
        <StyledBurgerIcon />
      </MenuButton>
      <Logo>
        <a href="#">
          <StyledLogo />
        </a>
        <span style={{ display: "none" }}>SUBWAY</span>
      </Logo>
      <MenuButton>
        <StyledShoppingIcon />
      </MenuButton>
    </StyledHeader>
  );
}

export default Header;
