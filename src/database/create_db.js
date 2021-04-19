var mysql = require('mysql');

var con = mysql.createConnection ({
    host:"localhost",
    user:"yourusername",
    password:"youruserpassword";
});

con.connect(function(err)){
    if(err)throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE db",function(err result)){
        if(err) throw err;
        console.log("Database created");
    });
});