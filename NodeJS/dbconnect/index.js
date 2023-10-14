let m = require('mongoose');
m.set("strictQuery",true);
m.connect("mongodb+srv://ram_tanniru:11x13s%40ramTanniru@mern-1.pzgaab2.mongodb.net/");
let db = m.connection;
db.on("open",()=>{
    console.log("db connected");
})
db.on("error",()=>{
    console.log("error while conecting");
})
