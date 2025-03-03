import 'dotenv/config';


//Import the "http" node.js module  
import http from 'http';


//import the "neon" client 
import { neon } from '@neondatabase/serverless';


//create a database connection using the .env url
const sql = neon(process.env.DATABASE_URL);


//defines a handler than will be call every request at the server
const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};


//create a http server at the 3000 port
http.createServer(requestHandler).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


//exportando o 
export default sql;