const{MongoClient}=require("mongodb")
var exp=require("express")
var app=new exp()
var usr,pwd;

//get method api
app.get("/testfun",async(request,response)=>{

    usr=request.query.un;
    pwd=request.query.pw;
    const data={username:usr,password:pwd}
    var client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    response.write("<h1>Express and mongodb connection success</h1>")
    try{
        const result=await client.db("jsd").collection("login").insertOne(data)
        console.log(result)
        response.write("<h1>data inserted successfully</h1>")
    } catch (error) {
        console.log(error)
        response.write("<h1>error</h1>")
    }



    response.end()
    
}).listen(2003)

console.log("port listening at 2003....")