import React, { useState } from "react";
import Stepper from "./Stepper";
import AddAddress from "./AddAddress";
import AddPayment from "./AddPayment";
import ReviewAndPlaceOrder from "./ReviewAndPlaceOrder";

const steps = [
  {
    title: "Address",
    description: "Add Your Address",
    component: <AddAddress />,
  },
  {
    title: "Payment",
    description: "Choose Payment Options",
    component: <AddPayment />,
  },
  {
    title: "place order",
    description: "Place Your Order",
    component: <ReviewAndPlaceOrder />,
  },
];

const CheckoutSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="container mx-auto py-10">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
      <div className="mt-8 p-4">
        <h2 className="text-lg font-semibold mb-2 text-center">
          {steps[currentStep].description}
        </h2>
      </div>
      {/*  components */}
      {steps[currentStep].component}
    </div>
  );
};

export default CheckoutSteps;
