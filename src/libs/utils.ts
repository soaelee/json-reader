type ReplaceMapType = {
  [key: string]:
    | string
    | number
    | ((substring: string, ...args: any[]) => string);
};

export const addZero = (value: number | string) =>
  value.toString().length === 1 ? `0${value}` : value;

const replaceFormat = (format: string, date: Date) => {
  const map: ReplaceMapType = {
    yyyy: date.getFullYear(),
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    MM: addZero(date.getMonth() + 1),
    DD: addZero(date.getDay() + 1),
    'm-contraction': String(date).split(' ')[1],
    H: addZero(date.getHours()),
    i: addZero(date.getMinutes()),
    s: addZero(date.getSeconds())
  };

  return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s|m-contraction)/g, matched =>
    String(map[matched])
  );
};

export const formatDate = (format: string, date?: Date): string => {
  const _date = date || new Date();
  const newDate = new Date(_date);
  return replaceFormat(format, newDate);
};
