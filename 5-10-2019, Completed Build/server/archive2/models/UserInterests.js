var mongoose = require("mongoose");

var UserInteretsSchema = new mongoose.Schema({
    InterestId: String,
    CategoryId: String,
    SubCategoryId: String
});

module.exports = mongoose.model("UserInterest", UserInteretsSchema);