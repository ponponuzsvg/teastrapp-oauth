const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/redirect', (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.redirect(`teastrapp://oauth2callback?error=no_code`);
  }

  return res.redirect(`teastrapp://oauth2callback?access_token=test_${code}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
