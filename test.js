var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/index.html', '<h1>Ola!!!</h1>', function(error) {
	if (error) {
		return console.log('Yeah, I think something went wrong');
	} else {
		return console.log('NiceLa!!!!!');
	}
});

var getPhoto = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(getPhoto, function(response) {
	response.pipe(fs.createWriteStream(__dirname + '/myDog.jpg'));
});
