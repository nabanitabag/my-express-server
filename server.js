console.log("my first express server is here!");

const express = require("express");
const app = express();

app.get("/", function(request, response)
{
  //console.log(request);
  response.send("<h1>hi</h1>");
});

app.get("/contact", function(request, response)
{
  //console.log(request);
  response.send("<h1>Contact me at ashley.makruz@gmail.com</h1>");
});

app.get("/about", function(request, response)
{
  //console.log(request);
  response.send("<h1>Hey all! Meet me, Nabanita. I am a software engineer. I am hacky and curious. I am passionate about technology that changes the world for good. i also care for sicoal equity and equality, human and animal rights and action against climate change. Also, I love programming! How cool is tech! </h1>");
});

app.get("/hobbies", function(request, response)
{
  //console.log(request);
  response.send("<ul><li>binging roasted makhana</li><li>browsing the internet</li><li>reading/knowing</li><li>gardening</li></ul>");
});


app.listen(3000, function()
{
  console.log("Server started on port 3000.");
});
