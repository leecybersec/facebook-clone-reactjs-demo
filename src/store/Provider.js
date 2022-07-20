import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import Context from "./Context";

// const logger = (reducer) => {
//   return (prev, action) => {
//     console.log("Prev:", prev);
//     const newState = reducer(prev, action);
//     console.log("NewState:", newState);

//     return newState;
//   };
// };

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
