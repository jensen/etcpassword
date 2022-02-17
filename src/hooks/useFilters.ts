import type { Reducer } from "react";
import { useReducer } from "react";

type PreviousState = Record<FilterKey, boolean>;
type Action = { type: string; key: FilterKey };

const reducer = (state: PreviousState, action: Action) => {
  if (action.type === "toggle") {
    return {
      ...state,
      [action.key]: !state[action.key],
    };
  }

  return state;
};

export default function useFilters() {
  const [state, dispatch] = useReducer(reducer, {
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const toggle = (key: FilterKey) => () => dispatch({ type: "toggle", key });

  const actions = {
    lowercase: toggle("lowercase"),
    uppercase: toggle("uppercase"),
    numbers: toggle("numbers"),
    symbols: toggle("symbols"),
  };

  return {
    state,
    actions,
  };
}
