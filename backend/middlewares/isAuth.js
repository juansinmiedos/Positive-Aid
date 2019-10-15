module.exports = (req, res, next) => {
    if (req.isAuthenticated() && req.user.confirmationStatus === "Active") {
      next();
    } else {
      res.status(401).json({ msg: 'Log in first' });
    }
};