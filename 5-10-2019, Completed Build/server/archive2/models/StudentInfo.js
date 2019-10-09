var mongoose = require("mongoose");
var UserInterests = require('./UserInterests.js');
var Achievements = require('./Achievements.js');

var StudentInfoSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    EmailId: String,
    DOB: String,
    PhoneNo: String,
    LoginId: String,
    ProfilePic: String,
    UserInterests: String,
    Achievements: [Achievements.schema]
});

module.exports = mongoose.model("StudentInfo", StudentInfoSchema);