buf=new Buffer.alloc(250,'a')
               //syntax:Buffer.alloc(size,fill,encoding)
console.log(buf); // output: default all value 00
console.log(buf.toString()) 