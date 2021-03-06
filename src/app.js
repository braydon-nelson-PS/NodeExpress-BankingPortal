const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express()
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))


const router = express.Router()

const accountData = fs.readFileSync('src/json/accounts.json', 'UTF8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', 'UTF8')
const users = JSON.parse(userData)

router.get('/', async (req, res, next) => {
  res.render('index', { title: 'Account Summary', accounts: accounts})
})

// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// })

app.use('/', router)

app.listen(3000, () => {
  console.log('PS Project Running on port 3000!')
})

