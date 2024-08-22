import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* 반투명한 검은 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500; /* 모달이 항상 위에 보이도록 설정 */
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  width: 90%;
  box-sizing: border-box;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 80vh; /* 모달의 최대 높이 설정 */
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 220px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;

const ContentBox = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 10px;
`;

const SubTitle = styled.h3`
  color: #5a5a5a;
  margin-top: 6px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 18px;
  color: #5a5a5a;
  margin: 16px 0;
`;

const NutrientsList = styled.ul`
  border: 2px solid #f3f3f3;
  border-radius: 16px;
`;

const NutrientsItem = styled.li`
  font-size: 0.7rem;
  margin: 10px;
  display: flex;
  text-align: center;
`;

const NutrientTitle = styled.p`
  color: #00964e;
  font-weight: 700;
  width: 30%;
`;

const NutrientInfo = styled.p`
  color: black;
  width: 70%;
`;

const Notice = styled.p`
  color: #909090;
  font-size: 0.6rem;
  line-height: 14px;
  margin-top: 10px;
`;

function Modal({ children, info, onClose }) {
  const nutrientsEntries = Object.entries(info.nutrients);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImgBox>
          <img src="src\assets\images\(SubPick)ItalianBMT_Front (3)_20240205094239598.png" />
        </ImgBox>
        <ContentBox>
          <Title>{info.title_ko}</Title>
          <SubTitle>
            {info.title_en} | {info.nutrients.nutrient_2[1]}kcal
          </SubTitle>
          <Description>{info.description}</Description>
          <NutrientsList>
            {nutrientsEntries.map((values) => (
              <NutrientsItem key={values[0]}>
                <NutrientTitle>{values[1][0]}</NutrientTitle>
                <NutrientInfo>
                  {values[1][1]}
                  {values[1][2] && "(" + values[1][2] + "%)"}
                </NutrientInfo>
              </NutrientsItem>
            ))}
          </NutrientsList>
          <Notice>
            ※ 15cm 샌드위치의 영양 정보는 기본 야채 5종(양상추, 토마토, 오이,
            피망, 양파), 15cm 위트 브레드 및 제품에 따른 미트류가 포함되어
            있으며, 치즈와 소스는 제외됩니다.
          </Notice>
        </ContentBox>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
