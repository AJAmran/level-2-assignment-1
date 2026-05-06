//todo: Problem-1

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

//todo: Problem 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

//todo: Problem 3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): StringOrNumber => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

//todo: Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
