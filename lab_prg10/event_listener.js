const EventEmitter = require('events');
const emitter = new EventEmitter();

function handleEvent() {
  console.log('Event triggered!');
}

emitter.on('myEvent', handleEvent);
emitter.emit('myEvent');
emitter.removeListener('myEvent', handleEvent);
emitter.emit('myEvent');
