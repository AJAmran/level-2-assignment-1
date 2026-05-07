# How the Four Pillars of OOP Help Reduce Complexity in TypeScript Projects

## Introduction:

যখন আমরা নতুন নতুন প্রোগ্রামিং শেখা শুরু করি, তখন ছোট ছোট ফাংশন লিখেই কাজ করি। কিন্তু প্রজেক্ট যখন বড় হতে শুরু করে তখন কোড ম্যানেজ করা অনেক কঠিন হয়ে পড়ে।

যেমনঃ

- একই code বার বার লিখেতে হয়
- কোন logic কোথায় আছে বুঝতে সমস্যা হয়
- নতুন features add করতে গেলে পুরোনো code নষ্ট হয়ে যায়।
- bug খুজা কঠিন হয়ে যায়।

এই সমস্যাগুলো কমানোর জন্যই OOP ব্যবহার করা হয়।

### OOP - এর চারটি piller হলোঃ

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

## এই চারটি piller বড় typeScript projet- কে clean, organized এবং maintainable রাখতে সাহায্য করে।

## 1. Inheritance

Inheritance মানে হলো একটি class অন্য class এর feature ব্যবহার করতে পারবে।

সহজভাবে বললেঃ
"একটা class- এর common logic অন্য class এ reuse করা"

---

example:

```ts
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

const student1 = new Student("Amran", 22, "A+");

```
এখানে কী হলো?

Student class আবার নতুন করে name, age, বা introduce() method লেখেনি।
কারণ এটি Person class থেকে inherit করেছে।

extends Person ব্যবহার করার ফলে Student class এখন Person এর সব property এবং method ব্যবহার করতে পারছে।

তাই আমরা লিখতে পারছি:

student1.introduce();

যদিও introduce() method শুধুমাত্র Person class এ আছে।

এভাবে:

- code repeat কমে যায়
- project clean থাকে
- maintenance সহজ হয়
- future এ নতুন feature add করা সহজ হয়

### Real Project Example

ধরুন একটি school management system আছে।

সব ধরনের মানুষের কিছু common information থাকতে পারে:

name
age
address
login()

তখন আমরা একটি base Person class বানাতে পারি।

তারপর:
```ts

class Student extends Person {}
class Teacher extends Person {}
class Admin extends Person {}

```

এভাবে project অনেক organized এবং reusable হয়।

## Polymorphism:
Polymorphism মানে:

একই method different class-এ different behavior দেখাতে পারে।

নাম একই থাকবে, কিন্তু কাজ আলাদা হতে পারে।
```ts
class Animal {
  makeSound() {
    console.log("Animal makes sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }
}

Usage:
const animals = [new Cat(), new Dog()];

animals.forEach((animal) => {
  animal.makeSound();
});

Output: 
Meow
Woof
```

#### কেন এটি useful?

ধরুন project-এ অনেক payment method আছে:

- Bkash
- Nagad
- Card

সবগুলোর pay() method থাকতে পারে, কিন্তু কাজের ভেতরের logic আলাদা হবে।

এভাবে project flexible হয়।

নতুন feature add করলেও পুরোনো code কম change করতে হয়।

## Abstraction
Abstraction মানে:

unnecessary details hide করে শুধু important অংশ দেখানো।

### Real life example:

আমরা গাড়ি চালানোর সময় engine কিভাবে কাজ করে সেটা জানি না।
আমরা শুধু steering, brake আর accelerator ব্যবহার করি।

Programming-এও একই concept কাজ করে।

Example: 
```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bkash`);
  }
}
```
এখানে কী হচ্ছে?

Payment class শুধু rule তৈরি করেছে।

মানে:

- “সব payment system-এর pay method থাকতে হবে।”
- কিন্তু actual implementation child class করবে।
- কেন Abstraction দরকার?

কারণ এটি:

- project structure clean রাখে
- developer confusion কমায়
- large application manage করা সহজ করে

## Encapsulation
Encapsulation মানে:

data এবং related method একসাথে রাখা এবং sensitive data protect করা।

Example:

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```
এখানে private কেন ব্যবহার করা হয়েছে?

কারণ আমরা চাই না কেউ বাইরে থেকে balance change করতে পারুক।

যদি কেউ এমন করে:
```ts
account.balance = 100000;
```

তাহলে TypeScript error দিবে।

এভাবে data secure থাকে।

Encapsulation-এর সুবিধা
- sensitive data safe থাকে
- unexpected change কম হয়
- debugging সহজ হয়
- code controlled থাকে

### How These Four Pillars Help in Large Projects
| OOP Pillar    | কীভাবে সাহায্য করে         |
| ------------- | -------------------------- |
| Inheritance   | একই code reuse করা যায়     |
| Polymorphism  | flexible behavior তৈরি করে |
| Abstraction   | complexity কমায়            |
| Encapsulation | data secure রাখে           |


### Real-Life Importance in TypeScript Projects

বড় project যেমন:
- E-commerce website
- Food delivery app
- Banking system
- SaaS platform

এসব project-এ হাজার হাজার line code থাকে।

OOP ব্যবহার করলে:
- code clean থাকে
- feature add করা সহজ হয়
- team এ কাজ করা সহজ হয়
- maintenance সহজ হয়
- bug কম হয়

### Conclusion

OOP-এর চারটি pillar শুধু interview question না — এগুলো real project-এ অনেক important।

- Inheritance code reuse করতে সাহায্য করে
- Polymorphism code flexible করে
- Abstraction complexity কমায়
- Encapsulation data protect করে

এই concepts ভালোভাবে বুঝতে পারলে বড় TypeScript project manage করা অনেক সহজ হয়ে যায়।

তাই একজন ভালো TypeScript developer হওয়ার জন্য OOP fundamentals জানা খুবই গুরুত্বপূর্ণ।