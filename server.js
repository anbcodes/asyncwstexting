const Server = require('@anbcodes/asyncws').Server;

let config = {
  methods: ['sendMessage', 'getNewMessages'],
  errors: []
}

let handler = {
  messages: [],
  sendMessage(client, message) {
    console.log('Client sent message', client, message);
    this.messages.push(message);
    return this.messages;
  },

  getNewMessages() {
    console.log('Client requesting messages', this.messages);
    return this.messages;
  }
}

let server = new Server(8081, config, [handler])