import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import PrevNextButton from "./UI/PrevNextButton";

const BreadLengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const BreadLengthOption = styled.div`
  padding: 17px;
  border: 2px solid
    ${({ isSelected }) => (isSelected ? "#00964e" : "transparent")};
  background-color: ${({ isSelected }) => (isSelected ? "white" : "#f4f4f4")};
  color: ${({ isSelected }) => (isSelected ? "black" : "#a0a0a0")};
  text-align: center;
  font-size: 1.1rem;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    border-radius: 15px 15px 0 0;
  }

  &:last-child {
    border-radius: 0 0 15px 15px;
  }
`;

function OrderBreadLength({ prevStep, nextStep }) {
  const [selectedLength, setSelectedLength] = useState("15cm");

  const handleSelection = (length) => {
    setSelectedLength(length);
  };

  return (
    <>
      <Header />
      <Question>빵 길이를 선택해주세요</Question>
      <NutrientsTable />
      <BreadLengthContainer>
        <BreadLengthOption
          isSelected={selectedLength === "15cm"}
          onClick={() => handleSelection("15cm")}
        >
          15 cm
        </BreadLengthOption>
        <BreadLengthOption
          isSelected={selectedLength === "30cm"}
          onClick={() => handleSelection("30cm")}
        >
          30 cm
        </BreadLengthOption>
      </BreadLengthContainer>
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderBreadLength;
