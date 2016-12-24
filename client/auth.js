module.exports = {
	/** Save token in local storage - token is user id */
	authenticateUser(token) {
		localStorage.setItem('token', token)
		this.onChange(true)		
	},

	/** Checks if user is currently logged in */
	isUserLoggedIn() {
		return !!localStorage.token
	},

	/** Remove token from local storage */
	deauthenticateUser() {
		var	HOST = 'http://localhost:3000/'
		var xhttp = new XMLHttpRequest();
		var uri = HOST + 'logout';
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				localStorage.removeItem('token')
				
				// update Layout state
				this.onChange(false)
			}
		}.bind(this);
		xhttp.open('GET', uri, true);
		xhttp.send();
	},

	/** Get authentication token */
	getToken() {
		return localStorage.getItem('token')
	},

	onChange() {}
}