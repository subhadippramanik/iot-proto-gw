var app = require('./publisher')

var message = {
            thingType: 'light',
            thingId: 'th1',
            dataType: 'binary',
            value: '1'
        }

app.publish(message)