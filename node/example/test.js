var index = require('./index.js')

// var process = require('process')
console.log(process.env)

console.log(process.env.npm_package_config_port)
console.log(process.env.npm_package_name)
console.log(process.env.npm_package_version)
console.log(process.env.npm_package_scripts_start)


index.printMsg()
