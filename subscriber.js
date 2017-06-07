var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "sub-c-6a36b378-4adc-11e7-bf50-02ee2ddab7fe",
    publishKey: "pub-c-61959443-f381-4e17-aab2-f7c1470c1033",
    secretKey: "sec-c-NmQ5MWUzNmYtMmJiMC00YTUxLWJkNDItOThhMTJlZWQ2NTY1",
    ssl: true
})

pubnub.subscribe({
    channels: ['chnl-desired'],
    withPresence: true // also subscribe to presence instances.
});

pubnub.addListener({
    
    message: function(m) {
        // handle message
        var channelName = m.channel; // The channel for which the message belongs
        var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
        var pubTT = m.timetoken; // Publish timetoken
        var msg = m.message; // The Payload
        console.log(msg)
    },
    presence: function(p) {
        // handle presence
        var action = p.action; // Can be join, leave, state-change or timeout
        var channelName = p.channel; // The channel for which the message belongs
        var occupancy = p.occupancy; // No. of users connected with the channel
        var state = p.state; // User State
        var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
        var publishTime = p.timestamp; // Publish timetoken
        var timetoken = p.timetoken;  // Current timetoken
        var uuid = p.uuid; // UUIDs of users who are connected with the channel
    },
    status: function(s) {
        // handle status
    }
})