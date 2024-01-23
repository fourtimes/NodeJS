const express = require('express')
const jsonwebtoken = require("jsonwebtoken");

const app=express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("welcome to the basic jwt authentication")
});


const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
app.post('/login',(req, res)=>{
        const {username, password} = req.body  // input value must be json format
        if (username === 'ashli' && password === 'ashli@123'){
            return res.json({
                token: jsonwebtoken.sign({user:`${username}`, key: `${password}`}, JWT_SECRET ),
            })
        }
        
        return res.status(401).json({message: "The username and password are invalid"});
})


app.listen(4000, ()=>{
    console.log("API is running on localhost:4000")
});