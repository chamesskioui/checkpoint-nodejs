const http=require("http")
const server= http.createServer((req,res)=>{
  res.status(200).send("<h1>Hello Node!!!!</h1>")
})
server.listen(3000,()=>{console.log("server is running")})