import React, { useState } from "react";

interface AddressStepProps {
  onNext: (data: { address: string }) => void;
}

const AddressStep: React.FC<AddressStepProps> = ({ onNext }) => {
  const [address, setAddress] = useState("");

  return (
    <div>
      <h2>Address Step</h2>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button onClick={() => onNext({ address })}>Next</button>
    </div>
  );
};

interface OrderStepProps {
  onPrev: () => void;
  onNext: (data: { order: string }) => void;
}

const OrderStep: React.FC<OrderStepProps> = ({ onPrev, onNext }) => {
  const [order, setOrder] = useState("");

  return (
    <div>
      <h2>Order Step</h2>
      <label>
        Order:
        <input
          type="text"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />
      </label>
      <button onClick={onPrev}>Previous</button>
      <button onClick={() => onNext({ order })}>Next</button>
    </div>
  );
};

interface PaymentStepProps {
  onPrev: () => void;
  onSubmit: (data: { payment: string }) => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ onPrev, onSubmit }) => {
  const [payment, setPayment] = useState("");

  return (
    <div>
      <h2>Payment Step</h2>
      <label>
        Payment:
        <input
          type="text"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </label>
      <button onClick={onPrev}>Previous</button>
      <button onClick={() => onSubmit({ payment })}>Submit</button>
    </div>
  );
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<{
    address?: string;
    order?: string;
    payment?: string;
  }>({});

  const handleNext = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: any) => {
    // Handle form submission, e.g., send data to server
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div>
        <button onClick={() => setStep(1)}>Address</button>
        <button onClick={() => setStep(2)}>Order</button>
        <button onClick={() => setStep(3)}>Payment</button>
      </div>
      {step === 1 && <AddressStep onNext={handleNext} />}
      {step === 2 && <OrderStep onPrev={handlePrev} onNext={handleNext} />}
      {step === 3 && (
        <PaymentStep onPrev={handlePrev} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default MultiStepForm;
