const name = "hitesh"
const repoCount = 50
console.log(name.charAt(0));
console.log(name[0]);
//dont write like this, its correct though but not recomm.
// console.log(name + repoCount + " Value");


//String Interpolation - use `${}` in string.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//Explore as many possible string methods, use mdn docs nd ChatGPT
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


//substring() vs. slice() vs. substr()