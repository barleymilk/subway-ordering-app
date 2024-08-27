import { useState } from "react";
import OrderMenu from "../components/OrderMenu";
import OrderBreadLength from "../components/OrderBreadLength";
import OrderBread from "../components/OrderBread";
import OrderCheese from "../components/OrderCheese";
import OrderVegetable from "../components/OrderVegetable";
import OrderSauce from "../components/OrderSauce";
import OrderTopping from "../components/OrderTopping";
import OrderExtraMeat from "../components/OrderExtraMeat";
import OrderSetChoice from "../components/OrderSetChoice";
import OrderCheck from "../components/OrderCheck";

function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // 다음 단계로 이동
  const nextStep = () => setCurrentStep((prev) => prev + 1);

  // 이전 단계로 이동
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
      {currentStep === 1 && <OrderMenu nextStep={nextStep} />}
      {currentStep === 2 && (
        <OrderBreadLength prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 3 && (
        <OrderBread prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 4 && (
        <OrderCheese prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 5 && (
        <OrderVegetable prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 6 && (
        <OrderSauce prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 7 && (
        <OrderTopping prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 8 && (
        <OrderExtraMeat prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 9 && (
        <OrderSetChoice prevStep={prevStep} nextStep={nextStep} />
      )}
      {currentStep === 10 && (
        <OrderCheck prevStep={prevStep} nextStep={nextStep} />
      )}
    </>
  );
}

export default OrderPage;
