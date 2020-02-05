var express = require('express');
var router = express.Router();
var AdminLoginModel = require('../Schema/Admin_table');
/* GET home page. */
router.get('/', function (req, res, next) {
  AdminLoginModel.find(function (err, db_admin_array) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('Admin_login', { admin_array: db_admin_array });
    }
  });
});
router.post('/login_process', function (req, res, next) {

  AdminLoginModel.find(function (err, db_admin_array) {
    if (err) {
      console.log(err);
    }
    else {

      var flag = true;  //temp variable
      var admin_id = req.body.Admin_id;
      var admin_email = req.body.Admin_email;
      var admin_password = req.body.Admin_password;

      req.session.Admin_email = admin_email;
      req.session.Admin_password = admin_password;

      console.log("Email" + req.session.Admin_email);
      console.log("Password" + req.session.Admin_password);

      if (db_admin_array.length > 0) {
        for (var i = 0; i < db_admin_array.length; i++) {
          if (req.session.Admin_email == db_admin_array[i].Admin_email &&
            req.session.Admin_password == db_admin_array[i].Admin_password) {
            flag = true;
            console.log("Session Connected Successfully");
            res.redirect('/admin/data_display');
            break;
          }
          else {
            flag = false;
          }
        }
        if (!flag) {
          res.redirect('/');
        }
      }
      else {
        res.redirect('/');
      }
    }
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();

  res.redirect('/');
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard')
});
module.exports = router;