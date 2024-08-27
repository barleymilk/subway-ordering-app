import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import { SelectionTitle } from "./UI/SelectionTitle";
import Selection from "./UI/Selection";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

const cheeses = ingredients.cheeses;

function OrderCheese({ prevStep, nextStep }) {
  return (
    <>
      <Header />
      <Question>치즈를 선택해주세요</Question>
      <NutrientsTable />
      <Selection optionList={cheeses} />
      <SelectionTitle>치즈 추가 선택</SelectionTitle>
      <Selection optionList={cheeses} />
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderCheese;
