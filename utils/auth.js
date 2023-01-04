// This is middleware for the user routes for the profile page
const authCheck = (req, res, next) => {
    // If the user isn't logged in then redirect them to login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = authCheck;