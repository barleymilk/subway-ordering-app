import Header from "./Header";
import { Question } from "./UI/Question";
import NutrientsTable from "./UI/NutrientsTable";
import { SelectionTitle } from "./UI/SelectionTitle";
import Selection from "./UI/Selection";
import PrevNextButton from "./UI/PrevNextButton";
import ingredients from "../ingredients.json";

const rawVegetables = ingredients.vegetables.filter((item) => item.type === "생야채");
const pickles = ingredients.vegetables.filter((item) => item.type === "절임류");
const noVegetables = ingredients.vegetables.filter((item) => item.type === "no");

function OrderVegetable({ prevStep, nextStep }) {
  return (
    <>
      <Header />
      <Question>야채를 선택해주세요</Question>
      <NutrientsTable />
      <SelectionTitle>생야채</SelectionTitle>
      <Selection optionList={rawVegetables} />
      <SelectionTitle>절임류</SelectionTitle>
      <Selection optionList={pickles} />
      <SelectionTitle>야채 제외</SelectionTitle>
      <Selection optionList={noVegetables} />
      <PrevNextButton onPrevious={prevStep} onNext={nextStep} />
    </>
  );
}

export default OrderVegetable;
