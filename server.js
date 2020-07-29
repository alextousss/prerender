const prerender = require("prerender");
const server = prerender({
    logRequests: true,
    chromeFlags: [
        "--no-sandbox",
        "--headless",
        "--disable-gpu",
        "--remote-debugging-port=9222",
        "--hide-scrollbars"
    ]
});
server.start();
