var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) { throw error0; }
    connection.createChannel(function(error1, channel){
        if (error1) { throw error1; }
        var queue = 'hello';
        var msg = 'hello world';

        channel.assertQueue(queue, {durable: false});

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log("__|_______________");
        console.log(" [P] Sent %s", msg );
        console.log("‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");

        setTimeout(function(){
            connection.close();
            process.exit(0);
        }, 500);

    });
});

