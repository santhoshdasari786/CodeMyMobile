var mysql        = require('mysql');

var config = require('../config/database'); // get db config file

var connection   = mysql.createPool(config.database);

// connection.connect(function(err) {
//      console.log(err);	
//   });

module.exports = connection;
