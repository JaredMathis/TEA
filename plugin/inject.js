// this is the code which will be injected into a given page...

(function () {
    function log(message) {
        console.log('injected: ' + message);
    }

    console.log({state});

    if (isIndex()) {
        indexClickRow(state);
        indexClickSubmit(state);
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
        if (downloadsHasDownloads(state)) {
            downloadsDownloadCSV(state);
            downloadsDownloadXML(state);
        }

        downloadsChangeToAllocation(state);

        if (downloadsHasDownloads(state)) {
            downloadsDownloadCSV(state);
            downloadsDownloadXML(state);
        }
        //ReturnToEntityAndRoleSelection(state);
    } else {
        log('not downloads');
    }

    function downloadsHasDownloads(state) {
        let downloadXML = document.getElementById("downloadXML");
        return !!downloadXML;
    }

    function downloadsChangeToAllocation(state) {
        let c = document.getElementById("category");
        // Select the 3rd choice (Allocation)
        c.selectedIndex = 2;
    }

    function ReturnToEntityAndRoleSelection(state) {
        let r = document.getElementById("return");
        r.click();
    }

    function downloadsDownloadXML(state) {
        let downloadXML = document.getElementById("downloadXML");
        downloadXML.setAttribute('download', 'XML-' + state.entityName + '.csv');
        downloadXML.click();
    }

    function downloadsDownloadCSV(state) {
        let downloadCSV = document.getElementById("downloadCSV");
        downloadCSV.setAttribute('download', 'CSV-' + state.entityName + '.csv');
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
        console.log({ state })

        let rows = document.getElementsByTagName("TR");
        console.log({ rows });

        // +1 because the first row is the table
        // header
        const entityRow = rows[state.entityRow + 1];
        console.log({ entityRow });

        if (!entityRow) {
            chrome.runtime.sendMessage({
                stop: true,
            });
            log('indexClickRow: stopping');
            return;
        }

        let entityName = entityRow.cells[1].innerHTML;

        log('indexClickRow: sending message');
        chrome.runtime.sendMessage({
            entityName,
            entityRow: state.entityRow + 1,
        });

        entityRow.click();
    }

    function indexClickSubmit(state) {
        log('indexClickSubmit: entered');

        let submit = document.getElementById("submit");

        submit.click();
    }

    function isIndex() {
        let submit = document.getElementById("submit");
        return !!submit;
    }

})();