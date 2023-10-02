const test = {a: 1, b: 2, c: 3, "d":5, e: "abhishek", "f": "singh"};

for (const [key, value] of Object.entries(test)) {
  console.log(key, value);
}