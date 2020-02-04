const Client = require('@anbcodes/asyncws').Client;

let config = {
  methods: ['sendMessage', 'getNewMessages'],
  errors: []
}

let client = new Client('ws://192.168.86.77:8081', config);

let sendText = document.getElementById('text');

let sendButton = document.getElementById('send');

async function updateTexts(mes) {
  let messages = mes || await client.getNewMessages();
  console.log(messages, mes)
  document.getElementById('messages').innerHTML = messages.join('<br>');
}

sendButton.addEventListener('click', async () => {
  updateTexts(await client.sendMessage(sendText.value));
});

let refreshButton = document.getElementById('refresh');



refreshButton.addEventListener('click', () => updateTexts());