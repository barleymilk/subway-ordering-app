import { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as LogoIcon } from "../../src/assets/icons/logo.svg";
import { ReactComponent as DownIcon } from "../../src/assets/icons/angle-small-down.svg";
import OrderButtons from "./UI/OrderButtons";

const StyledLogo = styled(LogoIcon)`
  width: 100px;
  height: 20px;
`;

const StyledDownIcon = styled(DownIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.5s ease;

  ${(props) =>
    !props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const Backdrop = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  width: 90%;
  height: 100%;
  background-color: #f3f3f3;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0 15px 0 0;
  overflow-y: auto;
  padding-bottom: 100px;
`;

const LogoContainer = styled.div`
  height: 20px;
`;

const UserInfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 1.25rem;
    margin-right: 10px;
  }

  button {
    all: unset;
    cursor: pointer;
    font-size: 0.75rem;
    width: 60px;
    height: 24px;
    background-color: #d9d9d9;
    text-align: center;
    border-radius: 12px;
  }

  p:last-child {
    font-size: 0.8rem;
    color: #909090;
  }
`;

const MembershipInfo = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;

  p:first-child {
    margin-bottom: 10px;
  }
`;

const MembershipItem = styled.p`
  height: 20px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;

  span:last-child {
    font-weight: 700;
    color: #00964e;
  }
`;

const NavList = styled.ul`
  background-color: white;
  margin-top: 20px;
  border-radius: 15px;
  padding: 10px;
  font-size: 1.2rem;
`;

const NavItem = styled.li`
  padding: 8px 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

const SubMenuList = styled.ul`
  background-color: #f3f3f3;
  font-size: 0.9rem;
  padding: 0;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease; /* 부드러운 토글 애니메이션 */
`;

const SubMenuItem = styled.li`
  padding: 4px;
`;

function SideMenu({ isMenuOpen, closeMenu }) {
  const [menuOpen, setMenuOpen] = useState({
    menu: false,
    customerService: false,
  });

  const toggleMenu = (menuName) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  return (
    <>
      <Backdrop isOpen={isMenuOpen} onClick={closeMenu} />
      <Sidebar isOpen={isMenuOpen}>
        <LogoContainer>
          <a href="#">
            <StyledLogo />
          </a>
          <span style={{ display: "none" }}>SUBWAY</span>
        </LogoContainer>
        <UserInfoContainer>
          <div>
            <img src="src/assets/images/sandwich (1).png" alt="User" />
          </div>
          <UserInfoWrapper>
            <p>
              <span>OOO님</span>
              <button>로그아웃</button>
            </p>
            <p>example@test.com</p>
          </UserInfoWrapper>
        </UserInfoContainer>
        <MembershipInfo>
          <MembershipItem>
            <span>멤버십 포인트</span>
            <span>0P</span>
          </MembershipItem>
          <MembershipItem>
            <span>보유 쿠폰</span>
            <span>0</span>
          </MembershipItem>
        </MembershipInfo>
        <OrderButtons />
        <NavList>
          <NavItem>
            <div>알림함</div>
          </NavItem>
          <NavItem>
            <div onClick={() => toggleMenu("menu")}>
              <span>메뉴</span>
              <StyledDownIcon isOpen={menuOpen.menu} />
            </div>
            <SubMenuList isOpen={menuOpen.menu}>
              <SubMenuItem>샌드위치</SubMenuItem>
              <SubMenuItem>랩ㆍ기타</SubMenuItem>
              <SubMenuItem>샐러드</SubMenuItem>
              <SubMenuItem>아침메뉴</SubMenuItem>
              <SubMenuItem>스마일 썹</SubMenuItem>
              <SubMenuItem>단체메뉴</SubMenuItem>
            </SubMenuList>
          </NavItem>
          <NavItem>
            <div>매장 찾기</div>
          </NavItem>
          <NavItem>
            <div>주문 내역</div>
          </NavItem>
          <NavItem>
            <div onClick={() => toggleMenu("customerService")}>
              <span>고객 센터</span>
              <StyledDownIcon isOpen={menuOpen.customerService} />
            </div>
            <SubMenuList isOpen={menuOpen.customerService}>
              <SubMenuItem>문의</SubMenuItem>
              <SubMenuItem>Q&A</SubMenuItem>
            </SubMenuList>
          </NavItem>
        </NavList>
      </Sidebar>
    </>
  );
}

export default SideMenu;
