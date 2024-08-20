import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

// styled-components에서 prop을 스타일에만 사용하고, DOM 요소로 전달되지 않도록 하는 방법
// shouldForwardProp을 사용하여 특정 prop을 DOM으로 전달되지 않도록 필터링
const ImgWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isAnimating",
})`
  display: flex;
  transition: ${(props) =>
    props.isAnimating ? "transform 0.5s ease-in-out" : "none"};
  transform: translateX(${(props) => props.translate}%);
`;

const Img = styled.img`
  width: 100%;
  flex-shrink: 0; /* 이미지를 동일한 크기로 유지 */
`;

const Arrow = styled.button`
  all: unset;
  font-size: 3rem;
  position: absolute;
  width: 24px;
  height: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  top: 0;

  &.right {
    right: 0;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  background-color: white;
  box-shadow: 0 0 4px;
  border-radius: 8px;
  padding: 3px;
`;

const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: ${(props) => (props.active ? 8 : 4)}px;
  height: ${(props) => (props.active ? 8 : 4)}px;
  border: ${(props) => (props.active ? "none" : "2px solid white")};
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#00964E" : "#5A5A5A")};
`;

const images = [
  "src/assets/images/손주문 선주문_이벤트 메인 상단_20240811115824458.jpg",
  "src/assets/images/아보카도 시리즈_이벤트 메인 상단_20240625090624432.jpg",
  "src/assets/images/에그 슬라이스_이벤트 메인 상단_20240304090708067.jpg",
];

const totalSlides = images.length;

// 가상 슬라이드를 위해 이미지 배열 앞뒤에 추가
const displayedImages = [
  images[totalSlides - 1], // 마지막 이미지 (가상 첫 번째 슬라이드)
  ...images,
  images[0], // 첫 번째 이미지 (가상 마지막 슬라이드)
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(totalSlides); // 가상의 마지막 슬라이드로 이동
      setTimeout(() => {
        setIsAnimating(true);
        setCurrentIndex(totalSlides - 1); // 실제 마지막 슬라이드로 이동
      }, 0);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === totalSlides + 1) {
      setIsAnimating(false);
      setCurrentIndex(1); // 가상의 첫 번째 슬라이드로 이동
      setTimeout(() => {
        setIsAnimating(true);
        setCurrentIndex(2); // 실제 첫 번째 슬라이드로 이동
      }, 0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getActiveIndex = () => {
    if (currentIndex === 0) return totalSlides - 1;
    if (currentIndex === totalSlides + 1) return 0;
    return currentIndex - 1;
  };

  return (
    <Box>
      <ImgWrapper translate={-100 * currentIndex} isAnimating={isAnimating}>
        {displayedImages.map((image, index) => (
          <Img key={index} src={image} alt={`slide ${index + 1}`} />
        ))}
      </ImgWrapper>
      <Arrow onClick={handlePrevClick}>&#8249;</Arrow>
      <Arrow className="right" onClick={handleNextClick}>
        &#8250;
      </Arrow>
      <Indicators>
        {images.map((_, index) => (
          <Dot key={index} active={index === getActiveIndex()} />
        ))}
      </Indicators>
    </Box>
  );
}

export default Carousel;
