document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('toggle')
    btn.addEventListener('click', function() {
        chrome.storage.local.get(['key'], function(result) {
            if (result.key) {
                chrome.storage.local.set({key: false}, function() {});
            } else {
                chrome.storage.local.set({key: true}, function() {});
            }
        });
        chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            chrome.scripting.executeScript({
                target: {tabId: activeTabs[0].id, allFrames: true},
                files: ['content.js'],
            });
        });
    })
});
