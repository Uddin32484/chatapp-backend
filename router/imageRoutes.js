const exp = require('express');
const router = exp.Router();
const ImageCtrl = require('../controllers/images');
const AuthHelper = require('../helpers/AuthHelper');



router.post('/upload-image', AuthHelper.VerifyToken, ImageCtrl.UploadImage);
//router.get('/set-default-image/:imageId/:imageVersion', AuthHelper.VerifyToken, ImageCtrl.SetDefaultImage);
router.get('/set-default-image/:imgId/:imgVersion', AuthHelper.VerifyToken, ImageCtrl.SetDefaultImage);




module.exports = router;