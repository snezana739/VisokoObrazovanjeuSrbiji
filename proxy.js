const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const API_URL = 'http://universities.hipolabs.com'; // Koristi HTTP URL API-a

// Postavi proxy za preusmeravanje API zahteva
app.use('/api', createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Briše '/api' iz URL-a
  },
}));

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server je pokrenut na https://localhost:${port}`);
});
