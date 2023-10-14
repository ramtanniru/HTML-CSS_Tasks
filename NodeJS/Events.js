let event = require('events');
let obj = new event();
obj.on("order pizza",()=>{
    console.log("You ordered pizza.");
})
obj.emit("order pizza");