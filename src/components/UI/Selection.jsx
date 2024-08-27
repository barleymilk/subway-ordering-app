import { useState } from "react";
import styled from "styled-components";

const Select = styled.div`
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
`;

const Option = styled.div`
  height: 150px;
  // border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 15px;
  text-align: center;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#00964e" : "#e6e6e6")};
`;

const ImgBox = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 15px;
  }
`;

const Name = styled.p`
  font-size: 1.2rem;
`;

function Selection({ optionList }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <Select>
      {optionList.map((option, idx) => (
        <Option
          key={idx}
          isSelected={selectedOption === option.title_ko}
          onClick={() => handleSelection(option.title_ko)}
        >
          <ImgBox>
            <img src="src\assets\images\img_recipe_b01.jpg" />
          </ImgBox>
          <Name>{option.title_ko}</Name>
        </Option>
      ))}
    </Select>
  );
}

export default Selection;
