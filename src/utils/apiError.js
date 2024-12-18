// Custom API Error class that extends the built-in Error class
class ApiError extends Error {
  constructor(
    statusCode, // HTTP status code for the error
    message = "Something went wrong", // Default error message if none provided
    errors = [], // Array to hold multiple error details
    stack = "" // Optional stack trace
  ) {
    // Call parent Error constructor with message
    super(message);

    // Set custom properties
    this.statusCode = statusCode; // Store the HTTP status code
    this.data = null; // No data returned for errors
    this.message = message; // Store the error message
    this.success = false; // Indicate request was not successful
    this.errors = errors; // Store array of detailed errors

    // Handle stack trace
    if (stack) {
      this.stack = stack; // Use provided stack trace if available
    } else {
      Error.captureStackTrace(this, this.constructor); // Generate stack trace
    }
  }
}

// Export the ApiError class
export { ApiError };
