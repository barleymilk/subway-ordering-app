import styled from "styled-components";

const InfoBox = styled.div`
  height: 100%;
  flex-grow: 1; /* 남는 공간을 모두 차지하도록 설정 */
  text-align: center;
  padding: 22px 6px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const EngTitle = styled.p`
  font-size: 0.8rem;
  color: #8d8d8d;
  margin-top: 6px;
`;

const Kcal = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #ffc20d;
  margin-top: 10px;
`;

function MenuInfo({ info }) {
  return (
    <InfoBox>
      <Title>{info.title_ko}</Title>
      <EngTitle>{info.title_en}</EngTitle>
      <Kcal>{info.nutrients ? info.nutrients.nutrient_2[1] : "N/A"} kcal</Kcal>
    </InfoBox>
  );
}

export default MenuInfo;
