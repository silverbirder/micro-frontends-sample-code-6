require('dotenv').config();
require('fastify')()
.register(require('fastify-cors'), { 
    origin: (origin, cb) => {
        cb(null, true)
        return
      }
})
.get('/manifest.json', async (request, reply) => {
  reply.type('application/json').code(200)
  return require('./modules/map')['envMap']
})
.listen(process.env.PORT || 3000)