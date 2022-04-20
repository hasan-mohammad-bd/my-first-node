const express = require("express");
const app =express();
const port = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Look Mama! I can code now hello whats up?")
});

app.listen(port, () =>{
    console.log("Listening to port", port);
})