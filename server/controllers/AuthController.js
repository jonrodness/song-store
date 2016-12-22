/**
 * AuthController
 */


 module.exports = {

	loginSuccess: function(req, res) {
		// setup session
		req.session.competition = {
			completed: false,
			currentTrackIndex: undefined,
			preferredTrackIndex: undefined,
			tracks: [
				{
					id: undefined,					
					stream_url: undefined,
					consumed: false
				},
				{
					id: undefined,					
					stream_url: undefined,
					consumed: false
				}
			]
		};
		req.session.pendingTracks = [];
		res.redirect('/oauthcallback/:true');
	}
}