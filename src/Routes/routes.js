const express = require('express');
const controller = require('../Controllers/usercontroller');
const Router = express.Router();
const { LINK } = require('../utils/InternalLinks');

const { INSERTUSER, INSERTCITY, GETUSER, UPDATEUSER, DELETEUSER } = LINK;

const { insertUser, insertCity, getUser, deleteUser, updateUser } = controller;

Router.post(INSERTUSER, insertUser);

Router.post(INSERTCITY, insertCity);

Router.get(GETUSER, getUser);

Router.delete(DELETEUSER, deleteUser)

Router.put(UPDATEUSER, updateUser);

module.exports = Router;