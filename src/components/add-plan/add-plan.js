import React, { useState } from "react";
import "./add-plan.scss";

function AddPlan({ addPlan }) {
  const [plan, setPlan] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (plan.trim()) {
      addPlan(plan);
      setPlan("");
    }
  }

  return (
    <div className="add">
      <form className="add__form" onSubmit={submitHandler}>
        <button className="btn">Add plan</button>
        <input
          type="text"
          className="add__input"
          value={plan}
          onChange={e => setPlan(e.target.value)}
        />
      </form>
    </div>
  );
}

export default AddPlan;
