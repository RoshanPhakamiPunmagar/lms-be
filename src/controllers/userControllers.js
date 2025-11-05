export const getUser = async (req, res, next) => {
  try {
    // get user info

    return res.json({
      status: "success",
      message: "User found!",
      user: req.userInfo,
    });
  } catch (error) {
    next(error);
  }
};
