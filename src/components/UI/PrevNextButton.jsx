import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  position: fixed; /* 화면에 고정 */
  bottom: 0; /* 화면 하단에 위치 */
`;

const Button = styled.button`
  flex: 1;
  padding: 20px 0;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:first-child {
    flex: 1;
    background-color: #e0e0e0;
  }

  &:last-child {
    flex: 2;
    background-color: #00964e;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

function PrevNextButton({ onPrevious, onNext }) {
  return (
    <ButtonContainer>
      <Button onClick={onPrevious}>이전</Button>
      <Button onClick={onNext}>다음</Button>
    </ButtonContainer>
  );
}

export default PrevNextButton;
