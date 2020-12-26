/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
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
    externalPackage: ['lit-element']
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
