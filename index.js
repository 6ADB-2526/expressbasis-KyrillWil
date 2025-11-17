const express = require("express");
const routeItems = require("./routes/items")

const app = express();

app.use(express.json())
app.use("/items", routeItems);
// // in vergelijking met Django (Python)
// function endpointRes(req,res){
//     res.send("Hallo wereld (van jonas)")
// }

// // http request mog: GET POST PUT DELETE
// // GET : info van server naar client
// // POST : info van client naar server
// app.get("/", (req, res) => {
//   res.send("Basis route");
// });

// de app luisterd naar een bepaalde opgegeven poort (3000)
app.listen(3000, () => console.log("server gestart op poort 3000"));