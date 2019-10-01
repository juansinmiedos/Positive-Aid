module.exports = (req, res, next) => {
    if (req.isAuthenticated() && req.user.status === "Active") {
      next();
    } else {
      res.redirect("/login");
    }
  };