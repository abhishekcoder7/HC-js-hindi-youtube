const test = {a: 1, b: 2, c: 3, "d":5, e: "abhishek", "f": "singh"};

for (const [key, value] of Object.entries(test)) {
  console.log(key, value);
}


// let user = {
//     name: "John Doe",
//     age: 40
//   };
  
// 2 Methods to check if key exist in object or not
// if ("name" in user) {
//     console.log("the key exists on the object");
//   }
  
//   Or
  
//   if (user.hasOwnProperty("name")) {
//     console.log("the key exists on the object");
//   }


//Oject.keys() and Object.values() -> returns array of all keys/values

const data = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(data));
  console.log(Object.values(data));