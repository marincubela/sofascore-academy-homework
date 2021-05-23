import React from "react";

// custom hook
export function useIsVisible(visible) {
  const [visibility, setVisibility] = React.useState(visible);

  function changeVisibility() {
    setVisibility(visibility === "visible" ? "hidden" : "visible");
  }

  return [visibility, changeVisibility];
}
