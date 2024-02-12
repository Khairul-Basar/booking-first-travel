const jwt = require("jsonwebtoken");
const createError = require("./error");
const User = require("../models/userSchema");
const verifyToken = async (req, res, next) => {
  const token = req.cookies.Authorization;
  if (!token) return next(createError(401, "You are not Authenticated!"));

  const decode = jwt.verify(token, process.env.SECRET);
  if (Date.now() > decode.exp)
    return next(createError(401, "Your token isn't valid!"));
  const user = await User.findById(decode.id);
  if (!user) return next(createError(401, "You are not Authenticated!"));

  req.user = user;

  next();
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You aren't Authenticated!"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You aren't Authenticated!"));
    }
  });
};

module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
};
