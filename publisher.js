var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "sub-c-6a36b378-4adc-11e7-bf50-02ee2ddab7fe",
    publishKey: "pub-c-61959443-f381-4e17-aab2-f7c1470c1033",
    secretKey: "sec-c-NmQ5MWUzNmYtMmJiMC00YTUxLWJkNDItOThhMTJlZWQ2NTY1",
    uuid: "gw-1",
    ssl: true
})

exports.publish = function(jsonMessage) {
    pubnub.publish(    {
        message: jsonMessage,
        channel: 'chnl-actual',
        sendByPost: false, // true to send via post
        storeInHistory: false, //override default storage options
        meta: {
            "gwId": "1"
        } // publish extra meta with the request
    },
    function (status, response) {
        // handle status, response
        console.log(status)
        console.log(response)
    }
    );
}