import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/sandwich-alt.svg";
import { ReactComponent as OrderIcon } from "../assets/icons/shopping-cart.svg";
import { ReactComponent as StoreIcon } from "../assets/icons/shop.svg";
import { ReactComponent as PromoIcon } from "../assets/icons/gift.svg";

const BottomNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding-bottom: 10px;
  background-color: white;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: end;
  z-index: 1000; /* 다른 요소들보다 위에 표시되도록 */
`;

const NavButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  width: 70px;
  height: 64px;
  font-weight: bold;

  &:nth-of-type(3) {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
  }

  svg {
    width: 24px;
    height: 24px;
    margin: 10px 0;
  }

  &:nth-of-type(3) svg {
    width: 28px;
    height: 28px;
    margin: 14px 0 12px 0;
  }

  &.active {
    color: #00964e;
  }

  &.active svg {
    fill: #00964e;
  }
`;

function BottomNav() {
  return (
    <BottomNavBar>
      <NavButton className="active">
        <HomeIcon />
        <span>홈</span>
      </NavButton>
      <NavButton>
        <MenuIcon />
        <span>메뉴</span>
      </NavButton>
      <NavButton>
        <OrderIcon />
        <span>주문</span>
      </NavButton>
      <NavButton>
        <StoreIcon />
        <span>매장</span>
      </NavButton>
      <NavButton>
        <PromoIcon />
        <span>프로모션</span>
      </NavButton>
    </BottomNavBar>
  );
}

export default BottomNav;
