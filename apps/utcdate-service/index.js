'use strict'
const PORT = process.env.PORT || 3001

const Hapi = require('@hapi/hapi')
const server = new Hapi.Server({port: PORT})
const moment = require('moment')

const init = async () => {

  server.route({
    method: 'GET',
    path: '/{timestamp}/utcdate',
    handler: (request, h) => {
      const date = moment.unix(request.params.timestamp).utc().toISOString().substring(0, 19)
      return {date: date}
    }
  })

  await server.start()
  console.log(`Server started on port ${PORT}`)
  
}

init()
