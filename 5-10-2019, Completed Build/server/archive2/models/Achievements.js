var mongoose = require("mongoose");

var AchievementsSchema = new mongoose.Schema({
    CategoryId: String,
    SubCategoryId: String,
    Description: String,
    CertifiedImage: String,
    Verified: Boolean,
    VerifiedBy: String,
    Rank: String
});

module.exports = mongoose.model("Achievement", AchievementsSchema);