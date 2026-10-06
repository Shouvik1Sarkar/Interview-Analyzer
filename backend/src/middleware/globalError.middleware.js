function globalError(err, req, res, next) {
  const statusCode = err.statusCode || err.status || 500;

  console.error(
    {
      err,
      method: req.method,
      url: req.originalUrl,
      statusCode,
      userId: req.user?._id?.toString() || null,
      ip: req.ip,
    },
    "Request failed",
  );

  try {
    return res.status(statusCode).json({
      message: err.message || "Something went wrong",
      statusCode: statusCode,
      errors: err.errors || [],
      success: err.success || false,
      data: err.data || null,
    });
  } catch (error) {
    next(error);
  }
}

export default globalError;
