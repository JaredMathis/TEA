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
        portfolioClickPrivateCRR(state);
        portfolioClickDownloads(state);
    } else {
        log('not portfolio');
    }

    if (isDownloads()) {
        downloadsDownloadCSV(state);
        downloadsDownloadXML(state);
        ReturnToEntityAndRoleSelection(state);
    } else {
        log('not downloads');
    }

    function ReturnToEntityAndRoleSelection(state) {
        let r = document.getElementById("return");
        r.click();
    }

    function downloadsDownloadXML(state) {
        let downloadXML = document.getElementById("downloadXML");
        downloadXML.setAttribute('download', 'XML-renamed.csv');
        downloadXML.click();
    }

    function downloadsDownloadCSV(state) {
        let downloadCSV = document.getElementById("downloadCSV");
        downloadCSV.setAttribute('download', 'CSV-renamed.csv');
        downloadCSV.click();
    }

    function isDownloads() {
        let downloadCSV = document.getElementById("downloadCSV");
        return !!downloadCSV;
    }

    function portfolioClickDownloads() {
        log('portfolioClickDownloads: entered');

        let downloads = document.getElementById("downloads");
        downloads.click();
    }

    function portfolioClickPrivateCRR() {
        log('portfolioClickPrivateCRR: entered');

        let privateCRR = document.getElementById("privateCRR");
        privateCRR.click();
    }

    function isPortfolio() {
        let privateCRR = document.getElementById("privateCRR");
        return !!privateCRR;
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