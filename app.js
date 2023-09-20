// const calc = require("./sum");

// console.log(calc.sub(1,2));

// const os = require("os");

// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.hostname());

// const fs = require("fs");

// // fs.readFile("./index.html", (err,data) => {
// //     if (err) {
// //         console.log(err.message);
// //     }else{
// //         console.log(data.toString());
// //     }
// // });

// fs.writeFile('text.txt', 'hello world', (err) => {
//     if (err) console.log(err.message);
// });
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  switch (req.url) {
    case "/":
      res.end("<h1>Home</h1>");
      break;
      case "/about":
      res.end("About");
      break;
    default:
      res.end("404 not found");
  }
});
server.listen(3000, () => console.log("server is running"));
