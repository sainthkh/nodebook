const EventEmitter = require('events');

e = new EventEmitter()

e.on('end', function(){
  console.log('안녕히 가세요.')
})

e.emit('end')