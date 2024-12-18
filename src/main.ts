import "./style.css";

type Person = {
  name: string;
  age: number;
  location: string;
};
type PersonKeys = keyof Person; // 'name' | 'age' | 'location'
