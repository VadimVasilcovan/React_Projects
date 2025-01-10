// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

const SpreadOperaotr = () => {
  let numbers = [1, 2, 3, 4, 5];
  let maximum = Math.max(...numbers);
  let minimum = Math.min(...numbers);

  console.log(maximum);

  let fruits = ["apple", "banana", "orange"];
  let vegetables = ["potatoes", "carrots"];

  let food = [...fruits, ...vegetables, "strowbery"];

  console.log([...food, "tomatoes"]);
  return <></>;
};

export default SpreadOperaotr;

//Combine object

const person = { age: 25, name: "Doe" };
const job = { jobTitle: "Web Developer", experience: 5 };

const employee = { ...person, ...job };

console.log(employee);

const car = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "White",
    price: 20000,
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2021,
    color: "Black",
    price: 22000,
  },
];

console.log(...car);
