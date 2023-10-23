let answers = ["Привет!", "Как дела?", "Что ты делаешь?", "Понятно", "Хорошо", "До встречи!"];
let isChatting = true;

function byeBye () {
    isChatting = false;
    document.getElementById('user-input').placeholder = 'Чат завершён';
}

async function botResponse(randomTime, randomAnswer) {
    let typingIndicator = document.createElement('p');
    typingIndicator.classList.add('bot_answer');
    typingIndicator.textContent = 'Печатает ...';
    document.querySelector('#chat').appendChild(typingIndicator);

    await new Promise(resolve => setTimeout(resolve, randomTime));
    if (isChatting) {
        document.querySelector('#chat').removeChild(typingIndicator);
        addToChat(randomAnswer);
    }
}

function addToChat(text) {
    let chat = document.querySelector('#chat');
    let message = document.createElement('p');
    message.classList.add('msgFit');
    message.textContent = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

document.querySelector('#user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && isChatting) {
        let userText = e.target.value;
        addToChat(userText);
        e.target.value = '';

        if (userText.toLowerCase() === 'пока') {
            addToChat("Спасибо за беседу! До свидания!");
            byeBye();
            e.target.disabled = true; 
        } else {
            let randomTime = Math.floor(Math.random() * 10000) + 1000;
            let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
            botResponse(randomTime, randomAnswer).then(() => {
                if (randomAnswer === "До встречи!") {
                    byeBye();
                    e.target.disabled = true; 
                }
            });
        }
    }
});