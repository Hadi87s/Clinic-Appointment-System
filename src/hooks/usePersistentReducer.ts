import { useEffect, useReducer } from "react";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utils/localStorageUtils";

export function usePersistentReducer<State, Action>(
  key: string,
  reducer: (state: State, action: Action) => State,
  initialState: State
): [State, React.Dispatch<Action>] {
  const storedState = getFromLocalStorage(key, initialState);
  const [state, dispatch] = useReducer(reducer, storedState);

  useEffect(() => {
    setToLocalStorage(key, state);
  }, [state, key]);

  return [state, dispatch];
}
