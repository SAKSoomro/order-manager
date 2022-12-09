const notFound = require("./not-found");
const errorHandler = require("./error-handler");
const { authenticateUser, authorizePermissions } = require("./authentication");
module.exports = {
  notFound,
  errorHandler,
  authenticateUser,
  authorizePermissions,
};
