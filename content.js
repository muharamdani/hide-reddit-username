chrome.storage.local.get(['key'], function(result) {
	let headerUser = document.getElementsByClassName('header-user-dropdown')[0]
	let redditLogo = document.querySelectorAll('[aria-label="Home"]')[0]
	if (headerUser !== undefined) {
		if (result.key) {
			headerUser.setAttribute("style", "");
			redditLogo.setAttribute("style", "");
		} else {
			headerUser.setAttribute("style", "-webkit-filter: blur(5px); -moz-filter: blur(5px); -o-filter: blur(5px); -ms-filter: blur(5px);filter: blur(5px);");
			redditLogo.setAttribute("style", "-webkit-filter: blur(5px); -moz-filter: blur(5px); -o-filter: blur(5px); -ms-filter: blur(5px);filter: blur(5px);");
		}
	}
});
