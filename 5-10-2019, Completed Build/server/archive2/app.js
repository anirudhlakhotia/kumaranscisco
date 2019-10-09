var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
const cors =require('cors');
var user = require("./models/user.js");
var Student = require("./models/StudentInfo.js");
var UserInterests = require("./models/UserInterests.js");

mongoose.connect("mongodb://localhost/CiscoV1", {useNewUrlParser: true, useUnifiedTopology: true});



var app = express();
app.use(require("express-session")({
    secret: "!YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWGHATRS VWESDFYUBGCHASD       ASDFGUHIIIIIIIIIIIII sywgd76yefdhkmmijfi0jnhfiofjsdhf89yfuiasui789sdfbsdfsdjkfasdfjsdfjweioseklfsdkldesdf!!",
    resave: false,
    saveUninitialized: false
})); 
app.use(express.static("styles"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
mongoose.set('useCreateIndex', true);

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, process.env.IP, function(req, res)
{
    console.log("SERVER STARTED");
});
app.use(cors());

passport.use('user' ,new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// function isLoggedIn(req, res, next)
// {
//     if(req.originalUrl === '/login' || req.originalUrl === '/' || req.originalUrl === '/register' || req. === '/test')
//     {
//         return next();
//     }
//     else
//     {
//         if(!req.isAuthenticated())
//         {
//             res.redirect('/');
//         }
//         else
//         {
//             next();
//         }
//     }
// }


// // app.use(isLoggedIn);

//////////////////////////////////////////////////////////////////////////////////////////

app.get('/', function(req, res)
{
    res.render("index");
});

app.get('/register', function(req, res)
{
    res.render("register");
});

function xyz()
{
    console.log("heloo, world");
}
function furtherInfo(fName, lName, emailId, DOB, phoneNo, loginId)
{
    console.log("Saving Further info...");
    var newStudent = new Student({
        FirstName: fName,
        LastName: lName,
        EmailId: emailId,
        DOB: DOB,
        PhoneNo: phoneNo,
        LoginId: loginId,
        UserInterests: "",
        Achievements: []
    });
    
    newStudent.save(function(err, obj)
    {
        if(err)
        {
            console.log("ERROR, " + err);
        }
        else
        {
            console.log(obj);
            return (obj);
        }
    });
}

app.post('/register', function(req, res)
{   

    console.log("registering user");


    user.register(new user({
        username: req.body.email, 
        userType: req.body.userType
    }), req.body.password, function(err, user)
    {
        if(err)
        {
            console.log("ERROR:\n" + err);
            return res.redirect('/register');
        }
        passport.authenticate("local")(req, res, function()
        {   
            console.log(user);
            if(true)
            {
                var fName = req.body.firstname;
                var lName = req.body.lastname;
                var emailId = req.body.email;
                var DOB = req.body.DOB;
                var phoneNo = req.body.phoneno;
                var loginId = user._id;

                res.send(furtherInfo(fName, lName, emailId, DOB, phoneNo, loginId));
            }
            else
            {
                res.send("Adding " + user.userType + " is not supported yet.")
            }
            
        });
    });
});

app.get('/furtherInfo', function(req, res)
{
    res.render("furtherInfo", {id: req.query.id});
});

///NEEDED FOR 2 STEP AUTHENTICATION WHEN ADDED

// app.post('/furtherInfo', function(req, res)
// {
    // var fName = req.body.firstname;
    // var lName = req.body.lastname;
    // var emailId = req.body.email;
    // var DOB = req.body.DOB;
    // var phoneNo = req.body.phoneno;
    // var loginId = req.body.loginId;
    // var userInterestArrayStrings = req.body.interests;
    // var newStudent = new Student({
    //     FirstName: fName,
    //     LastName: lName,
    //     EmailId: emailId,
    //     DOB: DOB,
    //     PhoneNo: phoneNo,
    //     LoginId: loginId,
    //     UserInterests: userInterestArrayStrings,
    //     Achievements: []
    // });
    
    // newStudent.save(function(err, obj)
    // {
    //     if(err)
    //     {
    //         console.log("ERROR, " + err);
    //     }
    //     else
    //     {
    //         console.log(obj);
    //         res.redirect('/');
    //     }
    // });

// });


app.get('/login', function(req, res)
{
    console.log("Login Failed");
    res.status(422).send(false);
});

app.get('/dashboard', function(req, res)
{
    console.log("Login Successful");
    Student.find({loginId: user._id}, function(err, obj)
    {
        if(!err)
        {
            res.send(obj);
        }
        else{
            res.status(422).send(false);
        }
    });
});

app.post('/login', passport.authenticate("user", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}) ,function(req, res)
{
});


app.get('/logout', function(req, res)
{
    req.logout();
    res.send("Logout");
});

