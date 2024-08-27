import { useState } from "react";
import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import { Price } from "./UI/Price";
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

// const Price = styled.span`
//   font-size: 0.8rem;
//   font-weight: 400;
//   background-color: #ffc20d;
//   color: black;
//   padding: 4px;
//   border-radius: 10px;
//   position: absolute;
//   right: 10px;
// `;

const OptionBox = styled.div`
  box-sizing: border-box;
  border: 2px solid #00964e;
`;

const OptionBoxSelect = styled.select`
  background-color: #00964e;
  width: 100%;
  height: 24px;
  text-align: center;
  color: white;
  font-weight: 700;
  border: none;
`;

const ItemList = styled.ul`
  background-color: #f5f5f5;

  li {
    height: 28px;
    line-height: 28px;
    font-size: 0.9rem;
  }
`;

function OrderSetChoice({ prevStep, nextStep }) {
  const [selectedOption, setSelectedOption] = useState("세트");
  const [selectedSet, setSelectedSet] = useState("쿠키세트");

  const handleSelection = (option) => {
    setSelectedOption(option);
    setSelectedSet("쿠키세트");
  };

  const handleSelectChange = (e) => {
    setSelectedSet(e.target.value);
  };

  return (
    <>
      <Header />
      <Question>단품 / 콤보 / 세트 선택해주세요</Question>
      <SelectBoxContainer>
        <SelectBox
          isSelected={selectedOption === "단품"}
          onClick={() => handleSelection("단품")}
        >
          단품
        </SelectBox>
        <SelectBox
          isSelected={selectedOption === "콤보"}
          onClick={() => handleSelection("콤보")}
        >
          콤보<Price>+ 1400원</Price>
        </SelectBox>
        {selectedOption === "콤보" && (
          <OptionBox>
            <OptionBoxSelect>
              <option value="음료수">음료수</option>
            </OptionBoxSelect>
            <ItemList>
              <li>
                <label>
                  <input type="radio" name="drink" value="코카콜라" />
                  코카콜라
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="스트라이프" />
                  스트라이프
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="제로 콜라" />
                  제로 콜라
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="제로 사이다" />
                  제로 사이다
                </label>
              </li>
            </ItemList>
          </OptionBox>
        )}
        <SelectBox
          isSelected={selectedOption === "세트"}
          onClick={() => handleSelection("세트")}
        >
          세트
          <Price>+ 2800원</Price>
        </SelectBox>
        {selectedOption === "세트" && (
          <OptionBox>
            <OptionBoxSelect onChange={handleSelectChange}>
              <option value="쿠키세트">쿠키세트</option>
              <option value="칩세트">칩세트</option>
              <option value="웨지세트">웨지세트</option>
              <option value="수프세트">수프세트</option>
            </OptionBoxSelect>

            {selectedSet === "쿠키세트" && (
              <ItemList>
                <li>
                  <label>
                    <input type="radio" name="cookie" value="라즈베리 쿠키" />
                    라즈베리 쿠키
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="cookie" value="초코칩 쿠키" />
                    초코칩 쿠키
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="cookie" value="오트밀 쿠키" />
                    오트밀 쿠키
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="cookie" value="마카다미아 쿠키" />
                    마카다미아 쿠키
                  </label>
                </li>
              </ItemList>
            )}

            {selectedSet === "칩세트" && (
              <ItemList>
                <li>감자칩</li>
                <li>고구마칩</li>
                <li>바나나칩</li>
              </ItemList>
            )}

            {selectedSet === "웨지세트" && (
              <ItemList>
                <li>감자 웨지</li>
                <li>고구마 웨지</li>
              </ItemList>
            )}

            {selectedSet === "수프세트" && (
              <ItemList>
                <li>토마토 수프</li>
                <li>양송이 수프</li>
                <li>호박 수프</li>
              </ItemList>
            )}

            <OptionBoxSelect>
              <option value="음료수">음료수</option>
            </OptionBoxSelect>
            <ItemList>
              <li>
                <label>
                  <input type="radio" name="drink" value="코카콜라" />
                  코카콜라
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="스트라이프" />
                  스트라이프
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="제로 콜라" />
                  제로 콜라
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="drink" value="제로 사이다" />
                  제로 사이다
                </label>
              </li>
            </ItemList>
          </OptionBox>
        )}
      </SelectBoxContainer>
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderSetChoice;
