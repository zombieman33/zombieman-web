
function copy(text) {
    textToCopy = text;

    navigator.clipboard.writeText(textToCopy)
        .then(function() {
            console.log('Async: Copying to clipboard was successful! ' + textToCopy);
        })
        .catch(function(err) {
            console.error('Async: Could not copy text: ', err);
        });
    }