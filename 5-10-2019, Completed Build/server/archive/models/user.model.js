const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    firstname: { type: String },
    lastname: {type: String},
    email: { type: String },
    DOB: { type: String },
    Achievements: { type: String },
    password: { type: String },
    interests: { type: Array },
    phoneno: { type: String},
    profilepicture: { type: String },
});
mongoose.model('User',userSchema);