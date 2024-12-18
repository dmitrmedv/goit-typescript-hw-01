import "./style.css";

function identity<T>(arg: T[]): T {
  return arg[0];
}

let fn = identity([9, 8, 7, 6]);
console.log(fn);
