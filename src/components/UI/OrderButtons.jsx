import styled from "styled-components";
import { ReactComponent as ShoppingBagIcon } from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as MopedIcon } from "../../assets/icons/moped.svg";

const StyledShoppingBagIcon = styled(ShoppingBagIcon)`
  width: 30px;
  height: 30px;
  margin: 20px 0 14px 0;
`;

const StyledMopedIcon = styled(MopedIcon)`
  width: 30px;
  height: 30px;
  margin: 20px 0 14px 0;
`;

const OrderButtonsContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const OrderButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 47%;
  height: 100%;
  background-color: white;
  box-shadow: ${(props) =>
    props.isShadow ? "0 0 4px rgba(0, 0, 0, 0.2)" : "none"};
  border-radius: 15px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function OrderButtons(isShadow) {
  return (
    <OrderButtonsContainer>
      <OrderButton isShadow={isShadow}>
        <StyledShoppingBagIcon />
        <span>포장주문</span>
      </OrderButton>
      <OrderButton isShadow={isShadow}>
        <StyledMopedIcon />
        <span>배달주문</span>
      </OrderButton>
    </OrderButtonsContainer>
  );
}

export default OrderButtons;
