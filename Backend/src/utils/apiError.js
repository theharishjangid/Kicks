class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        data = null,
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
