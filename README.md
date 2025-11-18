1.Typescript এ interface ও type দুইটি ই অবজেক্ট এর স্ট্রাকচার নির্ধারণ করতে ব্যবহার করা হয়।
Interface:এটা মূলত অবজেক্ট এর shape বর্ণনা করতে ব্যবহার করা হয় এবং এদেরকে এক্সটেন্ড করা যায় সহজে।এক নামে একাধিক ইন্টারফেস লিখলে typescript ঐগুলিকে merge করে।
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Niloy",
  age: 22,
};
type: এটা বেশি ফ্লেক্সিবল কিন্তু ইন্টারফেস এর মত merge সাপোর্ট করে না।এটা টাইপস্ক্রিপ্ট এর একটা টাইপ এলিয়াস।টাইপ শুধু অবজেক্ট এর না বরং স্ট্রিং,নাম্বার, এমনকি ফাংশন ও ধরে রাখতে পারে।
type Product = {
  title: string;
  price: number;
};

const item: Product = {
  title: "Laptop",
  price: 75000,
};
---

2.keyof typescript এর একটা পাওয়ারফুল ইউটিলিটি কীওয়ার্ড।এটা কোনো অবজেক্ট টাইপ থেকে তার key এর ইউনিয়ন তৈরি করে।যেমন:
type Person = { name: string; age: number };
type Keys = keyof Person; 
এখানে বোঝা যায় যে কোনো ফাংশনে পাস করা key প্রকৃত পক্ষে অবজেক্ট এর একটা বৈধ প্রপার্টি

