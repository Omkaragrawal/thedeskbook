var async = require("async");
var mysql =	require("mysql");

var pool	=	mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'thedeskbook',
    debug    :  false
});

var handle_database = function(req,type,callback) {
  var self = this;
	async.waterfall([
		function(callback) {
			pool.getConnection(function(err,connection){
				if(err) {
					callback(true);
				} else {
					callback(null,connection);
				}
			});
		},
		function(connection,callback) {
			var SQLquery;
            var inserts = [];
			switch(type) {
				case "login" :
                    SQLquery = "SELECT * FROM ?? INNER JOIN ?? ON UserLogin.idUserLogin = UserProfile.idUserProfile WHERE ?? = ? AND ?? = ?";
                    inserts = ["UserLogin","UserProfile","UserLoginEmail",req.body.user_email,"UserLoginPassword",req.body.user_password];
				break;
                case "checkEmail" :
                    SQLquery = "SELECT * FROM ?? WHERE ?? = ?";
                    inserts = ["UserLogin","UserLoginEmail",req.body.user_email];
                break;
				case "register" :
				    SQLquery = "INSERT into ?? (??,??) VALUES (?,?)";
                    inserts = ["UserLogin","UserLoginEmail","UserLoginPassword",req.body.user_email,req.body.user_password];
				break;
                case "updateName" :
                    SQLquery = "INSERT into ?? (??,??,??) VALUES (?,?,?)";
                    inserts = ["UserProfile","idUserProfile","UserProfileName","UserProfileAccountStatus",self._userId,req.body.user_name,"ACTIVE"];
                break
				case "addStatus" :
    				SQLquery = "INSERT into ?? (??,??,??,??,??,??) VALUES (?,?,?,?,?,?)";
                    inserts = ["UserDeskUploads"
                      ,"UserDeskUploadsUserId","UserDeskUploadsPath"
                      ,"UserDeskUploadsSize","UserDeskUploadsFileName"
                      ,"UserDeskUploadsTitle","UserDeskUploadsType"
                      ,req.session.key["user_id"],req.body.path,req.body.fileSize
                      ,req.body.fileName,req.body.fileTitle === undefined ? "MyDesk" : req.body.fileTitle,req.body.shareType];
				break;
				case "getStatus" :
				    SQLquery = "SELECT * FROM ?? WHERE ??=? ORDER BY UserDeskUploadsTime DESC;";
                    inserts = ["UserDeskUploads"];
                    if(req.body.myDesk !== undefined && req.body.myDesk) {
                        inserts.push("UserDeskUploadsUserId",req.session.key["user_id"]);
                    } else {
                        inserts.push("UserDeskUploadsType","PUBLIC");
                    }
				break;
				default :
				break;
			}
            SQLquery = mysql.format(SQLquery,inserts);
			callback(null,connection,SQLquery);
		},
		function(connection,SQLquery,callback) {
			connection.query(SQLquery,function(err,rows){
            console.log(SQLquery);
            connection.release();
			if(!err) {
				if(type === "login") {
					callback(rows.length === 0 ? false : rows[0]);
				} else if(type === "getStatus") {
                    callback(rows.length === 0 ? false : rows);
                } else if(type === "checkEmail") {
                    callback(rows.length === 0 ? false : true);
                } else if(type === "register") {
                    self._userId = rows.insertId;
                    callback(_userId);
                } else {
					callback(false);
				}
			} else {
                console.log(err);
                callback(true);
            }
		});
	}
    ],function(result){
    	if(typeof(result) === "boolean" && result === true) {
    		callback(null);
    	} else {
    		callback(result);
    	}
    });
}
module.exports = handle_database;
