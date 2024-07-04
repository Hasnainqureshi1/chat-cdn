(function() {
    // Create the chat container div
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    document.body.appendChild(chatContainer);

    // Add the CSS file
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/style.css';
    document.head.appendChild(linkElement);

    // Fetch the HTML content and inject it
    fetch('https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/index.html')
        .then(response => response.text())
        .then(html => {
            chatContainer.innerHTML = html;

            // Add the JavaScript file
            const chatScript = document.createElement('script');
            chatScript.src = 'https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/script.js';
            document.body.appendChild(chatScript);
        })
        .catch(error => console.error('Error loading HTML:', error));
})();
