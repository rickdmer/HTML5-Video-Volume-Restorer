function manageVideoVolume(_video) {

	chrome.storage.sync.get('volume', function(e) {
		if (e.volume) {
			_video.volume = e.volume;
		} else {
			_video.volume = 0.5;
			chrome.storage.sync.set({'volume': 0.5 });
		}
	});

	_video.onvolumechange = function(e) {
		chrome.storage.sync.set({'volume': _video.volume });
	};

}

var videos = document.getElementsByTagName('video');
for (var i = 0; i < videos.length; i++) {
	manageVideoVolume(videos[i]);
}