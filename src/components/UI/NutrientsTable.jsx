import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;

  ul {
    text-align: center;
    font-size: 0.8rem;
    line-height: 22px;
    padding: 8px 0;
  }
`;
const NutrientTerm = styled.ul`
  width: 30%;
  font-weight: 700;
  color: #00964e;
  border-radius: 15px 0 0 15px;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
`;

const NutrientInfo = styled.ul`
  width: 70%;
  background-color: #f3f3f3;
  border-radius: 0 15px 15px 0;
`;

function NutrientsTable() {
  return (
    <Wrapper>
      <NutrientTerm>
        <li>중량(g)</li>
        <li>중량(g)</li>
        <li>중량(g)</li>
        <li>중량(g)</li>
        <li>중량(g)</li>
        <li>중량(g)</li>
      </NutrientTerm>
      <NutrientInfo>
        <li>238</li>
        <li>238</li>
        <li>238(25%)</li>
        <li>238</li>
        <li>238</li>
        <li>238</li>
      </NutrientInfo>
    </Wrapper>
  );
}

export default NutrientsTable;
