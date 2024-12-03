require("dotenv").config();
const server = require("./src/api/app");
const port = process.env.PORT || 3301;

server.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
});
