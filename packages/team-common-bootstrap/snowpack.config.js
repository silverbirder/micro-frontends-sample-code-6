/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-typescript', '@snowpack/plugin-optimize'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    env: {
      SNOWPACK_PUBLIC_SERVICE_DISCOVERY_API_URL: true
    }
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  // proxy: {
  //   "/proxy": {
  //     on: { proxyReq: (p, req, res) => {
  //       console.log('hey');
  //       proxyReq.url = "http://localhost:8010";
  //       return proxyReq;
  //     }},
  //     target: "http://localhost:8000"
  //   }
  // },
  alias: {
    /* ... */
  },
};
