import React, { useContext } from "react";
import Context from '../context';
import "./plan-element.scss";

function PlanElement({ planData, index }) {
  const { removePlan, onCheck } = useContext(Context);
  const classes = [];

  if (planData.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      <span>
        <input
          type="checkbox"
          checked={planData.completed}
          onChange={() => onCheck(planData.id)}
        />
        <strong>{index + 1}</strong>
        {planData.title}
      </span>

      <button onClick={() => removePlan(planData.id)}>&times;</button>
    </li>
  );
}

export default PlanElement;
