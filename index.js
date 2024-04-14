/*password = RcxwNKig49MoY10F
user  = ankithtrainer

user = alokhalder
password = mI1kYNQTBP7SULZg

mongodb+srv://ankithtrainer:<password>@pcs-global-hrmgt-db.npdtfwd.mongodb.net/
*/


const express = require("express");
const app = express();

const database = require("./dbconn");


const cors = require("cors")

const employeeRoutes = require('./routes/employee-routes');

database.dbconn();

app.use(cors());
app.use(express.json());

app.use("/auth",employeeRoutes);


const PORT = 5000;
app.listen(PORT, ()=>{
console.log(`server start at ${PORT}`)
})


