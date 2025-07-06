const chatBox = document.querySelector('chat-box');
const userInput = document.querySelector('user-input');
const sendBtn = document.querySelector('send-btn');
const modelSelect = document.querySelector('model-select');

let messages = [];

sendBtn.addEventListener('click' , () => {
const content = userInput.value;
if(!content) return;
messages.push({role: 'Keerti' , content});
renderMessage();//To show on screen

});