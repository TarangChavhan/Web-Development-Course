import express from "express";
import morgan from "morgan";
const app = express()


app.get("/",(req,resp)=>{
    resp.send("Root Page")
})

app.get("/error",(req,resp)=>{
    const error = new error('')
    error = 404;
    next(error);
})
app.get("/Home",(req,resp)=>{
    resp.send("This is the home page")

})

function errorHandlin(error,req,resp,next){
     resp.status(error.status || 500).send("Try Again After Some Time");
}
app.use(errorHandlin)

app.listen(4000);