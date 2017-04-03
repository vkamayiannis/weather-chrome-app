chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('window.html', {
    'outerBounds': {
      'width': 1050,
      'height': 500
    }
  });
});