'use strict'
const PORT = process.env.PORT || 3000

const Hapi = require('@hapi/hapi')
const server = new Hapi.Server({port: PORT})
const moment = require('moment')

const init = async () => {

  server.route({
    method: 'GET',
    path: '/{timestamp}/isodate',
    handler: (request, h) => {
      return {date: moment.unix(request.params.timestamp).toISOString()}
    }
  })

  await server.start()
  console.log(`Server started on port ${PORT}`)
  
}

init()

