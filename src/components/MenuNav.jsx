import styled, { css } from "styled-components";
import { ReactComponent as DownIcon } from "../assets/icons/angle-small-down.svg";

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StyledDownIcon = styled(DownIcon)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.5s ease;

  ${(props) =>
    !props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

const SubMenuList = styled.ul`
  background-color: #f3f3f3;
  font-size: 0.9rem;
  margin-top: 8px;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease; /* 부드러운 토글 애니메이션 */

  li:first-child {
    padding-top: 20px;
  }
  li:last-child {
    padding-bottom: 20px;
  }
`;

const SubMenuItem = styled.li`
  padding: 5px 20px;
  color: ${(props) => (props.isActive ? "#00964E" : "black")};
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
`;

function MenuNav({ menuOpen, toggleMenu, menuTypes, queryType }) {
  const typeEntries = Object.entries(menuTypes);

  return (
    <>
      <TitleSection>
        <MenuTitle>{menuTypes[queryType]}</MenuTitle>
        <MenuButton onClick={toggleMenu}>
          <StyledDownIcon isOpen={menuOpen} />
        </MenuButton>
      </TitleSection>
      <nav>
        <SubMenuList isOpen={menuOpen}>
          {typeEntries.map((values, idx) => (
            <SubMenuItem key={idx} isActive={queryType === values[0]}>
              {values[1]}
            </SubMenuItem>
          ))}
        </SubMenuList>
      </nav>
    </>
  );
}

export default MenuNav;
