import React from "react";
import { BsFilter } from "react-icons/bs";
import { useIsVisible } from "./IsVisible";
import { ListContext } from "./Main";

export function Filter(props) {
  const [isVisibleFilter, changeVisibleFilter] = useIsVisible("hidden");
  return (
    <ListContext.Consumer>
      {({ filter, setFilter }) => {
        const setNone = () => {
          setFilter("all");
        };
        const setCompleted = () => {
          setFilter("completed");
        };
        const setNotCompleted = () => {
          setFilter("notCompleted");
        };
        return (
          <div>
            <h2 onClick={changeVisibleFilter}>
              <BsFilter /> SHOW FILTERS
            </h2>
            <div className={`flexContainer ${isVisibleFilter}`}>
              <span
                className={`filterSpan ${
                  filter === "all" ? "selectedFilter" : ""
                }`}
                onClick={setNone}
              >
                ALL
              </span>
              <span
                className={`filterSpan ${
                  filter === "completed" ? "selectedFilter" : ""
                }`}
                onClick={setCompleted}
              >
                COMPLETED
              </span>
              <span
                className={`filterSpan ${
                  filter === "notCompleted" ? "selectedFilter" : ""
                }`}
                onClick={setNotCompleted}
              >
                NOT COMPLETED
              </span>
            </div>
          </div>
        );
      }}
    </ListContext.Consumer>
  );
}
