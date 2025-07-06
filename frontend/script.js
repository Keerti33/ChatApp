const chatBox = document.querySelector('chat-box');
const userInput = document.querySelector('user-input');
const sendBtn = document.querySelector('send-btn');
const modelSelect = document.querySelector('model-select');

let messages = [];

sendBtn.onclick = async () => {
const content = userInput.value;
if(!content) return;
messages.push({role: 'Keerti' , content});
renderMessage();//To show on screen

const res = await fetch('http://localhost:3000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: modelSelect.value, messages })
});
const data = await res.json();
 const reply = data.choices?.[0]?.message?.content || 'No response';
  messages.push({ role: 'assistant', content: reply });
  renderMessages(); // show AI reply
  userInput.value = ''


};
function renderMessages() {
  chatBox.innerHTML = messages.map(m =>
    `<div class="${m.role}">${m.role === 'user' ? '🧑' : '🤖'} ${m.content}</div>`
  ).join('');
}
