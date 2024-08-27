import { useState } from "react";
import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

import styled from "styled-components";

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const SelectBox = styled.div`
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
  position: relative;

  &:first-child {
    border-radius: 15px 15px 0 0;
  }

  &:last-child {
    border-radius: 0 0 15px 15px;
  }
`;

const Price = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  background-color: #ffc20d;
  color: black;
  padding: 4px;
  border-radius: 10px;
  position: absolute;
  right: 10px;
`;

const extraMeats = ingredients.extra_meats;

function OrderExtraMeat({ prevStep, nextStep }) {
  const [selectedOption, setSelectedOption] = useState("선택 안함");

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Header />
      <Question>추가 미트를 선택하시겠어요?</Question>
      <NutrientsTable />
      <SelectBoxContainer>
        <SelectBox
          isSelected={selectedOption === "선택 안함"}
          onClick={() => handleSelection("선택 안함")}
        >
          선택 안함
        </SelectBox>
        {extraMeats.map((item, idx) => (
          <SelectBox
            key={idx}
            isSelected={selectedOption === item}
            onClick={() => handleSelection(item)}
          >
            {item.title_ko}
            <Price>+ 3000원</Price>
          </SelectBox>
        ))}
      </SelectBoxContainer>
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderExtraMeat;
