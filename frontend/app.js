const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const modelSelect = document.getElementById('model-select');

let messages = [];
window.onload = function() {
  const sendBtn = document.getElementById('send-btn');
  sendBtn.onclick = function() {
    // your code here
     const content = userInput.value;
  if (!content) return;

  messages.push({ role: 'user', content });
  renderMessages();

  const res = await fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: modelSelect.value, messages })
  });
  console.log(data);

  const data = await res.json();
  const reply = data.choices?.[0]?.message?.content || 'No response';
  messages.push({ role: 'assistant', content: reply });
  renderMessages();
  userInput.value = '';
  };
  
};

sendBtn.onclick = async () => {
 
};

function renderMessages() {
  chatBox.innerHTML = messages.map(m =>
    `<div class="${m.role}">${m.role === 'user' ? '🧑' : '🤖'} ${m.content}</div>`
  ).join('');
}
