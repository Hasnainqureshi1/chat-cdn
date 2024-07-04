document.addEventListener("DOMContentLoaded", function () {
  const chatBotContainer = document.getElementById("chat-bot-container");
  const chatBotBtn = document.getElementById("chat-bot-btn-id");
  const closeChat = document.getElementById("close-chat");

  chatBotBtn.addEventListener("click", function () {
    chatBotContainer.style.display = "flex";
    chatBotBtn.style.display = "none"; // Hide the button when chat UI is open
  });

  closeChat.addEventListener("click", function () {
    chatBotContainer.style.display = "none";
    chatBotBtn.style.display = "flex"; // Show the button when chat UI is closed
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Create the chat container div
  const chatContainer = document.createElement("div");
  chatContainer.id = "chat-container";
  document.body.appendChild(chatContainer);

  // Add the CSS file
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href =
    "https://cdn.jsdelivr.net/gh/hasnainqureshi1/chat-cdn/style.css";
  document.head.appendChild(linkElement);

  // Inject the HTML content
  const htmlContent = `
        <button class="chat-bot-btn" id="chat-bot-btn-id">
            <i class="fa fa-comments"></i> Chat Now
        </button>

        <div class="chat-bot-container" id="chat-bot-container">
            <div class="chat-ui-bot">
                <div class="chat-ui-bot-header">
                    <h3>Chat Bot</h3>
                    <i class="fa fa-times" id="close-chat"></i>
                </div>
                <div class="chat-ui-bot-body">
                    <!-- Sample conversation -->
                    <div class="message user1" id="user1-msg1">
                        <p>Hello! How can I help you today?</p>
                    </div>
                    <div class="message user2" id="user2-msg1">
                        <p>I have a question about my order.</p>
                    </div>
                    <div class="message user1" id="user1-msg2">
                        <p>Sure, I'd be happy to assist you. Can you please provide your order number?</p>
                    </div>
                    <div class="message user2" id="user2-msg2">
                        <p>My order number is #12345.</p>
                    </div>  <div class="message user1" id="user1-msg1">
                        <p>Hello! How can I help you today?</p>
                    </div>
                    <div class="message user2" id="user2-msg1">
                        <p>I have a question about my order.</p>
                    </div>
                    <div class="message user1" id="user1-msg2">
                        <p>Sure, I'd be happy to assist you. Can you please provide your order number?</p>
                    </div>
                    <div class="message user2" id="user2-msg2">
                        <p>My order number is #12345.</p>
                    </div>
                </div>
                <div class="chat-ui-bot-footer">
                    <input type="text" id="user-input" placeholder="Type your message here...">
                    <button id="send-btn"><i class="fa fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;

  chatContainer.innerHTML = htmlContent;

  // Add event listeners for chat bot functionality
  const chatBotContainer = document.getElementById("chat-bot-container");
  const chatBotBtn = document.getElementById("chat-bot-btn-id");
  const closeChat = document.getElementById("close-chat");

  chatBotBtn.addEventListener("click", function () {
    chatBotContainer.style.display = "flex";
    chatBotBtn.style.display = "none"; // Hide the button when chat UI is open
  });

  closeChat.addEventListener("click", function () {
    chatBotContainer.style.display = "none";
    chatBotBtn.style.display = "flex"; // Show the button when chat UI is closed
  });

  // Add Font Awesome for icons
  const fontAwesomeLink = document.createElement("link");
  fontAwesomeLink.rel = "stylesheet";
  fontAwesomeLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  document.head.appendChild(fontAwesomeLink);
});
