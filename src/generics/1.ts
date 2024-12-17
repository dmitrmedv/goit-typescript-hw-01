import axios from "axios";

// async function fetchData(url: string): Promise {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

interface addFn {
  (num1: number, num2: number): number;
}

let fn: addFn = (first, second) => first + second;

console.log(fn(90, 10));
