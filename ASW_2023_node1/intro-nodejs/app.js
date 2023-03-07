//
console.log("hello world");

const fs = require('fs');

fs.writeFileSync('hello.txt','hello world');
fs.writeFile('hello2.txt','hello word',()=>{
    console.log('file written');
})

setTimeout(()=>{
    console.log("timer scaduto");
},1);

console.log("ciao");
console.log("ciao ancora");