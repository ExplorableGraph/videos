// Display all the values of an in-memory object.
const obj = {
  Alice: "Hello, Alice.",
  Bob: "Hello, Bob.",
  Carol: "Hello, Carol.",
};

for (const key in obj) {
  const value = obj[key];
  console.log(value);
}
