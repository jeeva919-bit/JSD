buf=new Buffer.alloc(250)
                //syntax:buffer.alloc(size,fill,encoding)
console.log(buf); // output: default all value 00
len=buf.write("welcome to gowtham")
console.log(len)
console.log(buf)
console.log(buf.toString()) // output: welcome to gowtham