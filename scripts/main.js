let answers = ["Hey!", "How are you?", "What are you doing now?", "Got it", "Ok", "See you!"];
    let isChatting = true;

    function byeBye() {
      isChatting = false;
      document.getElementById('user-input').placeholder = 'Chat end';
      document.getElementById('send-button').disabled = true;
    }

    async function botResponse(randomTime, randomAnswer) {
      let typingIndicator = document.createElement('p');
      typingIndicator.classList.add('bot_answer');
      typingIndicator.textContent = 'Typing  ...';
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

    function sendMessage() {
      let userText = document.getElementById('user-input').value;
      addToChat(userText);
      document.getElementById('user-input').value = '';

      if (userText.toLowerCase() === 'bye') {
        addToChat("Okay! See you soon!");
        byeBye();
      } else {
        let randomTime = Math.floor(Math.random() * 10000) + 1000;
        let randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        botResponse(randomTime, randomAnswer).then(() => {
          if (randomAnswer === "See you!") {
            byeBye();
          }
        });
      }
    }

    document.getElementById('user-input').addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && isChatting) {
        sendMessage();
      }
    });