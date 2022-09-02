console.log('live')

const path = require('path');
const fs = require('fs');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/assets'));

app.get('/', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        //  console.log(err)
        let count = JSON.stringify(JSON.parse(data).count);
        console.log(count)
        // let count = JSON.parse(JSON.stringify(data.count))
        count++
        fs.writeFileSync('data.json', JSON.stringify({ "count": count }));//{"count":newcount}
        console.log('count: ' + count)
    });
    res.sendFile(path.join(__dirname, 'public/index.html'));
    // res.sendFile(express.static(__dirname + '/public/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});


app.get('/Hello', function (req, res) {
    res.send('Hello World!');
});
app.get('/views', function (req, res) {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        let count = JSON.stringify(JSON.parse(data).count);

    });
    res.sendFile(path.join(__dirname, 'public/views.html'));
});
app.get('/api/views', function (req, res) {
    let count = 7
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        //  res.send(JSON.parse(data));
        count = JSON.parse(data)
        console.log(count)
        res.send( count );
    });
  

});



app.listen(3000, function () {
    console.log('Example app listening on port http://localhost:3000/');
});