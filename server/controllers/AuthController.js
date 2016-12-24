/**
 * AuthController
 */


 module.exports = {
	loginSuccess: function(req, res) {
		res.redirect('/oauthcallback/:true');
	}
}