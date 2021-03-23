class Errors {
    static get BAD_REQUEST () {
        return 400;
    }

    static get UNAUTHORIZED () {
        return 401;
    }

    static get FORBIDDEN () {
        return 403;
    }

    static get NOT_FOUND () {
        return 404;
    }

    static get CONFLICT () {
        return 409;
    }

    static get UNPROCESSABLE() {
        return 422;
    }

    static get GENERIC_ERROR() {
        return 500;
    }

    static get SUCCESS() {
        return 200;
    }

    static createError({
        status = Errors.GENERIC_ERROR, message = 'Something went wrong'
    }) {
        const error = new Error(message);
        error.status = status;
        return error;
    }
}

module.exports = Errors;
