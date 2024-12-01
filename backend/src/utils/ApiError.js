class ApiError extends Error {
    constructor(statusCode, message = "something went wrong at server!", errors = []) {
        super(message)
        this.statusCode = statusCode,
            this.data = null,
            this.success = false,
            this.errors = errors
        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = ApiError