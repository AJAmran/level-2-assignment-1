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

//todo: Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


//todo: Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((item) => arr2.includes(item));
};