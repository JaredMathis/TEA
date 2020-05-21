// this is the code which will be injected into a given page...

(function() {
    function log(message) {
        console.log('injected: ' + message);
    }
    
    if (isIndex()) {
        indexClickRow(state);
    } else {
        log('not index');
    }

    if (isPortfolio()) {
        log('portfolio')
    } else {
        log('not portfolio');
    }

    function indexClickRow(state) {
        log('indexClickRow: entered');

        let submit = document.getElementById("submit");

        submit.click();
    }

    function isIndex() {
        let submit = document.getElementById("submit");
        return !!submit;
    }

})();