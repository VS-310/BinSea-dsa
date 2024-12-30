const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person.js');

passport.use(new LocalStrategy(async (usrnm, pwd, done) => {
    try{
        const user = await Person.findOne({username: usrnm});  
        if(!user)
            return done(null, false, {message:'Invalid Credentials'});
        
        const ispwdmatch = await user.comparePassword(pwd);
        if(ispwdmatch){
            return done(null, user);
        }
        else{
            return done(null, false, {message:'Invalid Credentials'});
        }
    } catch(err){
        return done(err);
    }
}));


module.exports = passport;