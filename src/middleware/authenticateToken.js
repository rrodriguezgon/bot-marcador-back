const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Authentication failed' });

  let tokenClean = toke.replace.replace('Bearer ', '').replace('bearer ', '');

  jwt.verify(tokenClean, process.env.token, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token is not valid' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;