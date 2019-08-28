// basic functionalities

//broker
var btnConnect = document.getElementById('connect');
var btnDisConnect = document.getElementById('disconnect');
var broker = document.getElementById('broker').value;
var btnStatus = document.getElementById('status');
var li = document.createElement('li');


//publisher
var btnPublish = document.getElementById('btnPublish');
var pubTopic = document.getElementById('pubTopic');
var pubPayload = document.getElementById('pubPayload');

//subscriber
var subTopic = document.getElementById('subTopic');
var btnSubscribe = document.getElementById('btnSubscribe');
var btnUnsubscribe = document.getElementById('btnUnsubscribe');


//btnConnect
btnConnect.addEventListener('click', function(e) {
  e.preventDefault();
//client
var client = mqtt.connect(broker)
  client.subscribe("mqtt/demox")

  // btnSubscribe.addEventListener('click',function(e){
  //   e.preventDefault();
  //   client.subscribe("mqtt/" + subTopic.value);
  //   console.log("mqtt/" + subTopic.value)
  // })


  client.on("connect", function () {
    console.log("Successfully connected");
    btnStatus.disabled = false;
    btnDisConnect.disabled = false;
    btnConnect.disabled = true;
    btnStatus.setAttribute('value','Successfully Connected!')
    btnStatus.setAttribute('class','btn btn-success')
  });

//btnDisconnect
  btnDisConnect.addEventListener('click', function(){
    client.end();
    btnStatus.disabled = true;
    btnDisConnect.disabled = true;
    btnConnect.disabled = false;
    console.log('Disconnected');
    btnStatus.setAttribute('value','Successfully Disconnected!')
    btnStatus.setAttribute('class','btn btn-warning')
  });
  
  // client.on("message", function (topic, payload) {
  //   console.log([topic, payload].join(": "));
  //   // client.end();
  // })

  // client.publish("mqtt/demox", "hello world!")

  btnPublish.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('test')
    client.on("message", function (pubTopic, pubPayload) {
      console.log([pubTopic, pubPayload].join(": "));
      // client.end();
    })
  });
  client.publish(pubTopic, pubPayload)


});















// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
