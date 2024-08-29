const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({ title: "Validation failed", message: err.message });
      break;
    case constants.NOT_FOUND:
      res.json({ title: "Not found", message: err.message });
      break;
    case constants.FORBIDDEN:
      res.json({ title: "Forbidden", message: err.message });
      break;
    case constants.UNAUTHORIZED:
      res.json({ title: "Unauthorized", message: err.message });
      break;
    case constants.CONFLICT:
      res.json({ title: "Conflict", message: err.message });
      break;
    case constants.TOO_MANY_REQUESTS:
      res.json({ title: "Too many requests", message: err.message });
      break;
    case constants.GONE:
      res.json({ title: "Gone", message: err.message });
      break;
    case constants.SERVER_ERROR:
      res.json({ title: "Server error", message: err.message });
      break;
    case constants.SUCCESS:
      res.json({ title: "Success", message: res.message });
      break;
    case constants.CREATED:
      res.json({ title: "Created", message: res.message });
      break;
    case constants.UPDATED:
      res.json({ title: "Updated", message: res.message });
      break;
    case constants.DELETED:
      res.json({ title: "Deleted", message: res.message });
      break;
    default:
      break;
  }
};

module.exports = errorHandler;
