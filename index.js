const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const A_URL_DO_BACK_AQUI  = "url do back aqui"
app.use('/', createProxyMiddleware({ target: 'A_URL_DO_BACK_AQUI, changeOrigin: true }));
app.listen(3000);
