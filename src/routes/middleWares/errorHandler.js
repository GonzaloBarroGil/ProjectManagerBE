module.exports = (err, req, res, next) => {
    if (err) {
	return res.status(err.status || 500).send({
	    message: err.message,
	    code: err.code,
	    errors: err.errors
	});
    }
    next();
};
