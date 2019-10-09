var env = process.env.NODE_ENV || 'development';
var config =require('./config.json');
var enConf= config[env];
Object.keys(enConf).forEach(key => process.env[key]=enConf[key]);