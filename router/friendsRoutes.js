const exp = require('express');
const router = exp.Router();
const FriendCtrl = require('../controllers/friends');
const AuthHelper = require('../helpers/AuthHelper');



router.post('/follow-user', AuthHelper.VerifyToken, FriendCtrl.FolloweUser);
router.post('/unfollow-user', AuthHelper.VerifyToken, FriendCtrl.UnFollowUser);
router.post('/mark/:id', AuthHelper.VerifyToken, FriendCtrl.MarkNotification);
router.post('/mark-all', AuthHelper.VerifyToken, FriendCtrl.MarkAllNotification);





module.exports = router;