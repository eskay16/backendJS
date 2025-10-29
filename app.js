
const calc = (a, b, fn) => {
  console.log("calc")
  return fn(a, b);
}

const addition = (a, b) => {
  return a + b
}

const result = calc(2, 3, addition);
console.log(result)

const calc_one =
  (a, b) =>
    (c) => {
      console.log(a, b, c)

      return a + b + c
    }


const result_two = calc_one(1, 2)
console.log("something in between")

console.log(result_two(3))
