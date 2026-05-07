function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
const evenNumber = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumber)




function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
const reverse = reverseString("typescript");
console.log(reverse);



type StringOrNumber = string | number;
function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}
console.log(checkType("Hello"));



const getProperty = <T, K extends keyof T>(object: T, Key: K): T[K] => {
  return object[Key];
};
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};
console.log(getProperty(user, "name"));




interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book) {
  return { ...book, isRead: true };
}
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));



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

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());






function getIntersection(arr1: number[], num2: number[]): number[] {
  return arr1.filter((value) => num2.includes(value));
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));