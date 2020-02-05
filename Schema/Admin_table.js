var mongoose= require('mongoose');
var schema=mongoose.Schema;
var admin_data  = new schema({
    Admin_id   : String,
    Admin_name  : String,
    Admin_email       : String,
    Admin_password    : String, 
});
module.exports=mongoose.model('Admin',admin_data);