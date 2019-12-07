function fetchJSONFile(filePath) {
    console.debug("Fetching file:", filePath);
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200 || httpRequest.status === 0) {
                console.info("Loaded file:", filePath);
                var data = $.csv.toObjects(httpRequest.responseText);
                console.debug("Data parsed into valid JSON!");
                console.debug(data);
                // if (callbackFunc) callbackFunc(data);
            } else {
                console.error("Error while fetching file", filePath, 
                    "with error:", httpRequest.statusText);
            }
        }
    }
    httpRequest.open('GET', filePath)
    httpRequest.send()
}

$(document).ready(function() {
    $(function () {
        fetchJSONFile();
    });
});