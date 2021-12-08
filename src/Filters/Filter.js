import React from "react";

const Filter = (props) => (
  <li className="filter">
    <span>
      <input type="checkbox" value={true} className="filter__checkbox" />
      {props.filter.name}
    </span>
    <span className="filter__match-count">{props.filter.matchCount}</span>
  </li>
);

export default Filter;
