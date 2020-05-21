// this is the code which will be injected into a given page...

(function() {

    console.log('injected: ', {state});
    
    

    function isIndex() {
        let submit = document.getElementById("submit");
        console.log({submit});
    }

})();