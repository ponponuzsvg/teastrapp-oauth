module.exports = (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.redirect(`teastrapp://oauth2callback?error=no_code`);
  }

  return res.redirect(`teastrapp://oauth2callback?access_token=test_${code}`);
};
