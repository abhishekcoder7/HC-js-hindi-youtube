//Implementation Using Array

const MyHashMap=function(){
    this.arr =[];
  
    this.put = function(key, value) {
        this.arr[key] = value;
    };
    this.get = function(key){
        return this.arr[key];
    };
    this.remove= function(key){
        delete this.arr[key];
    };
}

let mp = new MyHashMap();
mp.put("a",1);
mp.put("b",2);
mp.put("c",3);
mp.put("d",4);
mp.put("e",5);
console.log(mp.get("b"));
console.log(mp.get("c"));
console.log(mp.get("d"));
mp.remove("c");
mp.remove("d");
console.log(mp.get("b"));
console.log(mp.get("c"));
console.log(mp.get("d"));
