const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const API_URL = 'http://universities.hipolabs.com';

app.use('/api', createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
}));

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server je pokrenut na https://localhost:${port}`);
});
