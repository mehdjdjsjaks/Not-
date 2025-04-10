const chat = document.getElementById('chat');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(text, className) {
  const div = document.createElement('div');
  div.textContent = text;
  div.className = `message ${className}`;
  div.style.display = "inline-block";
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function fakeReply(msg) {
  return `You said: "${msg}". I'm still learning!`;
}

sendBtn.onclick = () => {
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage("You: " + msg, 'user');
  input.value = '';
  setTimeout(() => {
    appendMessage("Axcel: " + fakeReply(msg), 'bot');
  }, 500);
};

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendBtn.click();
});
