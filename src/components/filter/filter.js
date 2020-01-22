import React from "react";
import "./filter.scss";

function Filter({ filters, filterStatus }) {
  return (
    <div className="filter">
      <h3>Filtered by:</h3>

      {filters.map(filter => {
        const active = filter.active ? ' active' : ''

        return (
          <button
            className={`btn${active}`}
            onClick={() => {
              filterStatus(filter.title);
            }}
            key={filter.id}
          >
            {filter.title}
          </button>
        );
      })}

      {/* <button className="btn">Important</button> */}
    </div>
  );
}

export default Filter;
