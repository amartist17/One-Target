module.exports = (fn) => (req, res, next) => {
    fn(req, res, next).catch((error) => {
        console.log(error);
        res.status('error',{
            status: 'error',
            message: error.message || 'An error occurred',
        });
    });
};