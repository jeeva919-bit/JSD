const{MongoClient}=require("mongodb")
var exp=require("express")
var app=new exp()
var usr,pwd;

//get method api
app.get("/showall",async(request,response)=>{
    var client=new MongoClient("mongodb://127.0.0.1:27017/")
    client.connect()
    response.write("<h1>read all datas from mongodb</h1>")
    try{
        const result=await client.db("jsd").collection("login").find({}).toArray()
        console.log(result)
        var len=result.length;
        response.write("<h1>total records available:"+len+"</h1>")
        response.write("<table border='2' align='center' cellpadding='10' bg='gray'>")
        response.write("<tr><th>s.no</th><th>username</th><th>password</th></tr>")
        for(let i=0;i<len;i++){
            response.write("<tr><td>"+(i+1)+"</td><td>"+result[i].username+"</td><td>"+result[i].password+"</td></tr>")
        }
        response.write("</table>")
    } catch {
        console.log("error")
        response.write("<h1>error</h1>")
    }

    response.end()
    
}).listen(2004)

console.log("port listening at 2004....")