var express = require('express');
var router = express.Router();

// Get Homepage
router.get('http://localhost:3000', function(req, res){
	res.render('http://localhost:3000');
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}


module.exports = router;
