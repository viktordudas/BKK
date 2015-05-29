var express = require('express');
var router = express.Router();
var AMQPClient  = require('amqp10');


var sendCB = function(tx_err, state) {
  if (tx_err) {
    console.log('Error Sending: ');
    console.log(tx_err);
  } else {
    console.log('Send message with value.  Not receiving, so exiting');
//            process.exit(0);
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.Vonal);

  if (req.Query.Vonal != "") {
// var uri = 'amqps://' + encodeURIComponent(sasName) + ':' + encodeURIComponent(sasKey) + '@' + serviceBusHost;
    var uri = 'amqps://' + encodeURIComponent('RootManageSharedAccessKey') + ':' + encodeURIComponent('mMvTQ0E8ZC879TMt1iZ9mTDQsC+/r9gYYHWHZ+VRuTU=') + '@' + 'bkksbn.servicebus.windows.net';

    var sendAddr = 'bkkhub';

    var client = new AMQPClient(AMQPClient.policies.EventHubPolicy);
    client.connect(uri, function () {
      client.send({
        "Vonal": req.query.Vonal,
        "EntryTime": new Date()
      }, sendAddr, {'x-opt-partition-key': 'pk' + 0}, sendCB);
    });
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
