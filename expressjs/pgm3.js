const{MongoClient}=require("mongodb")
var exp=require("body-parser")
var exp=require("express")
var app=new exp()
var urlencodedParser=exp.urlencoded({extended:false});
var usr,pwd;

//get method api
app.post("/testfun",urlencodedParser,async(request,response)=>{

    usr=request.body.un;
    pwd=request.body.pw;
    const data={username:usr,password:pwd}
    var client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    response.write("<h1>Express and mongodb connection success</h1>")
    try{
        const result=await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        response.write("<h1>data inserted successfully</h1>")
    } catch  {
        console.log("error")
        response.write("<h1>error</h1>")
    }



    response.end()
    
}).listen(2003)

console.log("port listening at 2003....")