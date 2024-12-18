import axios from "axios";

// async function fetchData(url: string): Promise<string> {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

interface addFn {
  (one: number, two: number): number;
}
let fn: addFn = (one, two) => one + two;

console.log(fn(90, 70));
