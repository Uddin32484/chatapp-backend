const exp = require('express');
const router = exp.Router();
const postcontrollar = require('../controllers/posts');
const AuthHelper = require('../helpers/AuthHelper');

/////
router.get('/posts', AuthHelper.VerifyToken, postcontrollar.GetAllPosts);
router.get('/post/:id', AuthHelper.VerifyToken, postcontrollar.GetPost);
router.post('/post/add-post', AuthHelper.VerifyToken, postcontrollar.AddPost);
router.post('/post/add-like', AuthHelper.VerifyToken, postcontrollar.AddLike);
router.post('/post/add-comment', AuthHelper.VerifyToken, postcontrollar.AddComment);



module.exports = router;