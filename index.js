const http = require("http");

const dotenv = require("dotenv")
dotenv.config();

const myServer =http.createServer((req, res)=> {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')

    res.write("<h2>Node.js</h2>");
    res.write(
      "<div>Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.</div>"
    );
    res.write('</br>')
    res.write('</br>')
    res.write("<form method='POST' action='/about'>")
res.write("<button type='submit'>about</button>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end()
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')
   
    res.write("<h2>How does Node.js work?</h2>");
    res.write(
      "<div>A Node application runs in a single process. Node does not create a new thread for every request, as is often the case with traditional server-side programs. In this way, a Node server can handle thousands of concurrent connections without having to contend with thread concurrency issues or the overhead multithreading brings.</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node.js is event-driven and runs asynchronously. Code written for the Node environment does not follow the traditional model of receive, process, send, wait and receive found in other systems</div>"
    );
    res.write('</br>')
    res.write(
      "<div>Node is considered relatively easy to learn. It is widely implemented and has a large, active user community behind it.</div>"
    );
    res.write(
      "<h3>To check the json data use the url : localhost:4000/jsondata</h3>"
    );
    res.write('</br>')
   
    res.write("</body>");
    res.write("</html>");
    return res.end()
  }

if(url==='/jsondata')
    res.write(JSON.stringify([
        {
            login: "password",
            userid: "1010",
            password: "absbabb"
        },
        {
            login: "password",
            userid: "1110",
            password: "fsdfsdf"
        },
        {
            login: "password",
            userid: "1012",
            password: "dfsd"
        },
        {
            login: "password",
            userid: "1212",
            password: "jryjry"
        }
    ])
    )


  res.write("something went wrong")
  res.end()
}

)

const PORT = process.env.PORT

myServer.listen(PORT,()=>{
    console.log("active site");
})