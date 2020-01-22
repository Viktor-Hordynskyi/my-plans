import React from "react";
import PlanElement from "../plan-element/";
import "./plan-list.scss";

function PlanList({todos}) {
  
  return (
    <ul className="plans__list">
      {todos.map((data, index) => {
        return (
          <PlanElement
            planData={data}
            key={data.id}
            index={index}
          />
        );
      })}
    </ul>
  );
}

export default PlanList;
