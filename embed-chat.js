(function() {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    document.body.appendChild(chatContainer);

    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/style.css';
    document.head.appendChild(linkElement);

    const chatScript = document.createElement('script');
    chatScript.src = 'https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/script.js';
    document.body.appendChild(chatScript);
})();
