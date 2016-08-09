var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  console.log(data.body) // FYI: data.body is a string
  var data = JSON.parse(data.body)
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: data.name}),
  target.innerHTML = greeting({longitude: data.longitude})
})


//   // Accessing longitude / latitude by ID
//   console.log(data.body) // FYI: data.body is a string
//   var data = JSON.parse(data.body)
//   // Replace 'Space' below with the response
//   var target = document.getElementsByTagName('main')[0]
//   target.innerHTML = greeting({longitude: 25544.longitude})
// })
