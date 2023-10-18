//task list
//1. first walk
//2. do cycling
//3. drink water
//4. take rest

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("1.first walk")
        resolve();
    },3000)
}).then(function(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("2.do cycling");
            resolve();
        },0)
    }).then(function(){
        new Promise(function(res,rej){
            console.log("3.drink water")
            res();
        }).then(function(){
            console.log("4.take rest")
        })
    })
})