const User = require('../models/user');

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    console.log(email);
    return res.status(422).send({error: 'You must provide email and password'});
  }

  // See if a user with the given email exists
  User.findOne({email}, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      //422 Unprocessable entity http status code
      return res.status(422).send({error: 'Email is in use'});
    }

    // If a user with email does exist, return an error
    const user = new User({email, password});

    user.save((err) => {
      if (err) {
        return next(err);
      }

      res.json({success: true});
    });

    // Otherwise create & save a user record

    // Respond to the request indicating the user was created
  });
};