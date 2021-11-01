// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// console.log(88888888888);

// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:3000/auth/google/callback',
//       passReqToCallback: true,
//     },
//     (request, accessToken, refreshToken, profile, done) => {
//       console.log(profile);
//       done(null, profile);
//     }
//   )
// );

// module.exports = passport;
