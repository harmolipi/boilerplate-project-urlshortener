const urls = [];

exports.post_shorturl = (req, res) => {
  const url = req.body.url;
  console.log(url);
};

// redirect to original url
exports.get_shorturl = (req, res) => {};
