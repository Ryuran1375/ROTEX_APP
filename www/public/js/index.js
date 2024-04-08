document.addEventListener('deviceready', onDeviceReady, false);

function loadMenu() {
    fetch('../views/menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load Menu.html');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-content').innerHTML = data;
            // Execute JavaScript code after loading the HTML content
            executeScriptFromHTML(data);
        })
        .catch(error => {
            console.error('Error loading Menu.html:', error);
        });
}

function executeScriptFromHTML(htmlContent) {
    // Extract script tags from the HTML content
    const scriptTags = htmlContent.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);

    if (scriptTags) {
        scriptTags.forEach(scriptTag => {
            // Create a script element
            const script = document.createElement('script');
            // Set the script content by removing the script tags
            script.textContent = scriptTag.replace(/<\/?script>/g, '');

            // Append the script element to the head of the document
            document.head.appendChild(script);
        });
    }
}

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

loadMenu();
