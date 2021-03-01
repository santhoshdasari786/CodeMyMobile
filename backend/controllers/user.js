var connection = require("../lib/dbconn"); // get db config file
var SqlString = require("sqlstring");
// Display list of all users.
// exports.user_list = function (req, res) {

//     connection.query(SqlString.format("select * from user ;"), function (err, rows) {
//         if (err) {
//             return res.send({ success: false, msg: "Failed", error: err });
//         }
//         res.send({ success: true, msg: 'Success', results: rows });

//     });
// };

exports.user_list = function (req, res) {
    console.log(16,req.query,req.body)
    //To calculate Total Count use MySQL count function
    var query = "Select count(*) as TotalCount from ??";
    // Mention table from where you want to fetch records example-users
    var table = ["user"];
    query = SqlString.format(query, table);
    let startNum;
    let LimitNum;
    connection.query(query, function (err, rows) {
        if (err) {
            return err;
        } else {

            //store Total count in variable
            let totalCount = rows[0].TotalCount

            if (req.query.start == '' || req.query.limit == '') {
                 startNum = 0;
                 LimitNum = 10;
            }

            else {
                //parse int Convert String to number 
                 startNum = parseInt(req.query.start);
                 LimitNum = parseInt(req.query.limit);
            }
        }

        connection.query(SqlString.format("select * from user LIMIT ? OFFSET ? ;",[LimitNum,startNum]), function (err, rows) {
            if (err) {
                return res.send({ success: false, msg: "Failed", error: err });
            }
            res.send({ success: true, msg: 'Success', results: rows });

        });

    });
};

exports.getFriendsList = function (req, res) {

    let q = SqlString.format(`select u1.* from codemymobile.friendship f1 
    inner join codemymobile.friendship f2 on f1.friend = f2.user 
    
    left join codemymobile.user u1 on u1.id = f2.user
     where f1.user = ? group by u1.id;`,[req.query.user])

    // let q = SqlString.format(`select * from codemymobile.user u1 
    // inner join codemymobile.friendship f1 on f1.friend =u1.id 
    // where  f1.user = ? or f1.friend = ? and id != ?  group by id ;`,[req.query.user,req.query.user,req.query.user])

    // let q = SqlString.format("select * from codemymobile.user where id in (select friend from codemymobile.friendship where user = ?);", [req.query.user])

    connection.query(q, function (err, rows) {
        if (err) {
            return res.send({ success: false, msg: "Failed", error: err });
        }
        res.send({ success: true, msg: 'Success', results: rows });

    });
};

exports.getFriendsofFriendsList = function (req, res) {

    // let q = SqlString.format(`select u1.* from codemymobile.friendship f1 
    // inner join codemymobile.friendship f2 on f1.friend = f2.user 
    // left join codemymobile.user u1 on u1.id = f2.friend
    //  where f1.user = ? group by f2.friend;`, [req.query.user])

    let q = SqlString.format(`select u1.* from codemymobile.friendship f1 
    inner join codemymobile.friendship f2 on f1.friend = f2.user 
    
    left join codemymobile.user u1 on u1.id = f2.user
     where f1.user = ? group by u1.id;`,[req.query.user])

    // let q =SqlString.format(`select u1.* from codemymobile.friendship f1 
    // inner join codemymobile.friendship f2 on f1.friend = f2.user 
    // left join codemymobile.user u1 on u1.id = f2.friend
    //  where f1.user = ? group by f2.friend;`, [req.query.user])

    connection.query(q, function (err, rows) {
        if (err) {
            return res.send({ success: false, msg: "Failed", error: err });
        }
        res.send({ success: true, msg: 'Success', results: rows });

    });
};