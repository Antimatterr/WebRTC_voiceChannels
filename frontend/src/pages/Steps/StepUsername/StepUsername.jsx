import React from "react";

function StepUsername({ onNext }) {
  return (
    <>
      <div>set Username</div>
      <button onClick={onNext}>Next</button>
    </>
  );
}

export default StepUsername;
