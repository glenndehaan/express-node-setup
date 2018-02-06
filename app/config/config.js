/**
 * General config
 */
const config = {
    application: {
        name: "NodeExpress",
        env: " (local)",
        basePath: "/",
        port: 3001,
        bind: "0.0.0.0",
        supportedBrowsers: [
            "Chrome >= 52",
            "Firefox >= 47",
            "Safari >= 10",
            "Edge == All",
            "IE == 11"
        ]
    },
    mongo: {
        host: "prototype.dev",
        port: 27017,
        auth: true,
        username: "root",
        password: "root",
        database: "express-node-setup"
    },
    session: {
        secret: "averysecretstring"
    }
};

module.exports = config;
