const exp = require('express');
const router = exp.Router();
const postcontrollar = require('../controllers/users');
const AuthHelper = require('../helpers/AuthHelper');


router.get('/users', AuthHelper.VerifyToken, postcontrollar.GetAllUsers);
router.get('/user/:id', AuthHelper.VerifyToken, postcontrollar.GetUser);
router.get('/username/:username', AuthHelper.VerifyToken, postcontrollar.GetUserByName);
router.post('/user/view-profile', AuthHelper.VerifyToken, postcontrollar.ProfileView);
router.post('/change-password', AuthHelper.VerifyToken, postcontrollar.ChangePassword);




module.exports = router;