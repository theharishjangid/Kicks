const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            res.status(err.statusCode || 500).json({
                success: false,
                message: err.message,
                data: err.data || null,
            })
        );
    };
};

export default asyncHandler;
