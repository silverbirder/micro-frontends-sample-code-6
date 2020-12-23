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
  alias: {
    /* ... */
  },
};
