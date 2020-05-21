// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    let state = {
        entityRow: 1,
    };

    chrome.tabs.executeScript(tab.id, {
        code: 'var state = ' + JSON.stringify(state)
    }, function() {
        // for the current tab, inject the "inject.js" file & execute it
        chrome.tabs.executeScript(tab.ib, {
            file: 'inject.js'
        });
    });
});