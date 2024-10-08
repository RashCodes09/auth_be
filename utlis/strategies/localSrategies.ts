// import passport from "passport"
// import { Strategy } from "passport";
// import userModel from "../../model/userModel";

// passport.use(new Strategy(
//     function(username, password, done) {

//      const user= userModel.findOne({email});

//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     }
//   ));
