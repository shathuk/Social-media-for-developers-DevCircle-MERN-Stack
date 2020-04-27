const { validationResult } = require('express-validator/check');

exports.userRegister = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);
  res.send('register user route');
};
