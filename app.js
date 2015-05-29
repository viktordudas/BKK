var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var azure = require('azure');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


// "Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=mMvTQ0E8ZC879TMt1iZ9mTDQsC+/r9gYYHWHZ+VRuTU="
// Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=test;SharedAccessKey=vO/2VEE5quSd8i87FPnNPHcS9YPA5yP7+dFZQQWtLNQ=

//Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=test;SharedAccessKey=Cd9FY4s1qbEubX8goHMUjgrNca7JcrcJ2fhWw2hvK3k=
//var uri = 'amqps://' + encodeURIComponent('test') + ':' + encodeURIComponent('mMvTQ0E8ZC879TMt1iZ9mTDQsC+/r9gYYHWHZ+VRuTU=') + '@' + 'bkksbn.servicebus.windows.net';



/*
var eventsClient = azure.createEventsClient("Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=mMvTQ0E8ZC879TMt1iZ9mTDQsC+/r9gYYHWHZ+VRuTU=");
// var eventsCLient = azure.createEventsClient("Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=test;SharedAccessKey=FVPCEdgc0F6K0ZuSZNFA7t5SSyg8KVXCVz1t4uoqozU=");
//var serviceBusService = azure.createServiceBusService("Endpoint=sb://bkksbn.servicebus.windows.net/;SharedAccessKeyName=test;SharedAccessKey=aNl/2FjgxGcixKghGww8C2jI/CLl3STfHiUBG7bPF2s=");


var message = {
  Vonal: 'M3'
  };
eventsClient.sendQueueMessage('bkkqueue', message, function(error){
  if(!error){
    // message sent
      console.log("Siker");
  } else {
      console.log("Fail " + error);
  }
});

*/
