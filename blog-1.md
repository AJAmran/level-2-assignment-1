## Why is `any` a “Type Safety Hole” and Why is `unknown` Safer in TypeScript?

# Introduction:

TypeScript আমাদের JavaScript কোডকে আরো ‍safe & predictable করতে সাহায্য করে।

কিন্তু typeScript এ এমন কিছু টাইপ আছে যেগুলো ভুলভাবে ব্যবহারের কারণে type safety নষ্ট হয়ে যেতে পারে।

এগুলোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ ২টি type হলো:

- Any
- Unknown

আমরা যখন নতুন নতুন typeScript শেখা শুরু করি তখন আমাদের কাছে ‍any ব্যবহার করাটা সহজ মনে হয়। কিন্তু any ব্যবহারের কারণে type ‍safety baypass হয়ে যায়। ফলে typeScript ব্যবহারের যে সুফল সেটা আর পাওয়া যায় না।

এই ব্লগে আমরা যে সব বিষয় জানবোঃ

- কেন "any" কে "type safety hole" বলা হয়
- কেন "unknown" safer
- type Narrowing কী
- example সহ পরো concept

---

# What is 'any' ?

"any" মানে typeScript কে বলা হয়

- তুমি type check করো না, আমি তোমার থেকে বেশি জানি, নিজে সব ম্যানেজ করবো।

অর্থাৎ, ভেরিয়েবলে যেকোনো ধরনের value রাখা যাবে।

example:

```ts
let data: any = "hello";
data = 100;
data = true;
```

এখানে typeScript কোন error দিচ্ছে না কারণ any ব্যবাহরের কারণে type checking বন্ধ হয়ে যায়।

# Why is any Called a “Type Safety Hole”?

কারণ any typeScript-এর safety system bypass করে দেয়।

example:

```ts
let userInput: any = 50;
console.log(userInput.toUpperCase());
```

এখানে TypeScript error দেখাবে না।
কিন্তু runtime এ error হবে:
TypeError: userInput.toUpperCase is not a function

কারণ number-এর উপর toUpperCase() কাজ করে না।

অর্থাৎ:
-TypeScript error ধরতে পারলো না
-Bug runtime এ গিয়ে ধরা পড়লো
-Application crash করতে পারে

এজন্য any কে বলা হয়:

“Type Safety Hole”
কারণ এটি type safety ভেঙে 

# What is unknown?
unknown হলো safer version of any.

খানে TypeScript বলে:

“আমি জানি না data কী type। আগে check করো, তারপর use করো।”

let value: unknown = "TypeScript";

console.log(value.toUpperCase());
এখানে TypeScript error দিবে। 
value' is of type 'unknown'.ts
কারণ আগে type check করতে হবে।

# Why is unknown Safer?
কারণ unknown force করে type checking করতে।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```
এখন safe.

কারণ আমরা আগে confirm করেছি এটি string।

# What is Type Narrowing?
Type Narrowing মানে:

একটি unknown বা multiple type থেকে exact type identify করা।

ypeScript বিভিন্ন condition ব্যবহার করে type narrow করে।

যেমন:
- type of
- instanceof
- in
- custom type guard

## example of type narrowing

```ts
function valuePrint(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

```
এখানে:

string হলে toUpperCase()
number হলে toFixed()

TypeScript safely বুঝতে পারছে কোন type use হচ্ছে।

এটাই Type Narrowing।

## Real life example:


ধরুন API থেকে data আসছে।

আমরা আগে থেকে জানি না response কী হবে।
```ts
const response: unknown = JSON.parse(data);
এখন safe ভাবে check করতে হবে:

if (typeof response === "object" && response !== null) {
  console.log("Valid object");
}
```
এভাবে application crash হওয়ার chance কমে যায়।

## any vs unknown
Sure! Here is the comparison table for any and unknown in Markdown format, optimized for your .md file:

| Feature [1, 2, 3, 4, 5] | any | unknown |
|---|---|---|
| Assignability | Can assign any value to it | Can assign any value to it |
| Usage Safety | No type checks required (Unsafe) | Requires type checks or type casting (Safe) |
| Purpose | Opt-out of type checking | Enforce safety while keeping flexibility |
| Common Use | Temporary workaround / Legacy code | Safe handling of dynamic data (APIs, User input) |


## When Should You Use unknown?
unknown ব্যবহার করা ভালো যখন:

- API response handle করা হয়
- User input আসে
- Dynamic data নিয়ে কাজ হয়
- Exact type আগে জানা থাকে না

## 
Best Practice

- unknown ব্যবহার করুন যখন type নিশ্চিত না
- Type narrowing ব্যবহার করুন
- Compile time error-কে গুরুত্ব দিন

❌ অপ্রয়োজনে any ব্যবহার  না করা

# Conclusion
any ব্যবহার করলে TypeScript-এর সবচেয়ে বড় সুবিধা — type safety — নষ্ট হয়ে যায়।
এজন্য এটিকে “type safety hole” বলা হয়।

অন্যদিকে unknown safer কারণ এটি developer-কে force করে data check করতে।

আর Type Narrowing ব্যবহার করে আমরা safely exact type identify করতে পারি।

Professional TypeScript project-এ সবসময় চেষ্টা করুন:

- any avoid করতে
- unknown prefer করতে
- Proper type narrowing ব্যবহার করতে

এতে code হবে:

- safer
- cleaner
- maintainable
- bug-free