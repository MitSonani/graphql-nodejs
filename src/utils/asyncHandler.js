const asyncHandler = (handler) => {
    return async (input) => {
        try {
            return await handler(input);
        } catch (error) {
            console.error('Caught error in asyncHandler:', error);
            throw error;
        }
    };
};

module.exports = asyncHandler