function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
      
  if (typeof value === "number") {
    return value * 10;
  }

  return !value; 
}
 


function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    return 0;  
}
 


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
 
 

type Item = {
  title: string;
  rating: number;  
};
function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}



 
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}; 
function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}

 
 
 
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

 




function getUniqueValues<T extends number | string>(arr1: T[], arr2: T[]): T[] {
  
  const result: T[] = [];

  for(let i=0;i<arr1.length; i++) {
    let alreadyExists = false;
    for(let j=0; j<result.length;j++){
      if (arr1[i] === result[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      result.push(arr1[i]);
    }
  }
  for (let i=0;i<arr2.length;i++) {
    let alreadyExists = false;
    for (let j=0; j<result.length;j++) {
      if (arr2[i]===result[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      result.push(arr2[i]);
    }
  }

  return result;
}

 


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;  
};
function calculateTotalPrice(products: Product[]): number {
  
  if (products.length===0)
     return 0;

  return products.map((product) => {
      const basePrice = product.price * product.quantity;

      if (!product.discount) 
        return basePrice;

      const discountAmount = (basePrice*product.discount)/100;
      return (basePrice-discountAmount);
    })
    .reduce((total, curr) => total + curr, 0);
}

 

 


 
 
