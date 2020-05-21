// this is the code which will be injected into a given page...

(function() {

    console.log('injected: ', {state});
    
    let isIndex = hasSubmitButton();

    function hasSubmitButton() {
        let submit = document.getElementById("submit");
        console.log({submit});
    }

})();