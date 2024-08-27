import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import Selection from "./UI/Selection";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

const sauces = ingredients.sauces;

function OrderSauce({ prevStep, nextStep }) {
  return (
    <>
      <Header />
      <Question>소스/시즈닝을 선택해주세요</Question>
      <NutrientsTable />
      <Selection optionList={sauces} />
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderSauce;
