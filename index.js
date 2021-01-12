const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const A_URL_DO_BACK_AQUI = process.env.A_URL_DO_BACK_AQUI;
const PORT = process.env.PORT ? process.env.PORT : 3000;

const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use(cors())
app.use('/', createProxyMiddleware({ target: A_URL_DO_BACK_AQUI, changeOrigin: true }));

app.listen(PORT, () => (console.log(`rodando na porta ${PORT}`)));
