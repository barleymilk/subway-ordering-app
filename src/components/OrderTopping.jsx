import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import Selection from "./UI/Selection";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

const rawVegetables = ingredients.toppings;

function OrderTopping({ prevStep, nextStep }) {
  return (
    <>
      <Header />
      <Question>추가 토핑을 선택해주세요(다중)</Question>
      <NutrientsTable />
      <Selection optionList={rawVegetables} />
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderTopping;
