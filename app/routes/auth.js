var authController = require("../controllers/authController.js");

module.exports = function (app, passport) {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup",
    }),
  );
  app.get("/dashboard", isLoggedIn, authController.dashboard);
  app.get("/logout", authController.logout);
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      failureRedirect: "/login",
    }),
    (req, res) => {
      console.log(req.session);
      const returnUrl = req.session.returnTo || "/";
      req.session.returnTo = null;
      res.redirect(returnUrl);
    },
  );
  function isLoggedIn(req, res, next) {
    console.log(
      "isLoggedIn - " + req.originalUrl + "->" + req.session.returnTo,
    );
    if (req.isAuthenticated()) return next();
    req.session.returnTo = req.originalUrl;
    res.redirect("/signin");
  }
};
