const util = require('util')
/**
 * main action
 * @param args
 * @returns {{body: string}}
 */
function main (args) {
  console.log("starting action execution" )
  const headers = {
    'content-type': 'application/json'
  }

  console.log("action params - " + util.inspect(args))
  let message = 'tell me who you are. '
  if (args.name) {
    const name = args.name.trim()

    if (name.startsWith('!')) {
      // error command
      return {
        headers: headers,
        statusCode: 400,
        body: {
          error: name.substring(1)
        }
      }
    }

    message = `CDN -  ${name}!`
  }
  console.log("end action execution" )
  return {
    headers: {
     'Set-Cookie': '__Secure-auth_context_check=thecookievalue; Max-Age=36000; Secure; HttpOnly; Path=/'
   },
    body: {
      message
    }
  }
}

exports.main = main
