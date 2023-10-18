//stores result in cache object so that function ko baar baar execute na krna pde
const fn = (num)=>{
    let res=0;
    for(let i =1;i<=num;i++){
        res+=i;
    }
    return res;
}

const memo = (fn)=>{
    let cache={}
    return function(...args){
        let n =args[0];
        if(n in cache){
            console.log("from cache");
            return cache[n];
        }else{
            cache[n]=fn(n);
            console.log("NOT from cache");
            return cache[n];
        }
    }
}

const efficient = memo(fn);

console.time();
console.log(efficient(10))
console.timeEnd();

console.time();
console.log(efficient(10))
console.timeEnd();
console.time();
console.log(efficient(10))
console.timeEnd();

console.time()
console.log(efficient(15))
console.timeEnd()
console.time()
console.log(efficient(2))
console.timeEnd()


//LEETCODE MEMO QUES
function memoize(fn) {
    let cache={}
    return function(...args) {
        let str = JSON.stringify(args);
        if(str in cache) return cache[str];
        else{
            cache[str]=fn(...args);
            return cache[str];
        }
    }
}