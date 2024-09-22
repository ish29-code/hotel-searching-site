const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
 .then((res)=>{
     console.log("connected to DB");
 })
 .catch((err)=>{
     console.log(err);
 });

async function main(){
     await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
     res.send("hiiiii❤️❤️❤️❤️❤️");
});

app.get("/testlisting",async (req,res)=>{
     let samplelisting = new Listing ({
          title : "my new villa",
          description:"by the beach",
          price:1200,
          location:"calangute,goa",
          country:"india",
     });
     await samplelisting.save()
     console.log("sample is saved");
     res.send("sucessfull testing");
});

app.listen(8080,()=>{
     console.log("server is listning to port : 8080");
})