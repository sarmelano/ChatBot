//ВНИМАНИЕ ЭТО ПРОСТО ЧЕРНОВИК. Я ЕГО ОСТАВИЛ ДЛЯ СЕБЯ В ДЗ НЕ ВХОДИТ
let answers = ["Привет!", "Как дела?", "Что ты делаешь?", "Понятно", "Хорошо", "До встречи!"];
let isChatting = true;

document.querySelector('#user-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && isChatting) {
    let userText = e.target.value;

    if (userText.toLowerCase() === 'пока') {
      addToChat('Пока!');
      addToChat('До встречи! Удачного дня!');
      isChatting = false;
      e.target.value = '';
      document.getElementById('user-input').placeholder = 'Чат завершён';
    } else {
      addToChat(userText);
      e.target.value = '';

      let randomTime = Math.floor(Math.random() * 10000) + 1000;
      let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      if (randomAnswer === "До встречи!") {
        isChatting = false;
        e.target.value = '';
        document.getElementById('user-input').placeholder = 'Чат завершён';
      }

      let typingIndicator = document.createElement('p');
      typingIndicator.classList.add('bot_answer');
      typingIndicator.textContent = 'Печатает...';
      document.querySelector('#chat').appendChild(typingIndicator);

      setTimeout(function () {
        if (isChatting) {
          document.querySelector('#chat').removeChild(typingIndicator);
          addToChat(randomAnswer);
        }
      }, randomTime);
    }

    if (!isChatting) {
      e.target.disabled = true;
    }
  }
});

function addToChat(text) {
  let chat = document.querySelector('#chat');
  let message = document.createElement('p');
  message.classList.add('msgFit');
  message.textContent = /* author + ': ' +  */text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

////////////////////////////vairan2////////////////////////////
/* let answers = ["Привет!", "Как дела?", "Что ты делаешь?", "Понятно", "Хорошо", "До встречи!"];
let isChatting = true;

async function botResponse(randomTime, randomAnswer) {
    let typingIndicator = document.createElement('p');
    typingIndicator.classList.add('bot_answer');
    typingIndicator.textContent = 'Печатает...';
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

        let randomTime = Math.floor(Math.random() * 10000) + 1000;
        let randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        botResponse(randomTime, randomAnswer).then(() => {
            if (randomAnswer === "До встречи!" || userText.toLowerCase() === 'пока') {
                isChatting = false;
                e.target.value = '';
                document.getElementById('user-input').placeholder = 'Чат завершён';
                e.target.disabled = true;
            }
        });
    }
}); */