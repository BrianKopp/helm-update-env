const express = require('express');
const envVar = process.env.ENV_VAR

console.log('initiated with environment variable ENV_VAR with value ' + envVar);

const app = express();

app.get('/', (_, res) => {
    res.send('I\'m using environment variable ENV_VAR with value ' + envVar);
});

const server = app.listen(3000, () => {
    console.log('listening on port 3000');
});

const shutdown = (signal) => {
    console.log('received shutdown signal ' + signal);
    server.close((err) => {
        if (err) {
            console.error('error closing server', err);
            process.exit(1);
        } else {
            console.log('server closed successfully');
            process.exit(0);
        }
    });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
