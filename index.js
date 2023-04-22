var http=require("http");
var mysql=require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test1234",
    database:"crud_example"});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql="select * from emp";
    con.query(sql,function(err,res){
        if(err) throw err;
        res.forEach(element => {
            console.log(element);
        });
    })
})

