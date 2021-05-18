const contentful = require("contentful");

export default contentful.createClient({
    space: process.env.REACT_APP_API__SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});