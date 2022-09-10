import React from "react";

function StepName({ onNext }) {
  return (
    <>
      <div>set name</div>
      <button onClick={onNext}>Next</button>
    </>
  );
}

export default StepName;
