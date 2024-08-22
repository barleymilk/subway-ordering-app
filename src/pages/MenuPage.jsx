import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Tags from "../components/UI/Tags";
import MenuBox from "../components/MenuBox";
import MenuNav from "../components/MenuNav";
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
  all: "전체",
  classic: "클래식",
  fresh: "프레쉬&라이트",
  premium: "프리미엄",
  new: "신제품",
  topping: "토핑",
};

function MenuPage() {
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
      navigate(`/menu?type=${queryType}&tag=${queryTag}`, { replace: true });
    }
  }, [query, navigate, queryType, queryTag]);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleTagClick = (tag) => {
    // 새로운 URL로 리다이렉트
    navigate(`/menu?type=${queryType}&tag=${tag}`);
  };

  return (
    <>
      <Header />
      <main id="wrap">
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
        />
      </main>
      <BottomNav activeItem="menu" />
    </>
  );
}

export default MenuPage;
