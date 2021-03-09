const express = require('express');
const cors = require('cors')

const argv = require('minimist')(process.argv.slice(2));


if (argv.h || argv.help) {
    console.log([
        'usage: http-server [path] [options]',
        '',
        'options:',
        '  -p --port    Port to use [8080]',
        '  -t --target    server target',
        '  -h --help          Print this list and exit.',
    ].join('\n'));
    process.exit();
}


const TARGET = argv.t || argv.target;
const PORT = argv.p || argv.port || 3392;

if (TARGET === null || TARGET === '') {
    console.error("define target with -t or --target")
    process.exit(1);
}

const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use(cors())
app.use('/', createProxyMiddleware({ target: TARGET, changeOrigin: true }));

app.listen(PORT, () => {
    console.log(`running at  ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log(`target to  ${TARGET}`);
});
