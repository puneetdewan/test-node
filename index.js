const express = require("express");

const app = express();
// const r = {
//     statusCode
// }

app.listen(3000,(req, response)=>{
  console.log("Server satrted at 3000");
//   App.g
//   App.get("/sum"). {

//   }
});
app.get('/sum/:a/:b', (request, res, next) => {
    console.log(request.params.a);
    const {a, b} = request.params;
    // console.log(res)
    if(isNaN(a) || isNaN(b)) {
        res.status(200);
    res.json({
        "Error": "Not a number"
      });
    } else {
        res.status(200);
        res.json({
            "value": Number(request.params.a) + Number(request.params.b)
        });
    } 
    
});
// App.get(('/sum', request, res)=> {
//    console.log(request.params);
//    return "result";
// })
// console.log("test");

