var mongoose = require("mongoose");

var OrganiserInfoSchema = new mongoose.Schema({
    OrganiserName: String,
    OrganiserEmail: String,
    RegistrationDate: String,
    Password: String,
    PhoneNo: String
});

module.exports = mongoose.model("OrganiserInfo", OrganiserInfoSchema);