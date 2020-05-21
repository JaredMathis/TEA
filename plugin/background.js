// this is the background code...

let active = false;


let state;


chrome.runtime.onMessage.addListener(message => {
    if (message.entityName) {
        state.entityName = message.entityName;
    }
    if (message.entityRow) {
        state.entityRow = message.entityRow;
    }
    if (message.stop) {
        active = false;
    }
});

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    active = !active;
    console.log('clicked', {active})

    if (active) {
        state = {
            entityRow: 0,
        };
        run();
    }
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete') {
        return;
    }
    console.log('onUpdated', {active})
    if (!active) {
        return;
    }

    run();
  })

  function run() {
    console.log('run', {state})
    chrome.tabs.executeScript(null, {
        code: 'var state = ' + JSON.stringify(state)
    }, function() {
        // for the current tab, inject the "inject.js" file & execute it
        chrome.tabs.executeScript(null, {
            file: 'inject.js'
        });
    });
  }