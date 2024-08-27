import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import Selection from "./UI/Selection";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

const breads = ingredients.breads;

function OrderBread({ prevStep, nextStep }) {
  return (
    <>
      <Header />
      <Question>빵을 선택해주세요</Question>
      <NutrientsTable />
      <Selection optionList={breads} />
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderBread;
