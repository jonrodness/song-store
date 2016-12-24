/**
 * AuthController
 */


 module.exports = {
	loginSuccess: function(req, res) {
		var id = req.user._id.toString();
		res.redirect('/oauthcallback/' + id);
	}
}