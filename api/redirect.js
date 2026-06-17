const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/redirect', (req, res) => {
  const { code, access_token, error } = req.query;

  if (code) {
    return res.redirect(`teastrapp://oauth2callback?access_token=test_${code}`);
  }

  if (error) {
    return res.redirect(`teastrapp://oauth2callback?error=${error}`);
  }

  if (access_token) {
    return res.redirect(`teastrapp://oauth2callback?access_token=${access_token}`);
  }

  res.status(400).send('Missing code or token');
});

app.get('/', (req, res) => {
  res.send('Teastrapp OAuth server is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
