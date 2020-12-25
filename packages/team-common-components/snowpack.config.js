/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    "/*": {
      on: { proxyReq: (p, req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
      }}
    }
  },
  alias: {
    /* ... */
  },
};
