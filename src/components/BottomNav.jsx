import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/sandwich-alt.svg";
import { ReactComponent as OrderIcon } from "../assets/icons/shopping-cart.svg";
import { ReactComponent as StoreIcon } from "../assets/icons/shop.svg";
import { ReactComponent as PromoIcon } from "../assets/icons/gift.svg";
import OrderButtons from "./UI/OrderButtons";

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
`;

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
  z-index: 1001;
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
  transition: box-shadow 0.3s ease; /* box-shadow 애니메이션 추가 */

  &:nth-of-type(3) {
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    box-shadow: ${({ isModalOpen }) =>
      isModalOpen
        ? "0 0 12px rgba(0, 150, 78, 0.5)"
        : "0 0 8px rgba(0, 0, 0, 0.1)"};
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div`
  padding: 30px 20px 10px;
  width: 90%;
  box-sizing: border-box;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 8px 8px 0 0;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s
    forwards;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;

function BottomNav({ activeItem }) {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOrderClick = () => {
    setModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300); // 애니메이션 지속 시간과 일치시킴
  };

  return (
    <>
      <BottomNavBar>
        <NavButton
          className={activeItem === "home" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
          <span>홈</span>
        </NavButton>
        <NavButton
          className={activeItem === "menu" ? "active" : ""}
          onClick={() => navigate("/menu?type=sandwiches&type=all")}
        >
          <MenuIcon />
          <span>메뉴</span>
        </NavButton>
        <NavButton
          isModalOpen={isModalOpen} /* 상태를 전달하여 box-shadow 변경 */
          className={activeItem === "order" ? "active" : ""}
          onClick={handleOrderClick}
        >
          <OrderIcon />
          <span>주문</span>
        </NavButton>
        <NavButton
          className={activeItem === "store" ? "active" : ""}
          onClick={() => navigate("/store")}
        >
          <StoreIcon />
          <span>매장</span>
        </NavButton>
        <NavButton
          className={activeItem === "promo" ? "active" : ""}
          onClick={() => navigate("/promo")}
        >
          <PromoIcon />
          <span>프로모션</span>
        </NavButton>
      </BottomNavBar>

      {isModalOpen && (
        <ModalOverlay isOpen={!isClosing} onClick={closeModal}>
          <ModalContent
            isClosing={isClosing}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <OrderButtons />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default BottomNav;
