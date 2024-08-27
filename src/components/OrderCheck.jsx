import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import MenuInfo from "./MenuInfo";

function OrderCheck() {
  return (
    <>
      <Header />
      <Question>최종 정보를 확인해주세요</Question>
      <div>
        <img src="src\assets\images\(SubPick)ItalianBMT_Front (3)_20240205094239598.png" />
      </div>
      <MenuInfo></MenuInfo>
      <NutrientsTable />
    </>
  );
}

export default OrderCheck;
