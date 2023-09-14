function identity<T>(value: T): T {
  return value;
}

console.log(identity(1)); // 1
console.log(identity<number>(42));
console.log(identity<string>("Hello"));
console.log(identity<number[]>([1, 2, 3]));
