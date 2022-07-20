import { createContext } from "react";
import { useContext } from "react";

const Context = createContext();

const useUserContext = () => useContext(Context);

export { useUserContext };
export default Context;
