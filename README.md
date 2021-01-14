# micro-frontends-sample-code-6

![overview](./overview.svg)

```
$ npm install
$ npm run install

$ export SNOWPACK_PUBLIC_COMPONENT_DISCOVERY_API_URL=http://localhost:9020/manifest.json
$ cp packages/component-discovery-api/.env.sample packages/component-discovery-api/.env
$ cp packages/team-common-api/.env.sample packages/team-common-api/.env
$ cp packages/team-inspire-api/.env.sample packages/team-inspire-api/.env
$ cp packages/team-product-api/.env.sample packages/team-product-api/.env
$ cp packages/team-search-api/.env.sample packages/team-search-api/.env

$ npm run start
```
