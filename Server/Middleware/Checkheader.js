function CheckHeader(req, res, next) {
  const HEADER = req.headers;

  if (HEADER.header != process.env.HEADER) {
    return res.status(400).json({
      error: "Header does'nt match to your system",
    });
  }
  next();
}

module.exports = { CheckHeader };
