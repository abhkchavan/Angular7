const express=require('express');

const app=express();

app.use((req,res,next)=>{

    console.log("nsbsdbsbasbas");

    //next();

});


app.use((req, res, nest) => {

    res.send("express here");

});

module.exports=app;