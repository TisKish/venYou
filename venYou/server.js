const express=require('express')
const app=express();
const port=3000;
var path=require("path");
app.use("/node_modules", express.static("C:/Users/koota/Documents/GitHub/venYou/venYou/node_modules"));
app.use("/src", express.static("C:/Users/koota/Documents/GitHub/venYou/venYou/src/"));
app.use("/src/js", express.static("C:/Users/koota/Documents/GitHub/venYou/venYou/src/js"));
app.all("/*", function (req, res, next) {
   res.sendFile("index.html", { root: "C:/Users/koota/Documents/GitHub/venYou/venYou/src/" });
});
app.listen(port, () => console.log('Starting your Mobile Angular App on port ${port}!'))