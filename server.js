console.log("my first express server is here!");

const express = require("express");
const app = express();

app.get("/", function(request, response)
{
  //console.log(request);
  response.send("<h1>hi</h1>");
})
app.listen(3000, function()
{
  console.log("Server started on port 3000.");
});
