import styled from "styled-components";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import HomeMenuSection from "../components/HomeMenuSection";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

const Welcome = styled.p`
  width: 100%;
  height: 44px;
  background-color: #f3f3f3;
  line-height: 44px;
  padding-left: 20px;
  box-sizing: border-box;

  span {
    font-weight: bold;
  }
`;

const MainContent = styled.div`
  section:first-of-type {
    margin-top: 20px;
  }
`;

const BOTTOM_NAV_HEIGHT = "72px";

const ContentWrapper = styled.div`
  padding-bottom: ${BOTTOM_NAV_HEIGHT};
`;

function HomePage() {
  return (
    <>
      <ContentWrapper>
        <Header />
        <main>
          <Welcome>
            <span>OOO님</span> 안녕하세요!
          </Welcome>
          <Carousel />
          <MainContent>
            <HomeMenuSection title="메뉴" />
            <HomeMenuSection title="인기조합" />
          </MainContent>
        </main>
        <Footer />
      </ContentWrapper>
      <BottomNav activeItem="home" />
    </>
  );
}

export default HomePage;
