// this is the background code...

let active = false;

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    active = !active;
    console.log('clicked', {active})

    run();
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete') {
        return;
    }
    console.log({active})
    if (!active) {
        return;
    }

    run();
  })

  function run() {


    let state = {
        entityRow: 1,
    };

    chrome.tabs.executeScript(null, {
        code: 'var state = ' + JSON.stringify(state)
    }, function() {
        // for the current tab, inject the "inject.js" file & execute it
        chrome.tabs.executeScript(null, {
            file: 'inject.js'
        });
    });
  }