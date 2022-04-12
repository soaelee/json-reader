import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { jsonSelector, parseAction, resetAction } from "store/features/json";
import * as _ from "lodash";

const useJson = () => {
  const state = useSelector(jsonSelector);
  const dispatch = useDispatch();

  const onDeepMerge = (obj: { [key: string]: any }) => {
    const answer = Object.keys(obj).reduce((acc, cur, idx) => {
      const value = obj[cur];
      let tmpObj = {};
      const splitKeys = cur.split(".");
      splitKeys.reverse().forEach((key, idx) => {
        tmpObj = { [key]: idx === 0 ? value : tmpObj };
      });
      /* Deep merge
       assign이나 spread 문법은 중복키일경우 덮어쓰게 됨 */
      return (acc = _.merge(acc, tmpObj));
    }, {});
    return answer;
  };
  const onParse = useCallback(
    (json: string) => {
      console.log(onDeepMerge(JSON.parse(json)));
      dispatch(parseAction(onDeepMerge(JSON.parse(json))));
    },
    [dispatch]
  );

  const onReset = useCallback(() => {
    dispatch(resetAction);
  }, [dispatch]);

  return { state, onParse, onReset };
};

export default useJson;
