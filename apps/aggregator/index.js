'use strict'
const PORT = process.env.PORT || 8000

const Hapi = require('@hapi/hapi')
const server = new Hapi.Server({port: 8000})
let request = require('request-promise')

const init = async () => {
  server.route({
    method: 'GET',
    path: '/dates/{timestamp}',
    handler: async (req, h) => {
      try {
        let utcBody = await request(`http://utc-date-service/${req.params.timestamp}/utcdate`)
        let isoBody = await request(`http://iso-date-service/${req.params.timestamp}/isodate`)
        return {
          utcDate: JSON.parse(utcBody).date,
          isoDate: JSON.parse(isoBody).date
        }
      }
      catch (exception) {
        console.log(exception.message)
        // Just throw to get hapi to complain about the error
        throw exception
      } 
    }
  })
  
  await server.start()
  console.log(`Server running on port ${PORT}`)
}

init()
