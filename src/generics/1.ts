import axios from "axios";

// async function fetchData(url: string): Promise<string> {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

interface User {
  username: string;
  age: number;
  isActive: boolean;
}

function displayUserProfile({ username, age }: User): string {
  return `Hello, I am ${username} and i ${age} years old...`;
}

displayUserProfile({ username: "Alex", age: 24, isActive: false });
