const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');

const pageRouter = require('./src/routes/pageRouter.js');
const apiRouter = require('./src/routes/apiRouter.js');


const app = express();

app.engine('ejs', ejs.renderFile);
app.set('views engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use(express.static(__dirname + '/public'));

// Create 404 route

app.use((req, res) => {
  res.render('404.ejs')
});

// app.use('/', (req, res) => {
//   fs
//     .readFile(PATH, 'utf-8')
//     .then(data => {
//       res.send(data);
//     })
//   })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

console.log(`App listening on port ${PORT}`)

});
