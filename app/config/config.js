/**
 * General config
 */
const config = {
    application: {
        name: "NodeExpress",
        env: " (local)",
        basePath: "/",
        port: 3001,
        bind: "0.0.0.0"
    },
    mongo: {
        host: "127.0.0.1",
        port: 27017,
        auth: false,
        username: "root",
        password: "root",
        database: "express-node-setup"
    }
};

module.exports = config;
