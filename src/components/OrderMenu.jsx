import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../redux/menuSlice";
import styled from "styled-components";
import Header from "./Header";
import MenuNav from "./MenuNav";
import Tags from "./UI/Tags";
import MenuBox from "./MenuBox";
import { Question } from "./UI/Question";
import ingredients from "../ingredients.json";

const menuTypes = {
  sandwiches: "샌드위치",
  wraps: "랩ㆍ기타",
  salad: "샐러드",
  morning: "아침메뉴",
  smile: "스마일 썹",
  group: "단체메뉴",
};

const menuTags = {
  saved: "나의 메뉴",
  all: "전체",
  classic: "클래식",
  fresh: "프레쉬&라이트",
  premium: "프리미엄",
  new: "신제품",
};

const Main = styled.main`
  margin: 20px;
`;

const OrderButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #00964e;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
`;

function OrderMenu({ nextStep }) {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const navigate = useNavigate();
  const queryType = query.get("type") || "sandwiches"; // 기본값으로 'sandwiches' 설정
  const queryTag = query.get("tag") || "all"; // 기본값으로 'all' 설정

  useEffect(() => {
    // 만약 queryType 또는 queryTag가 URL에 없다면 기본값으로 리다이렉트
    if (!query.get("type") || !query.get("tag")) {
      navigate(`/order?type=${queryType}&tag=${queryTag}`, { replace: true });
    }
  }, [query, navigate, queryType, queryTag]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTagClick = (tag) => {
    // 새로운 URL로 리다이렉트
    navigate(`/order?type=${queryType}&tag=${tag}`);
  };

  return (
    <>
      <Header />
      <Question>메뉴를 선택해주세요</Question>
      <Main>
        <MenuNav
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          menuTypes={menuTypes}
          queryType={queryType}
        />
        <Tags
          menuTags={menuTags}
          queryTag={queryTag}
          onTagClick={handleTagClick}
        />
        <MenuBox
          data={
            queryTag === "all"
              ? ingredients[queryType]
              : ingredients[queryType].filter((item) => item.type === queryTag)
          }
        >
          <OrderButton onClick={nextStep}>주문 시작하기</OrderButton>
        </MenuBox>
      </Main>
    </>
  );
}

export default OrderMenu;
