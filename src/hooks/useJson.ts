import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  JsonData,
  jsonSelector,
  keySelector,
  parseAction,
  resetAction,
  selectKey
} from 'store/features/json';
import * as _ from 'lodash';

const useJson = () => {
  const dispatch = useDispatch();
  const state = useSelector(jsonSelector);
  const curKey = useSelector(keySelector);

  const onDeepMerge = (obj: JsonData) => {
    const mergedObj = Object.keys(obj).reduce((acc, cur, idx) => {
      const value = obj[cur];
      let tmpObj = {};
      const splitKeys = cur.split('.');
      splitKeys.reverse().forEach((key, idx) => {
        tmpObj = { [key]: idx === 0 ? value : tmpObj };
      });
      /* Deep merge : assign이나 spread 문법은 key가 중복일 경우, 덮어쓰게 됨 */
      return (acc = _.merge(acc, tmpObj));
    }, {});
    return mergedObj;
  };

  const onParse = useCallback(
    (json: string) => {
      dispatch(parseAction(onDeepMerge(JSON.parse(json))));
    },
    [dispatch]
  );

  const onReset = useCallback(() => {
    dispatch(resetAction());
  }, [dispatch]);

  const onMakeKeyMember = useCallback(
    (key: string) => {
      let copyState = { ...state };
      for (let iKey of curKey) {
        const iState = copyState[iKey];
        if (typeof iState === 'object' && key in iState) {
          /* 다음 키가 같은 레벨일 경우, 데이터 교체 */
          const nextIndex = curKey.indexOf(iKey) + 1;
          if (curKey[nextIndex] in iState) {
            return [...curKey.slice(0, nextIndex), key];
          }
          return [...curKey, key];
        }
        copyState = { ...iState };
      }
      return [key];
    },
    [state, curKey]
  );

  const onSelectKey = useCallback(
    (key: string) => {
      dispatch(selectKey(onMakeKeyMember(key)));
    },
    [dispatch, onMakeKeyMember]
  );
  return { state, curKey, onParse, onReset, onSelectKey };
};

export default useJson;
