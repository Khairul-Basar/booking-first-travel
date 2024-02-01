const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      userName: userName,
      email: email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send(`User Has been registered, ${newUser}`);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, email } = req.body;
    const reqPass = req.body.password;
    // Find User
    const user = await User.findOne({
      userName,
      email,
    });
    if (!user) return next(createError(404, "User Not Found!"));
    const isPassCorrect = await bcrypt.compareSync(reqPass, user.password);
    if (!isPassCorrect)
      return next(createError(400, "Worng Password or UserName"));
    const tokenExp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign(
      {
        id: user._id,
        isadmin: user.isAdmin,
        exp: tokenExp,
      },
      process.env.SECRET
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("Authorization", token, {
        expires: new Date(tokenExp),
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
