var terminalImage = require('terminal-image'),
got = require('got');

(async () => {
	console.log(await terminalImage.buffer(await got('http://octoday.glitch.me/random').buffer()));
})();