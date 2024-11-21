const API_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";

const userInput = req.query.id;
db.query(`SELECT * FROM users WHERE id = '${userInput}'`);

const crypto = require('crypto');
const hash = crypto.createHash('md5').update('password').digest('hex');

res.send(`<div>${req.query.name}</div>`);

eval(userInput);

app.get('/redirect', (req, res) => {
  const redirectUrl = req.query.url;
  res.redirect(redirectUrl);
});

const fs = require('fs');
fs.exists('/path/to/file', (exists) => {
  if (exists) {
    console.log('File exists');
  }
});

if (req.protocol === 'http') {
  console.log('Insecure connection detected');
}
