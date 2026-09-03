
var exp=require("express")
var app=new exp()
var usr,pwd;

//get method api
app.get("/testfun",(request,response)=>{

    usr=request.query.un;
    pwd=request.query.pw;

    //res.send("<h1>Welcome to Express JS</h1>")
    response.write("<h1>User Name:"+usr+"</h1>")
    response.write("<h1>User Name:"+pwd+"</h1>")
    //res.send()
    if(usr==="admin" && pwd==="admin@123")
    {
        response.write("<font color='green' size='7'>valid user</font>");
    }
    else
    {
        response.write("<font color='red' size='7'>invalid user</font>");
    }
    response.send()
    
}).listen(2003)

console.log("port listening at 2003....")