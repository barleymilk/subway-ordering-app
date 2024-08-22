import { useState } from "react";
import styled from "styled-components";
import MenuInfo from "./MenuInfo";
import Modal from "./UI/Modal";
import OrderButtons from "./UI/OrderButtons";

const MenuArticle = styled.article`
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
  height: 106px;
  padding-right: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const MenuImg = styled.div`
  width: 120px;
  height: 90px;
  flex-shrink: 0;
  margin-top: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function MenuBox({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null); // 모달 닫기
  };

  return (
    <section>
      {data.map((info, idx) => (
        <MenuArticle key={idx} onClick={() => handleClick(info)}>
          <MenuImg>
            <img
              src="src/assets/images/(SubPick)ItalianBMT_Front (3)_20240205094239598.png"
              alt={info.title_ko}
            />
          </MenuImg>
          <MenuInfo info={info} />
        </MenuArticle>
      ))}
      {selectedItem && (
        <Modal onClose={closeModal} info={selectedItem}>
          <OrderButtons isShadow={true} />
        </Modal>
      )}
    </section>
  );
}

export default MenuBox;
