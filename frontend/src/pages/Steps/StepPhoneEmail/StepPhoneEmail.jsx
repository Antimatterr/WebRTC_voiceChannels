import React from "react";

function StepPhoneEmail({ onNext }) {
  return (
    <>
      <div>Phone or Email component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
}

export default StepPhoneEmail;
