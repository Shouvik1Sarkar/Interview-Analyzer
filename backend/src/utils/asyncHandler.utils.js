function asyncHandler(fn) {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (err) {
      // console.log("error: ", err);
      next(err);
    }
  };
}

export default asyncHandler;
