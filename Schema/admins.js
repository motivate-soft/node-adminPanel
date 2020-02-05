/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40203
 Source Host           : localhost:27017
 Source Schema         : admin_db

 Target Server Type    : MongoDB
 Target Server Version : 40203
 File Encoding         : 65001

 Date: 05/02/2020 23:28:47
*/


// ----------------------------
// Collection structure for admins
// ----------------------------
db.getCollection("admins").drop();
db.createCollection("admins");

// ----------------------------
// Documents of admins
// ----------------------------
db.getCollection("admins").insert([ {
    _id: ObjectId("5e3adf8ad060e111d8661c72"),
    "Admin_name": "admin",
    "Admin_email": "admin@admin.com",
    "Admin_password": "admin123",
    __v: NumberInt("1"),
    "Admin_id": "123"
} ]);
db.getCollection("admins").insert([ {
    _id: ObjectId("5e3ae87ed060e111d8661c7a"),
    "Admin_id": "123",
    "Admin_name": "test",
    "Admin_email": "test@tet.com",
    "Admin_password": "test@tet.com",
    __v: NumberInt("0")
} ]);
db.getCollection("admins").insert([ {
    _id: ObjectId("5e3aecbd2ca93d2128eb6953"),
    "Admin_id": "123",
    "Admin_name": "robert",
    "Admin_email": "robert@gmail.com",
    "Admin_password": "robert123",
    __v: NumberInt("0")
} ]);
