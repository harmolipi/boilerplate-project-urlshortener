const urls = [];

exports.get_shorturl = (req, res) => {
  const url = urls[req.params.url - 1];
  res.redirect(url);
};

exports.post_shorturl = (req, res) => {
  console.log('Requested URL: ', req.body.url);
  try {
    const url = new URL(req.body.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('Invalid URL');
    }
    urls.push(url);
    res.json({
      original_url: url,
      short_url: urls.length,
    });
  } catch {
    res.json({ error: 'invalid url' });
  }
};
