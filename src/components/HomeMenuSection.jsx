import styled from "styled-components";
import HomeMenuList from "./HomeMenuList";

const Section = styled.section`
  padding-left: 20px;
  margin-bottom: 54px;
`;

const TitleSection = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 68px;
  height: 24px;
  background-color: #00964e;
  text-align: center;
  border-radius: 30px;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 허용 */
`;

function HomeMenuSection({ title }) {
  return (
    <Section>
      <TitleSection>
        <Title>{title}</Title>
        <Button>더보기</Button>
      </TitleSection>
      <Ul>
        <HomeMenuList />
        <HomeMenuList />
        <HomeMenuList />
        <HomeMenuList />
      </Ul>
    </Section>
  );
}

export default HomeMenuSection;
