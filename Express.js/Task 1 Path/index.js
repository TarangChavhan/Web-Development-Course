import express from 'express';
import path from 'path';

const app = express();

// Static files (CSS, JS, Images)
app.use(express.static("Pages"));

const absPath = path.resolve("Pages");

// Home Page
app.get("/", (req, res) => {
    res.sendFile(absPath+"/index.html");
});

// Login Page
app.get("/login", (req, res) => {
    res.sendFile(absPath+"/Login.html");
});

// Login Form Submit
app.post("/login", (req, res) => {
    res.sendFile(absPath+"/Login.html");
});

// Registration Page
app.get("/Registration", (req, res) => {
    res.sendFile(absPath+"/Registration.html");
});

// Home Page
app.get("/Home", (req, res) => {
    res.sendFile(absPath+"/Home.html");
});

app.post("/Home", (req, res) => {
    res.sendFile(absPath+"/Home.html");
});

// About Page
app.get("/About", (req, res) => {
    res.sendFile(absPath+"/About.html");
});

// Contact Page
app.get("/Contact", (req, res) => {
    res.sendFile(absPath+"/contact.html");
});

app.use((req,res)=>{
    res.status(404).sendFile(absPath+"/404.html");
})

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});