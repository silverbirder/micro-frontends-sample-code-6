require('dotenv').config();
require('fastify')()
.get('/manifest.json', async (request, reply) => {
  reply.type('application/json').code(200).header('Access-Control-Allow-Origin', '*')
  return {}
})
.listen(process.env.PORT || 3000)