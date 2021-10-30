require('dotenv').config();

const config = require('./src/db/config/database');
const { User } = require('./src/db/models');

const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

module.exports = function (passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET;
  // opts.issuer = 'accounts.examplesoft.com';
  // opts.audience = 'yoursite.net';
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ id: jwt_payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
        // or you could create a new account
      });
    })
  );
};
