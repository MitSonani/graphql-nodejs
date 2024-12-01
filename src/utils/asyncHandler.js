const asyncHandler = (handler) = async (req, res, next) => {
    try {
        await handler(req, res, next);

    } catch (error) {
        throw new Error(error)
    }
}