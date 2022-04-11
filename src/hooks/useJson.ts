import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { jsonSelector, parseAction, resetAction } from "store/features/json";

const useJson = () => {
  const state = useSelector(jsonSelector);
  const dispatch = useDispatch();

  const onParse = useCallback(
    (json: string) => {
      dispatch(parseAction(json));
    },
    [dispatch]
  );

  const onReset = useCallback(() => {
    dispatch(resetAction);
  }, [dispatch]);

  return { state, onParse, onReset };
};

export default useJson;
