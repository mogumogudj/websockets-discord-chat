module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, { 
        // options
     });

     // check if primus conncetion ok, then console.log
        primus.on('connection', function (spark) {
            console.log("primus here 👏");

            // check if data received from client, then console.log
        spark.on('data', function (data) {
            console.log('data received from client: ', data);
            if(data.action === "newMessage") {
                // send data to all clients
                primus.write({
                    action: "newMessage",
                    message: data.message,
                });
            }
        });
        });

        
};