const AUTH_SECRET = process.env.AUTH_SECRET;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).end();

  const parts = authHeader.split(' ');
  const [scheme, token] = parts;

  if (!parts.length === 2 || !/^Bearer$/i.test(scheme))
    return res.status(401).end();

  jwt.verify(token, AUTH_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).end();
    }

    req.userId = decoded.id;

    return next();
  });
};
