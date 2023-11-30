import jwt from 'jsonwebtoken';

const secretKey = 'RITESH@2000';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token,"Checking auth")

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.log(token,"checkong token middleware")
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
